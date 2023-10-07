import {Button, TextField} from '@mui/material';
import "../styles/login.css";

const Login = () => {
    return (
        <div>
            <div class="form">
                <h2>Login</h2>
                <div class="input">
                    <div class="inputBox">
                        <label>Username</label>
                        <TextField type="text" placeholder="example@xyz.com"  fullWidth  />
                    </div>
                    <div class="inputBox">
                        <label>Password</label>
                        <TextField  type="password" placeholder="······"  fullWidth  />
                    </div>
                    <div class="inputBox">
                        <Button class="btn" variant='contained'>Signin</Button>
                    </div>
                </div>  
                <p class="forget">Forgot Password?
                    <a href="#">Click Here</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
