import React from 'react';
import { useParams } from "react-router-dom";
import getData from '../api';
import { Box, ListItem, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import '../styles/detailePage.css';
const coins = await getData();
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    
const productId = useParams();
const get_coin_info = coins.filter((el , index) => {
    return index.toString()  === productId.id;
});

  return (


    <div class="card">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="card-inner">
    <Grid container   
    justifyContent="center"
>
  <Grid item xs={12}>
    <Item>
        <p>{get_coin_info[0].code}</p>
        <img 
        src={`${get_coin_info[0].png64}?w=164&h=164&fit=crop&auto=format`}
        alt={get_coin_info[0].name}
        loading="lazy"
      /></Item>
  </Grid>
  <Grid item xs={4}>
    <Item>sds</Item>
  </Grid>

</Grid>

    </div>
</div>
  );
}