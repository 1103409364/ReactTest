import React, { useState } from 'react';
import './Calendar.scss';
import './iconfont/iconfont.css'

function Calendar(props) {
    let dateNow = new Date();
    const LEN = 42;
    const DAYARR = ['日', '一', '二', '三', '四', '五', '六'];
    // 初始化今天
    const tdYear = dateNow.getFullYear();
    const tdMonth = dateNow.getMonth();
    const tdDate = dateNow.getDate();
    const tdDay = dateNow.getDay();
    // 初始化选中日期
    const [selecYear, changeYear] = useState(dateNow.getFullYear());
    const [selecMonth, changeMonth] = useState(dateNow.getMonth());
    const [selecDate, changeDate] = useState(dateNow.getDate());
    // const [selecDay, changeDay] = useState(dateNow.getDay());

    // const [show, changeShow] = useState(true);

    // 计算某月的天数,计算方法：下月的上一天,也就是本月的最后一天，就是天数
    const getMonDays = (Y, M) => {
        // 下月的第 0 天就是这个月的最后一天
        let d = new Date(Y, M + 1, 0);
        return d.getDate();
    }

    // 计算某月一号是星期几
    const get1day = (Y, M) => {
        let d = new Date(Y, M, 1);
        return d.getDay();
    }

    // 设置新的日期,show 参数为 Boolean 值，表示日历是否该显示。点击切换按钮应该保持日历显示状态
    const setSelecDate = (Y, M, D, show) => {
        D = D !== undefined ? D : selecDate;

        let d = new Date(Y, M, D);
        changeYear(d.getFullYear());
        changeMonth(d.getMonth());
        changeDate(d.getDate());
        // changeDay(d.getDay());

        let selec = {
            'year': d.getFullYear(),
            'month': d.getMonth() + 1,
            'date': d.getDate(),
            'day': d.getDay(),
            //是否保持显示状态，比如切换月份的时候应该保持显示，选中日期时隐藏
            'show': show 
        }
        // 回调函数，参数为选中的年月日周组成的对象
        props.callback(selec);
    }


    // 最后一个参数 true 表示日历保持显示状态
    const nextMonth = () => {
        setSelecDate(selecYear, selecMonth + 1, undefined, true);
    }

    const nextYear = () => {
        setSelecDate(selecYear + 1, selecMonth, undefined, true);
    }

    const prevMonth = () => {
        setSelecDate(selecYear, selecMonth - 1, undefined, true);
    }
    const prevYear = () => {
        setSelecDate(selecYear - 1, selecMonth, undefined, true);
    }

    // 判断当前日历页，是不是当前月
    const isThisMon = () => {
        if (tdYear === selecYear && tdMonth === selecMonth
        ) {
            return true
        } else {
            return false;
        }
    }

    // 这个月的天数
    let thisMonDays = getMonDays(selecYear, selecMonth);
    // 上个月的天数
    let prevMonDays = getMonDays(selecYear, selecMonth - 1);
    // td 数组，长度42，存放当前页所有的日期，包含当前月，上个月，下个月
    let tdArr = [];

    // 当前月
    let thisMonArr = [...Array(thisMonDays + 1).keys()].slice(1);

    thisMonArr = thisMonArr.map((item) => {
        return (<td
            className={item === tdDate && isThisMon() ? 'cur today ' : 'cur'}
            key={item}
            onClick={() => setSelecDate(selecYear, selecMonth, item)}
        >{item}
        </td>)
    })

    // 上个月
    // 根据每月1号是周几，填充数组开头部分
    for (let i = 0; i < get1day(selecYear, selecMonth); i++) {
        tdArr.unshift(<td
            onClick={() => setSelecDate(selecYear, selecMonth - 1, prevMonDays - i)}
            key={prevMonDays - i}
        >{prevMonDays - i}
        </td>);
    }

    tdArr = tdArr.concat(thisMonArr);

    // 下个月
    // 剩余长度
    let l = LEN - tdArr.length;
    for (let i = 0; i < l; i++) {
        tdArr.push(<td
            key={i + 1}
            onClick={() => setSelecDate(selecYear, selecMonth + 1, i + 1)}
        >{i + 1}
        </td>);
    }
    // 日历的每一行，值初始化为下标
    let trArr = [...Array(7).keys()]

    return (
        <table className="Calendar">
            <thead className="Calendar-head">
                <tr>
                    <th className="prevY" onClick={() => prevYear()}><i className="iconfont">&#xe743;</i></th>
                    <th className="prevM" onClick={() => prevMonth()}><i className="iconfont">&#xe742;</i></th>
                    <th colSpan="3" className="cur">
                        {
                            `${selecYear} 年 ${selecMonth + 1} 月`
                        }
                    </th>
                    <th className="nextM" onClick={() => nextMonth()}><i className="iconfont">&#xe74c;</i></th>
                    <th className="nextY" onClick={() => nextYear()}><i className="iconfont">&#xe74d;</i></th>
                </tr>
                <tr>
                    {
                        DAYARR.map((item) => <th key={item}>{item}</th>)
                    }
                </tr>
            </thead>
            <tbody className="Calendar-body">
                {
                    trArr.map((item, index) => {
                        return (
                            <tr key={item}>
                                {tdArr.slice(index * 7, index * 7 + 7)}
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td
                        colSpan="7"
                        onClick={() => setSelecDate(tdYear, tdMonth, tdDate, true)}
                    >{`今天 ${tdYear}-${tdMonth + 1}-${tdDate} 周${DAYARR[tdDay]}`}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Calendar;