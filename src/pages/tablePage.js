import { Grid, ListItem } from "@mui/material";
import CoinsList from "../components/list";
export default function tablePage({coins}) {
    console.log(coins);
    return (
        <>

            <Grid container direction="row" justifyContent="center">

                <Grid item
                    xs={11}
                    sx={    
                        {marginTop: "50px"}
                }>
                    <ListItem><CoinsList coins={coins}/></ListItem>
                </Grid>

            </Grid>
        </>
    )
}

