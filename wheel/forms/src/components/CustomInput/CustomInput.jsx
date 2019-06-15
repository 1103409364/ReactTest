import React from 'react';
import './CustomInput.scss';

// 可配置的输入框，可接一个配置对象options：
// 
// {
//     inputType: 输入框名称，比如 '手机号'、'邮箱'、'身份证号' 等等,
//     pattern: 匹配规则,
//     tipStr: 错误提示文本,
//     callback: 回调函数
// }
class CustomInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'tip': '',
            'showTip': false,
            'focus': false,
            'inputTxt': '',
            'field': '',
            // 如果没有传入配置，使用默认配置
            'options': this.props.options ? this.props.options : {
                'inputType': '正整数',
                'pattern': /^\d+$/,
                'tipStr': '请输入正整数',
                'callback': field => console.log(field)
            }
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
    // 输入框失去焦点的时候，验证字段有效性,邮箱非法则清空 field 字段
    handleBlur(e) {
        this.setState({
            'focus': false
        })

        let field = e.target.value;

        if (!field) return;

        if (!this.state.options.pattern.test(field)) {
            this.setState({
                'tip': this.state.options.tipStr,
                'showTip': true,
                'field': ''
            })

            this.state.options.callback('error');
        } else {
            this.setState({
                'field': field,
                'showTip': true,
                'tip': '√',
            });

            this.state.options.callback(field);
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
            <div className="CustomInput">
                <label
                    htmlFor="CustomInput"
                    className={this.state.focus === true || !!this.state.inputTxt ? 'focus' : ''}
                    style={{ 'color': this.state.focus ? '' : '#868686' }}
                >
                    {this.state.options.inputType}
                </label>

                <input
                    type="text"
                    id="CustomInput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    className={this.state.focus === true ? 'focus' : ''}
                ></input>
                <div
                    className={this.state.field !== '' ? 'CustomInput-tip legal' : 'CustomInput-tip illegal'}
                    style={{ 'opacity': this.state.showTip === true ? '1' : '0' }}
                >
                    {this.state.tip}
                </div>


            </div>
        )
    }


}

export default CustomInput;