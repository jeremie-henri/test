import React from 'react';
import InputField from "./InputField";
import UserStore from "./stores/UserStore";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            black: null,
            white: null,
            buttonDisabled: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
           [property]: val
        })
    }

    resetForm(){
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        });
    }

    async doLogin() {

        if(!this.state.username) {
            return;
        }
        if (!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled: false
        });

        try{
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });
            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                UserStore.black = result.black;
                UserStore.white = result.white;
            }
            else if (result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
        }
        catch (e) {
            this.resetForm();
        }

    }

    async doRegister() {


        if(!this.state.username) {
            return;
        }
        if (!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled: false
        })

        try{
            let res = await fetch('/register', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });
            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                UserStore.black = result.black;
                UserStore.white = result.white;
            }
            else if (result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
        }
        catch (e) {
            console.log(e);
            this.resetForm();
        }

    }

    render() {
        return (
            <div className="loginForm">
                Log in
                <InputField
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username :''}
                    onChange={ (val) => this.setInputValue('username', val)}
                    />
                <InputField
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={ (val) => this.setInputValue('password', val)}
                />
                <div className="submitButton">
                    <button
                        className='btn'
                        onClick={ () =>this.doLogin()}
                    >Login
                    </button>
                    <button
                        className='btn'
                        onClick={ () =>this.doRegister()}
                    >Register
                    </button>
                </div>

                </div>
        );
    }
}

export default LoginForm;
