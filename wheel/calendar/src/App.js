import React from 'react';
import CustomInput from './components/CustomInput/CustomInput'
import Calendar from './components/Calendar/Calendar';
import './App.scss';

function App() {
    return (
        <div className="App">
            <h3>calendar</h3>
            <div className="Cal">
                <Calendar callback={d => console.log(d)} />
                <CustomInput callback={d => console.log(d)} />
            </div>
        </div>
    );
}

export default App;
