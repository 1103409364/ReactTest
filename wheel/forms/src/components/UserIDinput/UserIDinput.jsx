import React from 'react';
import './UserIDinput.scss';

// 检查用户名是否符合给定的规则
// 默认规则 4到16位（字母，数字，下划线，减号）
// 接收两个参数 1 正则表达式 2 规则描述字符串
class UserIDinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'tip': '',
            'showTip': false,
            'focus': false,
            'inputTxt': '',
            'UserID': ''
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
    // 输入框失去焦点的时候，验证ID有效性,非法则清空 UserID 字段
    handleBlur(e) {
        this.setState({
            'focus': false
        })

        let UserID = e.target.value;

        if (!UserID) return;
        
        let pattern = this.props.pattern ? this.props.pattern : /^[a-zA-Z0-9_-]{4,16}$/;
        let tipStr = this.props.tipStr ? this.props.tipStr : '只能包含（字母，数字，下划线，减号）长度4到16位';
        // console.log(pattern);
        
        if (!pattern.test(UserID)) {
            this.setState({
                'tip': tipStr,
                'showTip': true,
                'UserID': ''
            })
        } else {
            this.setState({
                'UserID': UserID,
                'showTip': true,
                'tip': '√',
            });

            this.props.callback(UserID);
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
            <div className="UserIDinput">
                <label
                    htmlFor="UserIDinput"
                    className={this.state.focus === true || !!this.state.inputTxt ? 'focus' : ''}
                    style={{'color': this.state.focus ? '': '#868686'}}
                >
                    用户名
                </label>

                <input
                    type="text"
                    id="UserIDinput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    className={this.state.focus === true ? 'focus' : ''}
                ></input>
                <div
                    className={this.state.UserID !== '' ? 'UserIDinput-tip legal' : 'UserIDinput-tip illegal'}
                    style={{ 'opacity': this.state.showTip === true ? '1' : '0' }}
                >
                    {this.state.tip}
                </div>


            </div>
        )
    }


}

export default UserIDinput;