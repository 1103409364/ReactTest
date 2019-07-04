import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
    AuthorsWrap,
    AuthorsTitle,
    AuthorsSwitch,
    AuthorsItemWrap,
    AuthorsItem,
    AuthorsMore,
} from '../style.js';
class RecommendedAuthors extends React.PureComponent {
    render() {
        const { handleChangePage, list, authorListPage } = this.props;

        return (
            <AuthorsWrap>
                <AuthorsTitle>
                    推荐作者
                    <AuthorsSwitch
                        onClick={() => { handleChangePage(this.spinIcon, authorListPage) }}
                    >
                        <i
                            className="iconfont spin"
                            ref={icon => this.spinIcon = icon}
                        >&#xe606;</i>换一批
                    </AuthorsSwitch>
                </AuthorsTitle>

                <AuthorsItemWrap>
                    {
                        list.map((item) => (
                            <AuthorsItem key={item.get('id')}>
                                <a className="avatar" target="_blank" rel='noreferrer noopener' href={`https://www.jianshu.com/u/${item.get('slug')}?utm_source=desktop&utm_medium=index-users`}>
                                    <img className="avatar" alt="avatar" src={item.get('avatar_source')} />
                                </a>

                                <a className="follow" state="0" href="/#"><i className="iconfont">&#xebe6;</i>关注</a>

                                <p className="name">
                                    <a target="_blank" rel='noreferrer noopener' href={`https://www.jianshu.com/u/${item.get('slug')}?utm_source=desktop&utm_medium=index-users`}>
                                        {item.get('nickname')}
                                    </a>
                                </p>
                                <p className="info">
                                    {/* 保留一位小数 */}
                                    写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count') / 1000).toFixed(1)}k喜欢
                            </p>
                            </AuthorsItem>
                        ))
                    }
                </AuthorsItemWrap>

                <AuthorsMore>
                    <a href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" >
                        查看全部<i className="iconfont more">&#xe74c;</i><i className="iconfont"></i>
                    </a>
                </AuthorsMore>
            </AuthorsWrap>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.getIn(['home', 'authorList']),
        authorListPage: state.getIn(['home', 'authorListPage'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangePage(spinIcon, authorListPage) {
            // 使用正则去掉非数字部分,得到数字部分就是角度
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;

            dispatch(actionCreators.changeAouthorList(authorListPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedAuthors);