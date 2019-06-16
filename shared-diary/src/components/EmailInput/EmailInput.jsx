import React,{useState,useRef} from 'react';
import './EmailInput.scss';

// 检查邮箱，格式错误，显示警告
function EmailInput(props) {
    const [tip, setTip] = useState('');
    const [showTip, changeshowTip] = useState(false);
    const [focus, changeFocus] = useState(false);
    const [inputTxt, setInputTxt] = useState('');
    const [email, setEmail] = useState('');

    const inputEmail = useRef(null)
    const handleChange = (e) => {
        let ipt = e.target.value;

        setInputTxt(ipt);
    }
    // 输入框失去焦点的时候，验证邮箱有效性,邮箱非法则清空 email 字段
    const handleBlur = (e) => {
        changeFocus(false);

        let email = e.target.value;

        if (!email) return;

        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
            setTip('Email 格式错误');
            changeshowTip(true);
            setEmail('');
        } else {
            setTip('√');
            changeshowTip(true);
            setEmail(email);
            props.callback(email);
        }
    }

    const handleFocus = () => {
        changeshowTip(false);
        changeFocus(true);
    }

    return (
        <div className="EmailInputBox">

            <label
                htmlFor="EmailInputBox"
                className={focus === true || !!inputTxt ? 'focus' : ''}
                style={{'color': focus ? '': '#868686'}}
            >
                电子邮件
            </label>

            <input
                ref = {inputEmail}
                type="text"
                id="EmailInputBox"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                className={focus === true ? 'focus' : ''}
            ></input>
            <div
                className={email !== '' ? 'EmailInputBox-tip legal' : 'EmailInputBox-tip illegal'}
                style={{ 'opacity': showTip === true ? '1' : '0' }}
            >
                {tip}
            </div>
            <i 
            className="iconfont emailicon"
            onClick={()=>{
                changeFocus(true);
                inputEmail.current.focus();
            }}
            >&#xe623;</i>
        </div>
    )
}

export default EmailInput;