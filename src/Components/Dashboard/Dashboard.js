import React, {Component} from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            search: '',
            isChecked: true,
            posts: []
        }
    }

    searchEngine(value){
        this.setState({
            search: value
        })
    }

    clickSearch(){
        this.searchEngine()
    }

    resetButton(){
        this.setState({
            search: ''
        })
    }

    isNotChecked(){
        this.setState({
            isChecked: false
        })
    }

    componentDidUpdate(){
        Axios
        .get('/posts/user/:id', {id, posts, search})
        .then(res => {
            this.
        })
    }

    render () {
        const posts = this.state

        const postList = this.posts.map((element) => {
            <h2 key={element.index}>
                {element.title}
                {element.username}
                {element.profilePic}
            </h2>
        })

        return (
            <div>
                Dashboard.js
                <input onChange={ (e) => this.searchEngine (e.target.value) }/>
                <button onClick={ () => this.clickSearch () }>Search</button>
                <button onClick={ () => this.resetButton () }>Reset</button>
                <input type="checkbox" onClick={() => this.isNotChecked() }/>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard)