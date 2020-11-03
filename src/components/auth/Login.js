import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
    buttonLogin: {
        color: '#fff'
    }
}));

function Login({ login }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    function onChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        login(email, password);
    }

    async function handleAPI() {
        console.log(formData)
        await axios.post(`http://localhost:5000/api/auth`, formData)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <Container className={classes.container} maxWidth="xs">
            <form onSubmit={e => onSubmit(e)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    size="small"
                                    variant="outlined"
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    size="small"
                                    type="password"
                                    variant="outlined"
                                    onChange={e => onChange(e)}
                                    required

                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.buttonLogin} fullWidth type="submit" variant="contained">
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login)