import React from 'react';
import './App.scss';
import EmailInput from './components/EmailInput/EmailInput';
import PhoneInput from './components/PhoneInput/PhoneInput';
import Password from './components/Password/Password';
import UserIDinput from './components/UserIDinput/UserIDinput'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'email': ""
        }
    }

    saveEmail(email) {
        this.setState({
            'email': email
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Form</h1>
                <EmailInput
                    callback={email => console.log(email)}
                />
                <div style={{ 'height': '30px' }} />
                <PhoneInput
                    callback={phone => console.log(phone)}
                />
                <div style={{ 'height': '30px' }} />
                <Password
                    callback={pwd => console.log(pwd)}
                />
                <div style={{ 'height': '30px' }} />
                <UserIDinput
                    callback={id => console.log(id)}
                    // pattern={/^\d+$/}
                    // tipStr = "只能包含数字"
                />
            </div>
        );
    }

}

export default App;
