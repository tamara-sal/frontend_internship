import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface PricingItem {
  id: number;
  type: string;
  price: string;
}

const pricing: PricingItem[] = [
  { id: 1, type: 'Small', price: '$5 per kg' },
  { id: 2, type: 'Medium', price: '$8 per kg' },
  { id: 3, type: 'Large', price: '$12 per kg' },
];

export default function Pricing() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={2}>
        {pricing.map((item) => (
          <Grid
            item
            xs={12}
            md={4}
            key={item.id}
            component={'div' as React.ElementType} // TS-safe
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{item.type}</Typography>
                <Typography>{item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
