import React from 'react';
import './App.scss';
import EmailInput from './components/EmailInput/EmailInput';
import PhoneInput from './components/PhoneInput/PhoneInput';
import Password from './components/Password/Password';
import UserIDinput from './components/UserIDinput/UserIDinput';
import CustomInput from './components/CustomInput/CustomInput-Hook';
import TextEditor from './components/TextEditor/TextEditor';

function App() {
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
            <div style={{ 'height': '30px' }} />
            {/* 可配置的输入框 */}
            <CustomInput
                options={{
                    'inputType': 'IPv4地址',
                    'pattern': /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/,
                    'tipStr': '请输入正确的IP',
                    'callback': field => console.log(field)
                }}
            />

            <div style={{ 'height': '30px' }} />
            {/* <TextEditor
                defaultValue="## MarkDown"
                callback={text => console.log(text)}
            /> */}
        </div>
    );
}

export default App;
