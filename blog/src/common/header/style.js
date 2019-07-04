import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
    float: left;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
`
export const Nav = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100%;
`
export const ItemWrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    .fontStyle {
        font-size: 20px;
        line-height: 56px;
    }
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    cursor: pointer
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;

    .zoom {
        position: absolute;
        right: 4px;
        bottom: 4px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background-color: gray;
            color: #fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    // 动画
    &.stretch-enter {
        transition: all 0.3s ease-in;
    }
    &.stretch-enter-active {
        width: 300px;
    }
    &.stretch-enter-done {
        width: 300px;
    }
    &.stretch-exit {
        transition: all 0.3s ease-in;
    }
    &.stretch-exit-active {
        width: 240px;
    }
    &.stretch-exit-done {
        width: 240px;
    }

    width: 240px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    // transition: all 0.3s ease-in;
    // &.focused {
    //     width: 300px;
    // }
`
export const SearchInfo = styled.div`
    box-sizing: border-box;
    position: absolute;
    left: 20px;
    margin-top: 9px;
    top: 100%;
    width: 250px;
    padding: 20px 20px 10px 20px;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
    background-color: #fff;
    z-index: 9;
    // 三角形
    &::before {
        content: '';
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        left: 20px;
        top: -22px;
    }
    &::after {
        content: '';
        -webkit-transform: rotate(45deg);
        box-shadow: -2px -2px 2px rgba(0,0,0,.2);
        width: 10px;
        height: 10px;
        background-color: #fff;
        z-index: -1;
        position: absolute;
        left: 27px;
        top: -5px;
    }
`
export const SearchInfoTitle = styled.div`
    margin-bottom: 15px;
    font-size: 14px;
    color: #787878;
`
export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
    cursor: pointer;
    user-select: none;
    .spin {
        float: left;
        font-size: 13px;
        margin-right: 4px;
        transition: all .3s ease-in;
        // 围绕中心点旋转
        transform-origin: center center;
    }
    &:hover {
        color: #333;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    float: left;
    margin-right: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        color: #333;
        border: 1px solid #666;
    }
`
export const Addition = styled.div`
    float: right;
    width: 240px;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.wrightting {
        color: #fff;
        background-color: #ec6149;
    }
    &.reg {
        color: #ec6149;
    }
    cursor: pointer;
`