import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = data => ({
    type: actionTypes.CHANGE_HOME_DATA,
    data
})
// 获得页面初始数据
export const getHomeData = () => {
    return dispatch => {
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            dispatch(changeHomeData(data));
        }).catch(() => {
            console.log('error');
        })
    }
}

// 增加文章列表
const addArticleList = (articleList, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    articleList,
    nextPage
})
// 获得更多列表,后端根据请求参数中的页码来返回不同的内容
export const getMoreList = (pageIndex) => {
    return (dispatch) => {
        axios.get(`./api/homeList.json?page=${pageIndex}`).then((res) => {
            const result = res.data.data;
            dispatch(addArticleList(result, pageIndex + 1));
        }).catch(() => {
            console.log('error');
        })
    }
}

// 供局部使用的 actionCreator,推荐作者换页
const changeAuthorList = (authorList, nextAuthorPage) => ({
    type: actionTypes.CHANGE_AUTHOR_LIST,
    authorList,
    nextAuthorPage
})
//  获得推荐作者,推荐作者换一批
export const changeAouthorList = (authorListPage) => {
    return dispatch => {
        axios.get(`/api/recommendedAuthors.json?=${authorListPage}`).then(res => {
            const authorList = res.data.data;
            dispatch(changeAuthorList(authorList, authorListPage + 1));
        }).catch(() => {
            console.log('error');
        })
    }
}
// 控制回到顶部按钮的显示和隐藏
export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
})