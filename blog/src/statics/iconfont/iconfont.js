import { createGlobalStyle } from 'styled-components';
// 全局css reset
export const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1562056260297'); /* IE9 */
  src: url('./iconfont.eot?t=1562056260297#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAlkAAsAAAAAEtQAAAkXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFFAqVVJBzATYCJANACyIABCAFhG0HgUMbiA9RlFBWKdmXCZxcwcoZSr1V/bU2NvFYZoWBOAHXfJaI7aDg92uzT/zL3QFJNWrTRiKREqWQCI1UPZGCX05VmZv3dNybNahrock9XvLnZCmV3xllkxexIlQAC2B/Hrf2/gbcuQHb4DguOmw4KxlGB8bQBm3i2iiYFUUYnTcePm+vtgskyJI8CDpfYVEaRwMMBBL6UgEEpPn5eg8IECSdb79W3eG9Iak0t9Dw2Gb2LzLGMqhqg0SDCFnMm9xdF813JV6NZ2GbMUlNIor4Qs2e3N0PgWKZo7Zf3D2yLkdQoUlFGbNuIZ7rMJYUExrOzdv6BrHUPmCX4NH/ff2WXTB8Qjzo9jnP2FH4A+cETtf0BsbzpQKLi8CCQwwHfY3pn1Ikh56VptbZE2DRlP/rLURPLVqaPA3dqret8xAEOsxKx8DE4rIo0w9w9pKq8IwkiCyn6fQGef6f18FZA/yoGPBFe0D46j1Q8TVIypZPkHjwGRIDvkKSwAskAfyGJIJXSCz4Cw84fBdJ83yDpAM/IOnBT3hgwH+kkQk22nNWMW4wezHmRiDuvWtLZtqtg8qRKNPkVGB6hUgqJUU8I4IICjX9cYqmFVLckqalGIYjXITHSqUyX18V2ZimfRN/EomMlsn8VScbarP1JrtcOreb9Xo7eDydjsgSPW7gdsPdt31ct3SEiexoIIDUaQCgA9AL1gt9s7o4snP3AUMIZLSZLABy/smIXYdCRFWHc5m9R8PF1Ue6lTpi6PV8kJhBNKrYSJLAWc12hKhkOWl2Bo48Z+sxUpD1lSEp0jljEKFXSH7+8lPXQiSrrpdQZ29Gi9V6luhWuomQm7YE+VRsjKeAnCQ/44nC13gbU6fdkdhK1/hd10Kwquu51N6b4Xj1jby+Jv/eNpvdrurVx261Wvx6Wgz0+gPGoyRjPlzp6EybMlcH45l1+1fC9ahJTiTOCBAgVTBW9yLrRGbEyLczqBTqbhZISDKqDVYwao2ou8kBIs5ByG08Ehs3kpR5o5En5HcFRbcVG/kuNpNfX0vVbvUAu3EkYXFwTpKkkJ5BR/a2/lKLgyL0Uh0xhOzU2RZGVAZ07HWQNAMQiDhGmK4gY4cORsJUm93lAH4N80mEDB6XTmcpW7dB3eGk1y12ctXveMzV6opH02Vr/vopHS1r+XJ1B3s5v9ZP51i5ff/pg8Fd1Cc9nbjXGS436/Z26HLU6/FMkq+/613iqXXOQFGpY/Lah6HOh2gdLC7n43RSk/EGJ8X5kyYRpN2OhiKwWsnuZc73jZ9przh6raMPYXIEQNnj7hSMynmdyQEY58ypcF0SoLyB1Iaj11O/TiH3rcsODzPZ/PvbjO+tltnK+fXtZ+bnLDWBykAv9QzX2tjNqn5I9c8DkR5vsWT2rP5QUfEhbHnyStzjxk30qjlZOY91uyMC4i3s47FZ27bNwiUCiknYzOW1gete/G/DmuAju39+nqd2hEmO1oO87Rv1opZQT8/q6+u46a9NzJuyJmrZvMLJdBD3jAq0gyz12PrEAeUBoj74gGyGgG/EhQy4saQGTaCBnoBAn6zn0AQFW7/WQeXBWlQNVmUVE1A965lbAf95UeGihay56WihUHCeJG95pSSgFCRQISAAr1+hgnlumTt3Hu/0+RTAB3zyCfERRsKzp5ALdPmxdu2kNVJoj8WWnu/byoNrgsu3yVfmyRqS36af7KMZ+bdfetXXvv2+Tfo29mt1vb6z/2qg+zX3EI7KgMAhgUAJAcEul8qkuDKFHG5UgLBNs5mLX9MN6sFTMFo6zpeZXxP/edFQFniaVwTN9p1MnchhagzfdQRDtY9hmEhUjuH1j1Ms1YQqoZY90tB3KS0FmoTbFtfuh94Nu39tmSfyju1Yfz6MHzz4Qen8D6y2MzyOvftIQ6h9l9aGa+Q1I8De31/zaO8jLRzr3/h6gvZ6P7nQW+MZXLc1izXsPaiuV/S37pixpwvSkbhB2ohE/SBZN7J5/aJn3TuMvRio+hsU+zk2DDKyqX6NX4S37GVYOzmxx8z5hnVtRqQb5D2bpI+WT2hb024dx8zrzEwfKLRb0pJokEW0HOUNNS/rmWhYc3dyQpuZJvftitpnVJc8+3YnShmnnFwwkWPW17TNaxWwo3lxy/yd6uJmNe3qhoygxxb2hqyI0EFt3qtPqd+3GdTzvuSU5H4CHkvPVZ5SzlMMUk7ETmETIvrsXUlT9EqKko4NWI85sqKvHPHJILMNmcgsuU9qAhNp4j1x9CEMYBop+kf3pxtB/1cjc5j+qBPqz/iTq/4o+isuMAOiB8AF1P8MMz5nPSFqAtNq575hq1VECzSsVFFX8xjYcczXAAw+DMdHRt6/XyLTmlo6WZms5KrAhVxxL8iqh4ydVuaUsUasTDdiHD28Vk7pU+FF9E2BK9w5LLrELMUy4FJ9mDJ57jSMYxY73bh542os3ZnS3bt/BcRPEvWCHgIAgHDTDjzN2/I8uN6WcwHnbD96gjM1pksScKMgUrjVgS8AQcCP4WB72FS8Y/QTK3El0tc4VSxbkoAPh56DPSFGTbn3g73Ondd7ULW/+5J/zItuN8jXcnwd5XrKVIhhbRkIYDotJfEblRC1jxQJtGjbt14nSTyAqLYgdEVCOZs9DbNAWYoBACFnAEyhsxXw4JpCRdb8cxCqzBFTQ7REbBPcJA7w0NGrjkgAPHcsDlxeXM1YDcoZ2PcFRxn9OBq9Z2IBf4kD/HP0FvxHB+hvOBZ3zeKa1Xbsn1qICTKe7DmmRguVRP3Q9B5kpWLLImeHPYMt0WgeesGx6hI02HOcUG5kRCS4sKbgF8kxoJTha2tWkJKXo3K99H2xOtFLTcH6rlkgRtZ1hkvs/aOUoYmFSb/y5+8BqaLEbEefO//PgFXCtXMhT0AAl0yT+ryX1qUNKUIsVeC61DKKKC54KlCy3ODWzXutgBTx5CNK15Z8NpagMu/6ovjlGT9fv+Ju47qsnLyCopKyiupk9Na9Bo2a0X1A7zDWsvVSoVKDz7NzCRREweF4C/o1r99JVrFW2NmbakW6bjs8u8OSmpAh1Y/jQV7hDrVMskB3yXcZbAETjA2h67buQJDbth3D9j3KnNzOPC1kDA==') format('woff2'),
  url('./iconfont.woff?t=1562056260297') format('woff'),
  url('./iconfont.ttf?t=1562056260297') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1562056260297#iconfont') format('svg'); /* iOS 4.1- */
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
