import React from 'react';
import { connect } from 'react-redux';
import { DownLoadInfo, DownLoadWrapper } from '../style.js';

class DownLoadLink extends React.PureComponent {
    render() {
        const { downLoadLink } = this.props;
        return (
            <DownLoadWrapper 
                href ={downLoadLink.get('link')} 
                qrImgUrl={downLoadLink.get('qrImgUrl')}
                target="_blank"
            >
                <img className="qrImg" src={downLoadLink.get('qrImgUrl')} alt="pic"/>
                <DownLoadInfo>
                    <h3>下载简书手机App<i className="iconfont icon">&#xe74c;</i></h3>
                    <p>随时随地发现和创作内容</p>
                </DownLoadInfo>
            </DownLoadWrapper>);
    }
}

const mapStateToProps = state => {
    return {
        downLoadLink: state.getIn(['home', 'downLoadLink'])
    }
}

export default connect(mapStateToProps, null)(DownLoadLink);