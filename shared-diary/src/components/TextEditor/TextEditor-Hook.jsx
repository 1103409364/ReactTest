import React, { useState, useRef, useEffect } from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
// 代码高亮需要引入css 和 js
import 'highlight.js/styles/vs.css';
import axios from 'axios'

import './TextEditor.scss';

function TextEditor(props) {


    marked.setOptions({
        highlight(code) {
            return highlight.highlightAuto(code).value
        }
    })

    const [html, setHtml] = useState('');
    const [focus, changeFocus] = useState(false);
    const [isEmpty, changeIsEmpty] = useState(false);
    const [showTip, changeShowTip] = useState(false);
    const divIpt = useRef(null)

    

    useEffect(()=>{
        const initTxt =
`### MarkDown 语法提示:
# 一级标题
## 二级标题
### 三级标题
**加粗的文字**
*倾斜的文字*
~~加删除线的文字~~
[这是超链接](http://test.com)
\`\`\`
let str = "hello world !"
\`\`\` 
* 这是列表`
        // console.log(1);
        divIpt.current.innerText = initTxt;
        setHtml(marked(initTxt, { breaks: true }));
        divIpt.current.focus();
    },[]); //第二个参数为空数组，否则会触发多次渲染
    
    // 检查输入是否为空
    const checkIsEmpty = (text) => {
        return text.trim() === '';
    }
    // 输入事件处理
    const handleInput = (e) => {
        let isEmpty = checkIsEmpty(e.target.innerText);
        setHtml(marked(e.target.innerText, { breaks: true }));
        changeIsEmpty(isEmpty);
        changeShowTip(false);
    }

    const save = () => {
        if (props.email === '@匿名用户') {
            if (!window.confirm("Email 有误或者未填写，要以匿名的方式发布吗？")) {
                return;
            };
        }
        // 检查输入是否为空
        if (checkIsEmpty(html)) {
            changeIsEmpty(true);
            changeShowTip(true);
            return;
        }

        axios.get("do/write.php", {
            params: {
                "email": props.email,
                "date": `${props.date.year} 年 ${props.date.month + 1} 月 ${props.date.date} 日 ${props.date.day}`,
                "message": html
            }
        }).then((res) => {
            // console.log(res);
            if (!res.statusText === 'OK') {
                alert('服务器错误，请稍后重试');
                return;
            }

            props.fetchData(clear);
        })
    }
    // 清空输入框
    const clear = () => {
        setHtml('');
        changeIsEmpty(true);
        divIpt.current.innerText = '';
    }

    return (
        <div className={focus === true ? 'TextEditor focus' : 'TextEditor'}>
            <div className={focus === true ? 'wrap focus' : 'wrap'}>
                <div
                    // 只能输入纯文本
                    contentEditable="plaintext-only"
                    className="textarea"
                    ref={divIpt}
                    onInput={handleInput}
                    onFocus={() => {
                        changeFocus(true);
                    }}
                    onBlur={() => {
                        changeFocus(false);
                    }}
                />

                <div className={isEmpty ? 'empty' : 'preview'}
                    dangerouslySetInnerHTML={{ __html: html }}
                >
                </div>

                <div className="App-btn">
                    <i
                        onClick={() => divIpt.current.focus()}
                        className="iconfont"
                        title="编辑">&#xe65c; </i>
                    <input
                        // 保存到服务器，成功的时候清空输入框
                        onClick={save}
                        type="button"
                        className="submit"
                        value="发布"
                    />
                    <input
                        // 保存到服务器，成功的时候清空输入框
                        onClick={clear}
                        type="button"
                        className="clear"
                        value="清屏"
                    />
                    <span
                        className={showTip ? 'TextEditor-tip show' : 'TextEditor-tip'}
                    >内容为空，请输入
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TextEditor;