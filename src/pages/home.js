import {Grid , Paper} from "@mui/material";
import Footer from "../components/footer";
import "../styles/home.css"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Home = () => {
    return (
        <div>
            <Grid class="header-wrraper"container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item
                    xs={12}>
                    <Grid>1</Grid>
                </Grid>
                
            </Grid>
            <Grid  class="main-wrraper"container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item
                    xs={8}>
                    <Grid>1</Grid>
                </Grid>
                
            </Grid>
            <Grid class="footer-wrraper" container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item
                    xs={12}>
                    <Grid>1</Grid>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Home;
