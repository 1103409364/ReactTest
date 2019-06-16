import React, { useState } from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import axios from 'axios'

import 'highlight.js/styles/vs.css';
import './iconfont/iconfont.css';
import './TextEditor.scss';

function TextEditor() {
    const [html, setHtml] = useState('');
}