import React, { useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./NumberSelector.css";
import { useSelector, useDispatch } from "react-redux";
import {
  type RootState,
  type AppDispatch,
  setSelection,
  selectNumber,
  clearSelection,
} from "./store/store";

interface HistoryEntry {
  numbers: number[]; // two numbers selected
  sum: number;
  time: string;
}

export default function NumberSelector() {
  const selected = useSelector((state: RootState) => state.numbers.selected);
  const dispatch = useDispatch();

  const [history, setHistory] = React.useState<HistoryEntry[]>([]);

  // Load selected numbers from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedNumbers");
    if (saved) dispatch(setSelection(JSON.parse(saved)));
  }, [dispatch]);

  // Save selected numbers to localStorage whenever selection changes
  useEffect(() => {
    localStorage.setItem("selectedNumbers", JSON.stringify(selected));
  }, [selected]);

  // Load addition history from localStorage on mount
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("additionHistory") || "[]") as HistoryEntry[];
    setHistory(savedHistory);
  }, []);

  // Whenever selection changes to two numbers, add to history and save
  useEffect(() => {
    if (selected.length === 2) {
      const newEntry: HistoryEntry = {
        numbers: [selected[0], selected[1]],
        sum: selected[0] + selected[1],
        time: new Date().toLocaleString(),
      };

      const currentHistory = JSON.parse(localStorage.getItem("additionHistory") || "[]") as HistoryEntry[];
      currentHistory.push(newEntry);
      localStorage.setItem("additionHistory", JSON.stringify(currentHistory));
      setHistory(currentHistory);
    }
  }, [selected]);

  const sumText =
    selected.length === 2
      ? `${selected[0]} + ${selected[1]} = ${selected[0] + selected[1]}`
      : null;

  const handleClear = () => {
    dispatch(clearSelection());
    localStorage.removeItem("selectedNumbers");
  };

  const handleClearHistory = () => {
    localStorage.removeItem("additionHistory");
    setHistory([]);
  };

  return (
    <div className="number-container">
      <div className="cards-row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Card
            key={num}
            className={`card ${selected.includes(num) ? "selected" : ""}`}
          >
            <CardContent className="card-content">
              <Typography variant="h5">{num}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(selectNumber(num))}
                className="select-button"
              >
                Select
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {sumText && <div className="sum-text">{sumText}</div>}

      <Button
        variant="contained"
        onClick={handleClear}
        className="clear-selection-button"
      >
        Clear Selection
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClearHistory}
        className="clear-history-button"
      >
        Clear History
      </Button>

      {history.length > 0 && (
        <div className="history-container">
          <h3>Addition History</h3>
          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-item">
                {item.numbers[0]} + {item.numbers[1]} = {item.sum} <br />
                <small className="history-time">{item.time}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
