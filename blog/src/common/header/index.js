import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store/actionCreators.js'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import {
    HeaderWrapper,
    Logo,
    Nav,
    ItemWrapper,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style.js';

class Header extends React.PureComponent {
    getListArea() {
        // 解构赋值，从 props 中取出要用的东西
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        for (let i = (page - 1) * 10; i < page * 10; i++) {
            // 最后一页可能不是满的，第一次是空页
            if (i < newList.length) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        // 满足其中一个条件时，显示 SearchInfo，防止点击 SearchInfo 失焦导致点不中
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch
                            onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}
                        ><i
                            className="iconfont spin"
                            ref={icon => this.spinIcon = icon}
                        >&#xe606;</i>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>)
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, logOut } = this.props;
        return (
            <HeaderWrapper>
                <Nav>
                    <Link to="/">
                        <Logo />
                    </Link>

                    <Addition>
                        <Link to="/write">
                            <Button className="wrightting">
                                <i className="iconfont">&#xe62e;</i> 写文章
                            </Button>
                        </Link>
                        {
                            // 路由到注册页
                            // 登陆成功的时候隐藏注册按钮
                            this.props.isLogin
                            ?
                            null
                            :
                            <Link to="/register" >
                                <Button className="reg">注册</Button>
                            </Link>
                        }

                    </Addition>

                    <ItemWrapper>
                        <Link to="/">
                            <NavItem className="left active">首页</NavItem>
                        </Link>

                        <NavItem className="left">下载App</NavItem>
                        {
                            // 条件渲染,根据 login 的值,渲染不同的组件.
                            // 点击登陆跳转到登录页
                            this.props.isLogin
                            ?
                            <NavItem
                                className="right"
                                onClick={logOut}
                            >
                                退出
                            </NavItem>
                            :
                            <Link to="/login" >
                                <NavItem className="right">登陆</NavItem>
                            </Link>
                        }

                        <NavItem className="right">
                            <i className="iconfont fontStyle">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                timeout={300}
                                in={focused}
                                classNames="stretch"
                            >
                                <NavSearch
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                    className={focused ? 'focused' : ''}
                                />
                            </CSSTransition>
                            <i
                                className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                            >&#xe600;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </ItemWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        // 使用 immutable 提供的 get 方法。获取数据不统一，state不是immutable 对象，没有 get 方法。
        // focused: state.header.get('focused')
        // 使用 redux-immutable 让state成为 immutable 对象，统一使用 get 方法
        focused: state.get('header').get('focused'),
        mouseIn: state.get('header').get('mouseIn'),
        // focused: state.header.focused
        // 取数据的另一种写法
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        isLogin: state.getIn(['login', 'isLogin']),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 获得焦点,list 是 immutable 对象
        handleInputFocus(list) {
            // 避免多次无意义的请求发送,提升组件性能
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        // 失去焦点
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        // 鼠标进入热门搜索
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        // 鼠标离开热门搜索
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        // 切换热门搜索
        handleChangePage(page, totalPage, spinIcon) {
            // 使用正则去掉非数字部分,得到数字部分就是角度
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePage(++page));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        // 退出登陆,从 login 中引入 loginActionCreators
        logOut() {
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);