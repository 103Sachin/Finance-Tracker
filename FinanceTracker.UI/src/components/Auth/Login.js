import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        console.log('Submit is clicked');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
               />
               <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
               />
               <Button type="submit" variant="contained" color="primary">
                 Login
               </Button>
            </form>
        </Container>
    );
};

export default Login;