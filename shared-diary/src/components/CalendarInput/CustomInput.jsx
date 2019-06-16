import React, { useState } from 'react';
import './CustomInput.scss';
import Calendar from './Calendar/Calendar';

function CustomInput(props) {
    const DAYARR = ['日', '一', '二', '三', '四', '五', '六'];
    let dateNow = new Date();
    // 初始化今天
    const [year, setYear] = useState(dateNow.getFullYear());
    const [month, setMonth] = useState(dateNow.getMonth());
    const [date, setDate] = useState(dateNow.getDate());
    const [day, setDay] = useState(dateNow.getDay());

    const [showClendar, changeShow] = useState(false);
    const [focus, changeFocus] = useState(false);

    const callback = props.callback;

    const handleFocus = () => {
        changeShow(true);
        changeFocus(true);
    }

    const changeDate = (d) => {
        // console.log(d)
        setYear(d.year);
        setMonth(d.month);
        setDate(d.date);
        setDay(d.day);
        changeShow(d.show === true ? true : false);

        // set方法是异步的？通过上面的变量无法立即获得当前date
        callback({
            'year': d.year,
            'month': d.month,
            'date': d.date,
            'day': '周' + DAYARR[d.day]
        })
    }

    // 点击空白隐藏日历
    window.onclick = (e) => {
        let tagName = e.target.tagName.toLowerCase();

        if (!(tagName === 'td' || tagName === 'th' || tagName === 'i' || e.target.id === 'CustomInput')) {
            changeShow(false);
        }
    }

    return (
        <div className={showClendar === true ? 'focus CustomInput' : 'CustomInput'}>
            <label
                htmlFor="CustomInput"
                className={showClendar === true ? 'focus' : ''}
                style={{ 'color': focus ? '' : '#868686' }}
            >
                {/* 日期 */}
            </label>

            <input
                type="text"
                readOnly="readonly"
                id="CustomInput"
                onFocus={handleFocus}
                value={`${year}-${month}-${date} 周${DAYARR[day]}`}
            ></input>
            <div className="CustomInput-cal">
                <Calendar callback={changeDate}/>
            </div>
            <i
                onClick={() => {
                    changeShow(true)
                }}
                className="iconfont iptico">&#xe66c;</i>
            {/* {props.render(changeDate)} */}
        </div>
    )
}

export default CustomInput;