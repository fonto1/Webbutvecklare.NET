import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Messenger from "./components/Messenger"
import Whiteboard from "./components/Whiteboard"
import './custom.css'

export default function App() {
    return (
        <div className="container" >
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/messenger' render={(props) => <Messenger {...props} />} />
                <Route path='/whiteboard' component={Whiteboard} />
            </Layout>
        </div>
    )
}