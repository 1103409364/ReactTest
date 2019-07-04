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
                        <Link to="/detail" target="_blank" key={item.get('id')}>
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