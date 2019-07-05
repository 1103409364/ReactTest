import styled from 'styled-components';

export const HomwWrapper = styled.div`
    // overflow: hidden; //和margin: 0 auto; 冲突
    width: 960px;
    margin: 0 auto;
    padding-top: 30px;
    &::after {
        content: '';
        clear: both;
        display: table;
        width: 0;
        height: 0;
        visibility: hidden;
    }
`
export const HomwLeft = styled.div`
    float: left;
    padding-left: 15px;
    width: 625px;
    // margin: 0 auto;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
`
export const HomwRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    // margin-left: -18px;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: #f7f7f7;
    padding: 0 10px;
    margin-right: 18px;
    margin-bottom: 18px;
    text-align: center;
    a {
        text-decoration: none;
        color: #333;
    }
`
export const LinkMore = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    margin-left: 18px;
    margin-bottom: 18px;
    text-align: center;
    a {
        text-decoration: none;
        color: #888;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
    
`
export const ListContent = styled.div`
    width: 500px;
    float: left;
    padding-right: 10px;
    box-sizing: border-box;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
    
`
export const RecommendWrapper = styled.div`
    margin-bottom: 10px;
`
export const RecommendItem = styled.div`
    margin-bottom: 5px;
    img {
        height: 50px;
    } 
`
export const DownLoadWrapper = styled.a`
    display: block;
    padding: 10px 22px;
    margin-bottom: 30px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    text-decoration: none;
    color: #000;
    position: relative;

    .qrImg {
        width: 60px;
        height: 60px;
        float: left;
    }
    &::before {
        content: "";
        background: url(${props => props.qrImgUrl});
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        box-shadow: 0 2px 8px #999;
        position: absolute;
        left: 50%;
        top: -260%;
        margin-left: -100px;
        width: 200px;
        height: 0;
        opacity: 0;
        transition: opacity .2s ease-in;
    }
    &:hover {
        &::before {
            height: 200px;
            opacity: 1;
        }
    }
    &::after {
        content: '';
        clear: both;
        display: table;
        width: 0;
        height: 0;
        visibility: hidden;
    }
`
export const DownLoadInfo = styled.div`
    width: 160px;
    float: left;
    padding-left: 9px;
    padding-top: 9px;
    h3 {
        line-height: 21px;
        .icon {
            padding-left: 10px;
        }
    }
    p {
        font-size: 13px;
        color: #999;
        line-height: 21px;
    }
`
export const AuthorsWrap = styled.div`

`
export const AuthorsTitle = styled.div`
    font-size: 14px;
    color: #787878;
    margin-bottom: 20px;
`
export const AuthorsSwitch = styled.div`
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
`
export const AuthorsItemWrap = styled.ul`
    a {
        text-decoration: none;
        color: #000;
    }
`
export const AuthorsItem = styled.li`
    overflow: hidden;
    margin-bottom: 15px;

    .avatar {
        margin-right: 10px;
        width: 47px;
        height: 47px;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
        float: left;
    }
    .name {
        margin-top: 5px;
        font-size: 14px;
        line-height: 20px;
    }
    .info {
        font-size: 12px;
        color: #787878;
        line-height: 20px;
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }

`
export const AuthorsMore = styled.div`
    text-align: center;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    a {
        text-decoration: none;
        color: #787878;
        .more {
            margin-left: 10px;
        }
    }

`
export const LoadMore =styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background-color: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
`
export const BackTop =styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
`