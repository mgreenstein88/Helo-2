import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render () {
        return (
            <div>
                <Link to="/dashboard">
                    Home
                </Link>
                <Link to="/new">
                    New Post
                </Link>
                <Link to="/">
                    Logout
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return (
        reduxState.username,
        reduxState.profilePic
    )
}

export default connect(mapStateToProps)(withRouter(Nav))