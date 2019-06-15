import React, { useState } from 'react';
import './CustomInput.scss';

// 可配置的输入框，可接一个配置对象options：
// 
// {
//     inputType: 输入框名称，比如 '手机号'、'邮箱'、'身份证号' 等等,
//     pattern: 匹配规则,
//     tipStr: 错误提示文本,
//     callback: 回调函数
// }
function CustomInput(props) {
    // 提示
    const [tip, setTip] = useState('');
    const [showTip, changeShowTip] = useState(false);
    const [focus, changeFocus] = useState(false);
    const [inputTxt, setInputTxt] = useState('');
    const [field, setField] = useState('');
    // 初始化配置，如果没有传入配置，使用默认配置
    const inputType = props.options.inputType || '正整数';
    const pattern = props.options.pattern || /^\d+$/;
    const tipStr = props.options.tipStr || '请输入正整数';
    const callback = props.options.callback || (field => console.log(field));

    const handleChange = (e) => {
        let ipt = e.target.value;
        setInputTxt(ipt);
    }
    // 输入框失去焦点的时候，验证字段有效性,非法则清空 field 字段。输入正确才保存
    const handleBlur = (e) => {
        changeFocus(false);

        let field = e.target.value;
        // 如果没有输入，直接返回
        if (!field) return;
        // 检查输入是否符合要求
        if (!pattern.test(field)) {
            setTip(tipStr);
            changeShowTip(true);
            setField('');
            callback('error');
        } else {
            setField(field);
            changeShowTip(true);
            setTip('√');

            callback(field);
        }
    }

    const handleFocus = () => {
        changeShowTip(false);
        changeFocus(true);
    }

    return (
        <div className="CustomInput">
            <label
                htmlFor="CustomInput"
                className={focus === true || !!inputTxt ? 'focus' : ''}
                style={{ 'color': focus ? '' : '#868686' }}
            >
                {inputType}
            </label>

            <input
                type="text"
                id="CustomInput"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                className={focus === true ? 'focus' : ''}
            ></input>
            <div
                className={field !== '' ? 'CustomInput-tip legal' : 'CustomInput-tip illegal'}
                style={{ 'opacity': showTip === true ? '1' : '0' }}
            >
                {tip}
            </div>
        </div>
    )
}

export default CustomInput;