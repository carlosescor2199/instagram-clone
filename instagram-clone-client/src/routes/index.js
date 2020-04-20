import React from 'react'
import { BrowserRouter as Router, Route, /*Link,*/ Switch } from 'react-router-dom'
import Home from './home'
import Login from './login'

import 'semantic-ui-css/semantic.min.css'
import '../css/main.css'

export default () => {
    return(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
    )
}
