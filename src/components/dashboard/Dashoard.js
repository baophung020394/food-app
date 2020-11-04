import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../redux/actions/profile'

function Dashoard({ getCurrentProfile, auth, profile }) {
    useEffect(() => {
        getCurrentProfile();
    }, [])
    return (
        <div>
            mlemmlem
        </div>
    )
}

Dashoard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashoard);

