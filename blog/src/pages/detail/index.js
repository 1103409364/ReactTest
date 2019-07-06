import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import {
    DetailWrapper,
    Header,
    Content,
} from './style.js'

class Detail extends React.PureComponent {
    render() {
        // 拿到上一个页面传进来的 id
        // console.log(this.props.match.params.id);
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

// connect 中的两个映射方法都要返回一个纯对象
const mapStateToProps = state => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = dispatch => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));