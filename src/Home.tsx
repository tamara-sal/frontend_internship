
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Stack } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Choose Operation
      </Typography>

      <Stack spacing={2} direction="column" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/addition')}
        >
          Addition
        </Button>

        <Button variant="contained" color="secondary" disabled>
          Subtraction (Coming Soon)
        </Button>
      </Stack>
    </Container>
  );
}
