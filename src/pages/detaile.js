import React from 'react';
import {useParams} from "react-router-dom";
import getData from '../api';
import '../styles/detailePage.css';
import {FormLabel, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));


const coins = await getData();
export default function BasicGrid() {

    const productId = useParams();
    const get_coin_info = coins.filter((el, index) => {
        return index.toString() === productId.id;
    });
    return (

        <div class="container">
            <div class="brand-logo">

                <img className="logo-image"
                    src={
                        `${
                            get_coin_info[0].png64
                        }`
                    }
                    alt={
                        get_coin_info[0].title
                    }
                    loading="lazy"/>
            </div>
            <div class="brand-title">
                {
                get_coin_info[0].name
            }</div>
            <div>
                <Grid container spacing={4}   justifyContent="space-around" >
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    </Grid>
                    <Grid container spacing={4}   justifyContent="space-around" >
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    <Grid  xs={3}>
                      <label >Cap</label>
                        <Item  class="item inputs">
                            {
                           <p class="item_content">{get_coin_info[0].name}</p>  
                        }</Item>
                    </Grid>
                    
                    </Grid>

 </div>
        </div>
    )
}
