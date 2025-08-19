import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SnackbarProvider, useSnackbar } from 'notistack';

interface Shipment {
  id: number;
  name: string;
  status: string;
}

const shipments: Shipment[] = [
  { id: 1, name: 'Shipment 1', status: 'In Transit' },
  { id: 2, name: 'Shipment 2', status: 'Delivered' },
];

function ShipmentsContent() {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (status: string) => {
    enqueueSnackbar(`Shipment status: ${status}`, { variant: 'info' });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Shipments
      </Typography>
      <Grid container spacing={2}>
        {shipments.map((s) => (
          <Grid
            item
            xs={12}
            md={4}
            key={s.id}
            component={'div' as React.ElementType} // TS-safe
          >
            <Card
              onClick={() => notify(s.status)}
              sx={{ cursor: 'pointer' }}
            >
              <CardContent>
                <Typography variant="h6">{s.name}</Typography>
                <Typography>Status: {s.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Shipments() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ShipmentsContent />
    </SnackbarProvider>
  );
}
