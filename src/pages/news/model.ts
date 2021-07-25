/*
 * @Author: your name
 * @Date: 2021-04-27 15:18:20
 * @LastEditTime: 2021-04-28 10:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin-main\src\pages\news\model.ts
 */
import type { Effect, Reducer } from 'umi';
import {message} from 'antd';
import { getNewsListData as getNewsListApi } from '@/services/content/article';
type newsType = {
  title: string, 
  href: string,
  _id: string
}

export type MType = {
  namespace: string;
  state: {
    newsList: newsType[]; 
  };
  effects?: {
    getNewsList: Effect;
  };
  reducers: {
    setNewList: Reducer;
  };
};

const M: MType = {
  namespace: 'news',
  state: {
    newsList: [],
  },
  effects: {
    *getNewsList({ payload }, { call, put }) {
      // 解构返回结果,判断是否成功
      const { code, data,message: msg } = yield call(getNewsListApi, payload);
      
      if(code == 200) {
        yield put({
          type: 'setNewList',
          payload: data
        })
      }else {
        message.error(msg);
      }
    },
  },
  reducers: {
    setNewList(state, { payload }) {
      const rows = payload      
      return {
        ...state,
        newsList: rows
      }
    },
  },
};

export default M;
