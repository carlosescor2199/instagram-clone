import React, { Component } from 'react'
import {Grid, Image} from 'semantic-ui-react'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash'

//Utils
import queries from '../utils/queries'
//Components
import SignIn from './login/signin'
import SignUp from './login/signup'
//import LostPassword from './login/lostpassword'


const styles = {
    grid: {
        height: '100%',
        width: '900px',
        margin: '0 auto',
    },
    box: {
        backgroundColor: 'white',
        border: '1px solid #e6e6e6',
        textAlign: 'center',
        marginBottom: '1em',
        padding: '1em'

    }
}


class login extends Component {
    state = {
        showLogin: true,
        showRegister: false,
        showLostPassword: false,
        argsSignup: {},
        errorSignup: [],
        argsSignin: {},
        errorSignin: []
    }

    showLogin = (e) => {
        e.preventDefault();
        this.setState({showLogin: true, showRegister: false, showLostPassword: false})
    }

    showRegister = (e) => {
        e.preventDefault();
        this.setState({showLogin: false, showRegister: true, showLostPassword: false})
    }

    handleLogin = async (e, args) => {
        console.log(args)
        const response = await this.props.login({
            variables: args
        })
        const {errors, success, token} = response.data.login
        if(!success){
            this.setState({errorSignin: errors})
        }else{
            localStorage.setItem('token', token)
            this.props.history.push("/")
        }
    }

    handleRegister = async (e, args) => {
        const response = await this.props.createUser({
            variables: args
        })

        const {errors, success} = response.data.createUser;
        if(!success){
            this.setState({errorSignup:errors})
        }else{
            this.props.history.push("/");
        }
    }

    handleChange = (e, input) => {
        const argsSignup = this.state.argsSignup
        argsSignup[input.name] = input.value
        this.setState({argsSignup})
    }

    handleChangeSignIn = (ev, input)=>{
        const argsSignin = this.state.argsSignin
        argsSignin[input.name] = input.value
        this.setState({argsSignin})
    }

    render() {
        //showLostPassword
        const {showLogin, showRegister, argsSignup, errorSignup, argsSignin, errorSignin} = this.state;

        return (
            <Grid columns={2} centered verticalAlign="middle" style={styles.grid}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="images/phone.png" alt="home" fluid/>
                    </Grid.Column>
                    <Grid.Column>
                        { showLogin && <SignIn styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin} handleChange={this.handleChangeSignIn} args={argsSignin} errors={errorSignin} /> }
                        { showRegister && <SignUp styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister} handleChange={this.handleChange} args={argsSignup} errors={errorSignup} /> }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default compose(
    graphql(queries.mutation.login, {name: 'login'}),
    graphql(queries.mutation.createUser, {name: 'createUser'})
    )(login);
