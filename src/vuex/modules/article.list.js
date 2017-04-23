import {
	ARTICLE_LIST,
	ADD_ARTICLE_LIST,
	REQUEST_ARTICLE_LIST,
	GET_ARTICLE_LIST_FAILURE,
  DELETE_ARTICLE,
  CLICK_LIKE_ARTICLE_LIST,
  CLICK_ARTICLE_LIST_ITEM
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [REQUEST_ARTICLE_LIST](state){
    state.isFetching = true
  },
  [ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.articleList
  },
  [GET_ARTICLE_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.articleList]
  },
  [DELETE_ARTICLE](state,id){
    state.items.shift(id)
  },
  [CLICK_LIKE_ARTICLE_LIST](state,id){
    for(var value of state.items){
      if(value._id==id){
        value.like_count++
      }
    }
  },
  [CLICK_ARTICLE_LIST_ITEM](state,id){
    for(var value of state.items){
      if(value._id==id){
        value.visit_count++
      }
    }
  }
}

export default {
  state,
  mutations
}