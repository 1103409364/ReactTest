import React from 'react';
import CustomInput from './components/CustomInput/CustomInput'
import Calendar from './components/Calendar-Hook/Calendar';
import './App.scss';

function App() {
    return (
        <div className="App">
            <h3>calendar</h3>
            <div className="Cal">
                <Calendar callback={d => console.log(d)} />
                {/*使用 render prop 进行复用*/}
                {/* <CustomInput
                    render={(callback) => {
                        return <Calendar callback={callback} />
                    }}
                    callback={(d) => console.log(d)} /> */}
                <CustomInput
                    render={(callback) => {
                        return <Calendar callback={callback} />
                    }}
                    callback={(d) => console.log(d)} />
            </div>
        </div>
    );
}

export default App;
