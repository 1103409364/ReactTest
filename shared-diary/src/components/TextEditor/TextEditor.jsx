import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import axios from 'axios';

import 'highlight.js/styles/vs.css';
import './iconfont/iconfont.css';
import './TextEditor.scss';

// 代码高亮需要引入css 和 js
marked.setOptions({
    highlight(code) {
        return highlight.highlightAuto(code).value
    }
})

// 支持 MarkDown 的即时预的编辑器
class TextEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'html': '',
            'focus': false,
            'isEmpty': false,
        }

        this.handleInput = this.handleInput.bind(this);
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
    }
    checkIsEmpty(text) {
        return text.trim() === '';
    }

    handleInput(e) {
        // console.log(e.target.innerText);

        let isEmpty = this.checkIsEmpty(e.target.innerText);
        this.setState({
            'html': marked(e.target.innerText, { breaks: true }),
            'isEmpty': isEmpty,
        });


        // this.props.callback(this.state.html);
    }

    save() {
        if (this.props.email === '@匿名用户') {
            if (!window.confirm("Email 有误或者未填写，要以匿名的方式发布吗？")) {
                return;
            };
        }
        // 检查输入是否为空
        if (this.checkIsEmpty(this.state.html)) {
            this.setState({
                'isEmpty': true,
            })
            this.ipt.focus();
            return;
        }

        axios.get("do/write.php", {
            params: {
                "email": this.props.email,
                "date": this.props.date,
                "message": this.state.html
            }
        }).then(() => {
            this.props.fetchData(this.clear);
        })
    }
    // 清空输入框
    clear() {
        this.setState({
            'html': '',
            // 'isEmpty': true,
        })
        this.ipt.innerText = '';
        this.ipt.focus();
    }

    componentDidMount() {
        let txt =
            `# MarkDown 基本语法
## 二级标题
### 三级标题
**加粗的文字**

*这是倾斜的文字*

~~加删除线的文字~~

* 这是列表 

[这是超链接](http://test.com)

\`\`\`
let str = "hello world !"

\`\`\` `

        // let txt = '    let str = "hello world !"\n# MarkDown 基本语法\n## 二级标题\n### 三级标题\n**加粗的文字**\n\n*这是倾斜的文字*\n\n~~加删除线的文字~~\n\n* 列表 \n\n[超链接](http://test.com)'
        this.ipt.innerText = txt;

        this.setState({
            'html': marked(txt, { breaks: true }),
        });

        this.ipt.focus();
        // this.ipt.selectionEnd = this.ipt.innerText.length;
    }


    render() {
        return (
            <div className={this.state.focus === true ? 'TextEditor focus' : 'TextEditor'}>
                <div className={this.state.focus === true ? 'wrap focus' : 'wrap'}>
                    <div
                        // 只能输入纯文本
                        contentEditable="plaintext-only"
                        className="textarea"
                        ref={ipt => this.ipt = ipt}
                        onInput={this.handleInput}
                        onFocus={() => {
                            this.setState({
                                'focus': true
                            })
                        }}
                        onBlur={() => {
                            this.setState({
                                'focus': false
                            })
                        }}
                        onPaste={() => {
                            console.log(1)
                        }}
                    />

                    <div className={this.state.isEmpty ? 'empty' : 'preview'}
                        dangerouslySetInnerHTML={{ __html: this.state.html }}
                    >
                    </div>

                    <div className="App-btn">
                        <i
                            onClick={() => this.ipt.focus()}
                            className="iconfont"
                            title="编辑">&#xe65c; </i>
                        <input
                            // 保存到服务器，成功的时候清空输入框
                            onClick={this.save}
                            type="button"
                            className="submit"
                            value="发布"
                        />
                        <input
                            // 保存到服务器，成功的时候清空输入框
                            onClick={this.clear}
                            type="button"
                            className="clear"
                            value="清屏"
                        />
                        <span
                            className={this.state.isEmpty ? 'TextEditor-tip empty' : 'TextEditor-tip'}
                        >内容为空，请输入
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditor;