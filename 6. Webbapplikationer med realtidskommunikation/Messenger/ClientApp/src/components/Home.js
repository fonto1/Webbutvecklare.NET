import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <p></p>
                <div className="jumbotron">
                    <h1 className="display-4">The Hotel Utilities</h1>
                    <p className="lead">The goal of this project is to have accessible tools for employees to easily communicate with each other</p>
                    <p>Feel Free To Navigate Around. Have Fun!!!</p>
                </div>
            </div>
        );
    }
}