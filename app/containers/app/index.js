import React, { Component} from 'react'
import { connect } from 'react-redux'

import "./app.scss"
import "@components/layout/layout.scss"

import * as moviesActions from '@actions/movies';

import Header from '@components/layout/Header';
import Main from '@components/layout/Main';

class App extends Component {

    componentWillMount(){
        this.props.fetchMovies();
    }

    render() {
        return (
        <div id="app">
            <Header/>
            <Main/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    let {} =state

	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMovies:()=> dispatch(moviesActions.fetchMovies())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)