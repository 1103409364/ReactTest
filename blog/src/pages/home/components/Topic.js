import React from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    LinkMore,
} from '../style.js'

class Topic extends React.PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return <TopicItem key={item.get('id')}><a href="/">{item.get('title')}</a></TopicItem>
                    })
                }
                <LinkMore>
                    <a href="https://www.jianshu.com/">...更多热门专题</a>
                </LinkMore>
            </TopicWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);