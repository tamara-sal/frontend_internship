import React, { useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./NumberSelector.css";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch, setSelection, selectNumber, clearSelection } from "./store/store";

export default function NumberSelector() {
  const selected = useSelector((state: RootState) => state.numbers.selected);
  const dispatch = useDispatch();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedNumbers");
    if (saved) dispatch(setSelection(JSON.parse(saved)));
  }, [dispatch]);

  // Save to localStorage whenever selection changes
  useEffect(() => {
    localStorage.setItem("selectedNumbers", JSON.stringify(selected));
  }, [selected]);

  const sumText =
    selected.length === 2
      ? `${selected[0]} + ${selected[1]} = ${selected[0] + selected[1]}`
      : null;

    const handleClear = () => {
         dispatch(clearSelection());
        localStorage.removeItem("selectedNumbers");
};

  return (
    <div className="number-container">
      <div className="cards-row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Card
            key={num}
            className={`card ${selected.includes(num) ? "selected" : ""}`}
          >
            <CardContent>
              <Typography variant="h5">{num}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(selectNumber(num))}
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
  sx={{
    backgroundColor: "#fff",
    color: "#000",
    '&:hover': {
      backgroundColor: "#ddd"
    }
  }}
>
  Clear
</Button>
    </div>
  );
}
