import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home