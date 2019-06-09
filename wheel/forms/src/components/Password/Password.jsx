import React from 'react';
import './Password.scss';

// 检查密码强度
class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'tip': '',
            'tipColor': 'red',
            'showTip': false,
            'focus': false,
            'pwd': ''
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //密码强度检测
    checkPwd(password) {
        //积分制，至少六位，小写字母加一分，大写字母加一分，数字加一分，有字母数字之外的符号加一分
        var lv = 0; //每次输入清零，重新计算
        if (password.match(/[a-z]/g)) { lv++; }
        if (password.match(/[A-Z]/g)) { lv++; }
        if (password.match(/[0-9]/g)) { lv++; }
        if (password.match(/(.[^a-z0-9])/g)) { lv++; }
        if (password.length < 6) { lv = 0; }
        if (lv > 4) { lv = 4; }

        return lv;
    }

    handleChange(e) {
        const TIPS = ['密码最少 6 位', '密码强度：低', '密码强度：中', '密码强度：高', '密码强度：极高']
        let pwd = e.target.value;
        let color = 'red';

        if (!pwd) {
            this.setState({
                'tip': '密码不能为空',
                'showTip': true,
            })
            return;
        }

        let pwdLevel = this.checkPwd(pwd);

        this.setState({
            'tip': TIPS[pwdLevel],
            'showTip': true,
            'pwd': pwd,
            'pwdLevel': pwdLevel
        })

        switch (pwdLevel) {
            case 0:
                color = 'red';
                break;
            case 1:
                color = '#beab00';
                break;
            case 2:
                color = 'blue';
                break;
            case 3:
                color = 'blueviolet';
                break;
            case 4:
                color = 'green';
                break;
            default:
                color = '#000';
        }

        this.setState({
            tipColor: color
        })
    }

    handleBlur(e) {
        this.setState({
            'focus': false
        });

        if (this.state.pwdLevel > 0) {
            this.props.callback(this.state.pwd);
        }
    }

    handleFocus() {
        this.setState({
            'showTip': true,
            'focus': true
        })
    }

    render() {
        return (
            <div className="Password">
                <label
                    htmlFor="password"
                    className={this.state.focus === true || !!this.state.pwd ? 'focus' : ''}
                    style={{ 'color': this.state.focus ? '' : '#868686' }}
                >
                    密码
                </label>

                <input
                    type="password"
                    id="password"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    className={this.state.focus === true ? 'focus' : ''}
                ></input>
                <div
                    className="Password-tip"
                    style={{ 'color': this.state.tipColor }}
                >
                    {this.state.tip}
                </div>


            </div>
        )
    }


}

export default Password;