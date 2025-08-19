import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Review {
  id: number;
  user: string;
  text: string;
}

const reviews: Review[] = [
  { id: 1, user: 'Sara', text: 'Fast and reliable!' },
  { id: 2, user: 'Joseph', text: 'Very professional drivers.' },
  { id: 3, user: 'Mona', text: 'Affordable pricing and on time.' },
];

export default function Reviews() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Customer Reviews
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid
            item
            xs={12}
            md={4}
            key={review.id}
            component={'div' as React.ElementType} // TS-safe
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{review.user}</Typography>
                <Typography>{review.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
