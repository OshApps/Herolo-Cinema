import React, { Component } from 'react';

import Menu from "./Menu";
import Movies from "@containers/movies";

export default class Main extends Component {

    render() {   

        return (
        <main>
            <Menu/>
            <Movies />
        </main>
        );
    }
}