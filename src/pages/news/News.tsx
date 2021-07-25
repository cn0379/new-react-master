/*
 * @Author: your name
 * @Date: 2021-04-22 11:04:20
 * @LastEditTime: 2021-07-14 21:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin-main\src\pages\news\News.tsx
 */

import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import styles from './index.less'
import { connect } from 'umi';
import type { Dispatch } from 'umi';

const namespace = 'news';

type newsType = {
  title: string, 
  href: string,
  _id: string
}

type PropsType = {
  dispatch: Dispatch;
  newsList: newsType[]
}

type StateType = {
  dispatch: Dispatch;
};

const Home: React.FC<PropsType> = props => {

  const { dispatch, newsList } = props;
  useEffect(() => {
    getNewList()
  }, []);

  const getNewList = () => {
    dispatch({
      type: `${namespace}/getNewsList`,
      payload: {},
    });
  }

  return (
    <PageContainer>
      <Card>
        <h3 className={styles.titleNews} >今日新闻</h3>
        <article>
          {
            newsList.map(ele => {
              return (
                <React.Fragment key={ele._id} >
                  <div className={ styles.newsItem } >
                    <i className={styles.cirle} ></i>
                    <a className={ styles.info } title={ele.title} href={ele.href} target="_blank"  >{ele.title}</a>
                  </div>
                </React.Fragment>
              )
            })
          }

        </article>
      </Card>
    </PageContainer>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    newsList: state[namespace].newsList,
    dispatch: state.dispatch,
  };
};
export default connect(mapStateToProps)(Home);
