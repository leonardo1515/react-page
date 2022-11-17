import React from 'react';
import { Container } from '@mui/system';
import { Button, Grid, TextField, Typography } from '@mui/material';

const Form: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      fixed
      sx={{
        marginBottom: '5px',
        textAlign: 'center'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Inscreva-se</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email:" type="email" fullWidth required></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Senha:" type="password" fullWidth required></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Cadastrar</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
