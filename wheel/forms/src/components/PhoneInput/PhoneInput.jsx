import React from 'react';
import './PhoneInput.scss';

// 检查手机号，格式错误，显示警告
class PhoneInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'tip': '',
            'showTip': false,
            'focus': false,
            'inputTxt': '',
            'phone': ''
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
    // 输入框失去焦点的时候，验证手机号有效性,手机号非法则清空 phone 字段
    handleBlur(e) {
        this.setState({
            'focus': false
        })

        let phone = e.target.value;

        if (!phone) return;

        if (!/^[1]([3-9])[0-9]{9}$/.test(phone)) {
            this.setState({
                'tip': '无效手机号',
                'showTip': true,
                'phone': ''
            })
        } else {
            this.setState({
                'phone': phone,
                'showTip': true,
                'tip': '√',
            });

            this.props.callback(phone);
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
            <div className="PhoneInput">
                <label
                    htmlFor="PhoneInput"
                    className={this.state.focus === true || !!this.state.inputTxt ? 'focus' : ''}
                    style={{'color': this.state.focus ? '': '#868686'}}
                >
                    手机号
                </label>

                <input
                    type="text"
                    id="PhoneInput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    className={this.state.focus === true ? 'focus' : ''}
                ></input>
                <div
                    className={this.state.phone !== '' ? 'PhoneInput-tip legal' : 'PhoneInput-tip illegal'}
                    style={{ 'opacity': this.state.showTip === true ? '1' : '0' }}
                >
                    {this.state.tip}
                </div>


            </div>
        )
    }


}

export default PhoneInput;