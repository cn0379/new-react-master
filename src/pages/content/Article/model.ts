import type { Effect, Reducer } from 'umi';
import { getNewsListData as getNewsListApi } from '@/services/content/article';

type selectData = {
  name: string;
  id: string;
  key_id: string;
  key_name: string;
};

export type FormType = {
  id?: string;
  title: string;
  colLayout: number;
  placeholder: string;
  name: string;
  type: string;
  width?: number;
  selectData?: selectData[];
  picker?: string;
};

export type ArticleType = {
  id?: string;
  title: string;
  author: string;
  collectCount: number;
  content1?: string;
  content2?: string;
  coverImg?: string;
  createTime?: string;
  editorType?: number;
  isShow?: number;
  modifyTime?: string;
  summary?: string;
  viewCount?: number;
  zanCount?: number;
};

export type MType = {
  namespace: string;
  state: {};
  effects?: {
    getNewsList: Effect;
  };
  reducers?: {
    setArticleList: Reducer;
  };
};

const M: MType = {
  namespace: 'article',
  state: {
    articleList: [
      {
        herf: 'www.baidu.com',
        title: '百度',
      },
    ],
    articleTotalCount: 0,
  },
  effects: {
    *getNewsList({ payload }, { call, put }) {
      // 解构返回结果,判断是否成功
      yield call(getNewsListApi, payload);
    },
  },
};

export default M;
