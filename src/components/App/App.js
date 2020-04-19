import React from 'react';
import Header from '../Header/Header'
import Background from '../Background/Background'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Header></Header>
                <Main></Main>
                
                <Background></Background>
            </div>
        )
    }
}