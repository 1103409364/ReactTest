import React, { useState } from 'react';
import { post, get } from './utils/request';

function App() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('')
    const handleSubmit = () => {

        post('http://localhost:3000/login', {
            account: account,
            password: password
        })
            .then((res) => {
                if (res) {
                    console.log(res);
                    // this.context.router.push('/');
                    // window.location = '/success'
                } else {
                    console.log(res);

                    alert('登录失败，账号或密码错误');
                }
            })
    }

    const handle = () => {
        get('http://localhost:3000/')
            .then((res) => {
                console.log(res);
            })
    }

    // 默认账号密码 admin 123456
    return (
        <div className="App">
            <header className="App-header">
                <p>账号
                    <input type="text" onChange={(e) => setAccount(e.target.value)} ></input>
                </p>
                <p>密码
                    <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
                </p>
                <p>
                    <button
                        onClick={() => {
                            handleSubmit()
                        }}
                    >登陆</button>
                    <button
                        onClick={() => {
                            handle()
                        }}
                    >get</button>
                </p>
            </header>
        </div>
    );
}

export default App;
