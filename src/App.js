import React from 'react';
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import LoginForm from "./LoginForm";
import Board from "./Board";
import './App.css';
import Chat from "./Chat";

class App extends React.Component {

    async componentDidMount() {
        try {
            let res = await fetch('/isLoggedIn', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();
            if (result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }
        catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }

    }

    async doLogout() {

        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let result = await  res.json();

            if (result && result.success){
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
        }
        catch (e) {
            console.log(e)
        }

    }

  render() {
        if (UserStore.loading){
            return (
                <div className='app'>
                    <div className='container'>
                        Chargement ....
                    </div>
                </div>
            );
        }
        else {
            if (UserStore.isLoggedIn){
                return (
                    <div className='app'>
                        <Chat/>
                        <div className='container'>
                            Welcome {UserStore.username}
                            <div className="submitButton">
                                <button
                                    className='btn'
                                    onClick={ () =>this.doLogout()}
                                >LogOut
                                </button>
                                <Board></Board>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div className="app">
                    <div className='container'>
                        <h1>Projet React L3</h1>

                        <LoginForm />

                    </div>
                </div>
            );
        }
    }
}

export default observer(App);
