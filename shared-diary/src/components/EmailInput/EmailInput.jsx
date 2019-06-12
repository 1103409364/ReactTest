import React from 'react';
import './EmailInput.scss';

// 检查邮箱，格式错误，显示警告
class EmailInputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'tip': '',
            'showTip': false,
            'focus': false,
            'inputTxt': '',
            'email': ''
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let ipt = e.target.value;

        this.setState({
            'inputTxt': ipt
        })
    }
    // 输入框失去焦点的时候，验证邮箱有效性,邮箱非法则清空 email 字段
    handleBlur(e) {
        this.setState({
            'focus': false
        })

        let email = e.target.value;

        if (!email) return;

        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
            this.setState({
                'tip': 'Email 格式错误',
                'showTip': true,
                'email': ''
            })
        } else {
            this.setState({
                'email': email,
                'showTip': true,
                'tip': '√',
            });

            this.props.callback(email);
        }
    }

    handleFocus() {
        this.setState({
            'showTip': false,
            'focus': true
        })
    }

    render() {
        return (
            <div className="EmailInputBox">

                <label
                    htmlFor="EmailInputBox"
                    className={this.state.focus === true || !!this.state.inputTxt ? 'focus' : ''}
                    style={{'color': this.state.focus ? '': '#868686'}}
                >
                    电子邮件
                </label>

                <input
                    type="text"
                    id="EmailInputBox"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    className={this.state.focus === true ? 'focus' : ''}
                ></input>
                <div
                    className={this.state.email !== '' ? 'EmailInputBox-tip legal' : 'EmailInputBox-tip illegal'}
                    style={{ 'opacity': this.state.showTip === true ? '1' : '0' }}
                >
                    {this.state.tip}
                </div>
                <i className="iconfont">&#xe623;</i>
            </div>
        )
    }


}

export default EmailInputBox;