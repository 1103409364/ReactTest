import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store/actionCreators.js'
import { actionCreators } from './store'

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

function getListArea(show) {
    if(show) {
        return(
        <SearchInfo>
            <SearchInfoTitle>
                热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>种子</SearchInfoItem>
                <SearchInfoItem>种33子</SearchInfoItem>
                <SearchInfoItem>种子</SearchInfoItem>
                <SearchInfoItem>种子</SearchInfoItem>
                <SearchInfoItem>种5324子</SearchInfoItem>
                <SearchInfoItem>种子</SearchInfoItem>
                <SearchInfoItem>种子</SearchInfoItem>
                <SearchInfoItem>种子</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>)
    }
}

function Header(props) {
    return (
        <HeaderWrapper>
            <Nav>
                <Logo />
                <Addition>
                    <Button className="wrightting">
                        <i className="iconfont">&#xe62e;</i> 写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>

                <ItemWrapper>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={300}
                            in={props.focused}
                            classNames="stretch"
                        >
                            <NavSearch
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                                className={props.focused ? 'focused' : ''}
                            />
                        </CSSTransition>
                        <i
                            className={props.focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe600;</i>
                        {getListArea(props.focused)}
                    </SearchWrapper>
                </ItemWrapper>
            </Nav>
        </HeaderWrapper>
    )
}

const mapStateToProps = state => {
    return {
        // 使用 immutable 提供的 get 方法。获取数据不统一，state不是immutable 对象，没有 get 方法。
        // focused: state.header.get('focused')
        // 使用 redux-immutable 让state成为 immutable 对象，统一使用 get 方法
        focused: state.get('header').get('focused')
        // focused: state.header.focused
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);