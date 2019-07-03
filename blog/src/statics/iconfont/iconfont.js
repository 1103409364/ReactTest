import { createGlobalStyle } from 'styled-components';
// 全局css reset
export const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1562123957029'); /* IE9 */
  src: url('./iconfont.eot?t=1562123957029#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1562123957029') format('woff'),
  url('./iconfont.ttf?t=1562123957029') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1562123957029#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fenxiang:before {
  content: "\e600";
}

.icon-quill:before {
  content: "\e62e";
}

.icon-iconset0209:before {
  content: "\e66c";
}

.icon-wenzhangguanli:before {
  content: "\e67c";
}

.icon-youjian:before {
  content: "\e623";
}

.icon-18List:before {
  content: "\e642";
}

.icon-edit:before {
  content: "\e65c";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-huixingzhen:before {
  content: "\ebe6";
}

.icon-wenzhang:before {
  content: "\e617";
}

.icon-weibiaoti--:before {
  content: "\e613";
}

.icon-Left-:before {
  content: "\e742";
}

.icon-Left-1:before {
  content: "\e743";
}

.icon-Right-:before {
  content: "\e74c";
}

.icon-Right-1:before {
  content: "\e74d";
}`
