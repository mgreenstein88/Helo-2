import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import loginuser from '../../ducks/reducer'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername(value){
        this.setState({
            username: value
        })
    }

    handlePassword(value){
        this.setState({
            password: value
        })
    }

    register(){
        this.setState({
            loginError: false,
            registerError: false,
        })
        const {username, password} = this.state

        Axios
        .post('/auth/register', {username, password})
        .then((res) => {
            this.setState({
                username: '',
                password: ''
            })
        }).catch(() => {
            this.setState({
                username: '',
                password: '',
                registerError: true
            })
        })
        this.componentDidMount()
    }

    componentDidMount(){
        this.props.loginuser()
    }

    render () {
        return (
            <div>
                Auth.js
                <input onChange={(e) => this.handleUsername (e.target.value) }/>
                <input onChange={(e) => this.handlePassword (e.target.value) }/>
                <button onClick={() => this.register () }>Login</button>           
                <button>Register</button>
            </div>
        )
    }
}

export default connect(null, {loginuser})(Auth)