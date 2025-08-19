import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Driver {
  id: number;
  name: string;
  phone: string;
  rating: number;
}

const drivers: Driver[] = [
  { id: 1, name: 'John Doe', phone: '70-123456', rating: 4.5 },
  { id: 2, name: 'Jane Smith', phone: '70-654321', rating: 4.8 },
];

export default function Drivers() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Cargo Drivers
      </Typography>
      <Grid container spacing={2}>
        {drivers.map((driver) => (
          <Grid
            item
            xs={12}
            md={4}
            key={driver.id}
            component={'div' as React.ElementType} // TS-safe
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{driver.name}</Typography>
                <Typography>Phone: {driver.phone}</Typography>
                <Typography>Rating: {driver.rating} ⭐</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
