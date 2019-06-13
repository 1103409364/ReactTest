import React from 'react';
import './CustomInput.scss';
import Calendar from './Calendar/Calendar';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'Y': 1,
            'M': 2,
            'D': 3,

            'showClendar': false
        }

        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeDate = this.changeDate.bind(this)
    }
    handleChange(e) {
        let ipt = e.target.value;

        this.setState({
            'inputTxt': ipt
        })
    }

    handleFocus() {
        this.setState({
            'showClendar': true,
            'focus': true
        })
    }

    changeDate(d) {
        this.setState({
            'Y': d.year,
            'M': d.month,
            'D': d.date,
            'showClendar': d.show === true ? true : false
        });

        this.props.callback(d.year + '-' + d.month + '-' + d.date)
    }

    // 点击空白隐藏日历
    componentDidMount() {
        window.onclick = (e) => {
            let tagName = e.target.tagName.toLowerCase();

            if (!(tagName === 'td' || tagName === 'th' || tagName === 'i' || e.target.id === 'CustomInput')) {
                this.setState({
                    'showClendar': false,
                })
            }
        }
    }

    render() {
        return (
            <div className={this.state.showClendar === true || !!this.state.inputTxt ? 'focus CustomInput' : 'CustomInput'}>
                <label
                    htmlFor="CustomInput"
                    className={this.state.showClendar === true || !!this.state.inputTxt ? 'focus' : ''}
                    style={{ 'color': this.state.focus ? '' : '#868686' }}
                >
                    {/* 日期 */}
                </label>

                <input
                    type="text"
                    readOnly="readonly"
                    id="CustomInput"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={`${this.state.Y}-${this.state.M}-${this.state.D}`}
                ></input>
                <div className="CustomInput-cal">   
                    <Calendar callback={this.changeDate} />
                </div>
                <i 
                className="iconfont iptico"
                onClick={()=>{
                    this.setState({
                        'showClendar': true,
                        'focus': true
                    })
                }}
                >&#xe66c;</i>
            </div>
        )
    }
}

export default CustomInput;