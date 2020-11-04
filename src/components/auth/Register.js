import React, { Fragment, useState } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';

// Custom css tag of material
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
    buttonLogin: {
        color: '#fff'
    }
}));

function Register({ setAlert, register, isAuthenticated }) {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: '',
        fullname: '',
        email: '',
        role: '',
        address: '',
        password: '',
        password2: ''
    })

    const { name, fullname, email, role, address, password, password2 } = formData;


    function onChange(e) {
        console.log('change', e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password is not match', 'danger')
        } else {
            register({ name, fullname, email, role, address, password });
        }
        // login(email, password);
    }

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <Container className={classes.container} maxWidth="xs">
                <form onSubmit={e => onSubmit(e)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        size="small"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="Fullname"
                                        name="fullname"
                                        size="small"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        size="small"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="Role"
                                        name="role"
                                        size="small"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        size="small"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        
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
                                        

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        name="password2"
                                        size="small"
                                        type="password"
                                        variant="outlined"
                                        onChange={e => onChange(e)}
                                        

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
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { setAlert, register }
)(Register);