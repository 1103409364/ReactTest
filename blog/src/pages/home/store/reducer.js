import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
// fromJS 会把对象变成 immutable 对象，深层次的转换。还有个方法 List 是浅转换
const defaultState = fromJS({
    bannerImg: '',
    topicList: [],
    articleList: [],
    articlePage: 1, //分页，告诉后端要哪一页的数据
    recommendList: [],
    downLoadLink: {},
    authorList: [],
    authorListPage: 1,
    showScroll: false //是否显示回到顶部
})

// 当 switch 里的语句变复杂的时候，可以进行提取
const changeHomeData = (state, action) => {
    return state.merge({
        // action 传进来的数据要转为 immutable 对象
        bannerImg: fromJS(action.data.bannerImg),
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList),
        authorList: fromJS(action.data.authorList),
        downLoadLink: fromJS(action.data.downLoadLink),
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);

        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(fromJS(action.articleList)),
                'articlePage': action.nextPage
            })
        case actionTypes.CHANGE_AUTHOR_LIST:
            return state.merge({
                'authorList': fromJS(action.authorList),
                'authorListPage': action.nextAuthorPage
            })
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}