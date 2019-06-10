import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/vs.css';
// import 'highlight.js/styles/atom-one-dark.css'; 

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
            'html': '支持 MarkDown 的即时预的编辑器'
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            'html': marked(e.target.innerText, { breaks: true }),
        });

        this.props.callback(this.state.html);
    }

    render() {
        return (
            <div className="TextEditor">
                <div
                    // 只能输入纯文本
                    contentEditable="plaintext-only"
                    className="textarea"
                    onInput={this.handleInput}
                />

                <div className="preview"
                    dangerouslySetInnerHTML={{ __html: this.state.html }}
                >
                </div>

            </div>
        )
    }
}

export default TextEditor;