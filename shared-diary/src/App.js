import React from 'react';
import EmailInput from './components/EmailInput/EmailInput';
import CalendarInput from './components/CalendarInput/CustomInput';
import TextEditor from './components/TextEditor/TextEditor';
import ArtileList from './components/ArtileList/ArtileList';
import axios from 'axios';

import './App.scss';
import './iconfont/iconfont.css';

// 月份储存和显示的时候 + 1
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'email': '@匿名用户', //默认是匿名用户
            'content': [],
            'date': {
                'year': '',
                'month': '',
                'date': '',
                'day': ''
            }
        }
        this.saveEmail = this.saveEmail.bind(this);
        this.saveDate = this.saveDate.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    saveEmail(email) {
        this.setState({
            'email': email
        })
    }

    saveDate(d) {
        this.setState({
            'date': d
        })
    }

    saveArticle(html) {
        this.setState({
            'html': html
        })
    }

    fetchData(callback) {
        axios.get("do/read.php", {
            params: {
                "sort": 0 //0 倒序，1 正序
            }
        }).then((data) => {
            // console.log(data)
            if (!data.statusText === 'OK') {
                alert('服务器错误');
                return;
            }
            let d = data.data.result;
            // 返回的数据是数组，数组成员是字符串
            let content = d.map((item) => {
                item = JSON.parse(item);
                return {
                    'email': item.email,
                    'date': item.date,
                    'html': item.message,
                    'id': item.id
                }
            })
            this.setState({
                'content': content
            })
        }).then(() => {
            if (typeof callback === 'function') {
                // 保存成功清空输入框
                callback();
            } else {
                // console.log('nofun');
            }
        })
    }

    componentDidMount() {
        // 初始化date
        const DAYARR = ['日', '一', '二', '三', '四', '五', '六'];
        let d = new Date();

        this.setState({
            date: {
                'year': d.getFullYear(),
                'month': d.getMonth(),
                'date': d.getDate(),
                'day': '周' + DAYARR[d.getDay()]
            }
        })
        // 初始化
        this.fetchData();
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">共享日记</h1>
                <div className="App-ipt">
                    <EmailInput
                        callback={this.saveEmail}
                    />
                    <CalendarInput callback={this.saveDate} />
                </div>
                {/* <a name="btn"></a> */}

                <TextEditor
                    fetchData={this.fetchData}
                    html={this.state.html}
                    date={this.state.date}
                    email={this.state.email}
                />
                <ArtileList content={this.state.content} />
                {/* <a href="#btn" className="back" >BACK</a> */}
            </div>
        );
    }

}

export default App;
