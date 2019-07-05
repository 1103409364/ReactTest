import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { ListItem, ListContent, LoadMore } from '../style.js';

class List extends React.PureComponent {
    render() {
        const { articleList, getMoreList, pageIndex } = this.props;
        return (
            <div>
                {
                    articleList.map((item) => (
                        // 跳转的时候,传一个 id 进去,detail 页的 props 就能接收到 id
                        // 动态路由获取参数
                        <Link to={`/detail/${item.get('id')}`} target="_blank" key={item.get('id')}>
                            <ListItem>
                                <img className="pic" src={item.get('imgUrl')} alt="pic" />
                                <ListContent>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListContent>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore
                    onClick={() => getMoreList(pageIndex)}
                >
                    阅读更多
                </LoadMore>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        pageIndex: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatchToProps = dispatch => ({
    getMoreList(pageIndex) {
        dispatch(actionCreators.getMoreList(pageIndex));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);