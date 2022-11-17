import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Form from '../components/Form/Form';
import CardDefalt from '../components/Card/CardDefalt';
import TitleDefalt from '../components/Title/Title';

const About: React.FC = () => {
  return (
    <>
      <div>
        <Container
          maxWidth="lg"
          fixed
          sx={{
            marginTop: '150px',
            marginRight: '5px'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleDefalt title="Profissão: Cientista de Dados" size="45px" />
            </Grid>
            <Grid item xs={6}>
              Lorem dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum inventore, sequi
              animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? Ipsam amet velit excepturi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum inventore,
              sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? Ipsam amet velit
              excepturi.
            </Grid>
            <Grid item xs={6}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Container
          maxWidth="lg"
          fixed
          sx={{
            marginTop: '150px'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleDefalt title="Deolho no mercado" size="35px" />
            </Grid>
            <Grid item xs={6}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum Lorem ipsum dolor
              sit amet consectetur .
            </Grid>
            <Grid item xs={6}>
              <CardDefalt
                backg="grey"
                title="Salário mensal médio"
                subtitle="R$8.571,00"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum ."
                footer="* Lorem ipsum dolor sit amet consectetur .r"
              ></CardDefalt>
            </Grid>
            <Grid item xs={12}>
              <TitleDefalt title="Profissão: Cientista de Dados" size="35px" />
            </Grid>
            <Grid item xs={3}>
              <CardDefalt
                backg="weight"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum ."
              />
            </Grid>
            <Grid item xs={3}>
              <CardDefalt
                backg="weight"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum ."
              />
            </Grid>
            <Grid item xs={3}>
              <CardDefalt
                backg="weight"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum ."
              />
            </Grid>
            <Grid item xs={3}>
              <CardDefalt
                backg="weight"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum ."
              />
            </Grid>
            <Grid item xs={12}>
              <TitleDefalt title="Titolo" size="45" />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum .
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <CardDefalt
                backg="weight"
                subtitle="Titolo"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi."
              />
            </Grid>
            <Grid item xs={4}>
              <CardDefalt
                backg="weight"
                subtitle="Titolo"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi."
              />
            </Grid>
            <Grid item xs={4}>
              <CardDefalt
                backg="weight"
                subtitle="Titolo"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam illum dolorum 
                inventore, sequi animi natus porro obcaecati, minima eos modi vel, odit earum quaerat placeat? 
                Ipsam amet velit excepturi."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
