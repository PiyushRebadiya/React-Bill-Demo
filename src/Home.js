import React, { Component } from 'react';
import gtpl from './gtpl.jpg'
import './App.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <img src={gtpl} alt="logo" className='img' />
                    <h1 className='header'>Welcome to GTPL Site</h1>
                </div>
            </div>
        );
    }
}

export default Home;
            // <button className='OnLight' onClick={() => { nextStepHander() }}>Next</button>