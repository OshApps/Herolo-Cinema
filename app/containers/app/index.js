import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./app.scss"
import "@components/layout/layout.scss"

import { fetchMovies } from '@actions/movies';

import Header from '@components/layout/header';
import Main from '@components/layout/main';
import Modal from '@containers/layout/modal';

class App extends Component {

    componentWillMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div id="app">
                <Header />
                <Main />
                <Modal />
            </div>
        );
    }
}

function mapStateToProps(state) {
    let {} = state;

    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)