import React, { useEffect, useState } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Card, Space } from 'antd';
import type { TableColumnType } from 'antd';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import BaseFrom from '@/components/BaseFrom'
import styles from './index.less';
import type { FormType, ArticleType } from './model'
import ArticleModal from './modal/index'

const namespace = 'article';

type SearchType = {
  auther: string;
  title: string;
  info: string;
}

type ColumnType = {
  title: string;
  dataIndex?: string;
}

type StateType = {
  articleList: ArticleType[];
  dispatch: Dispatch;
};

type PropsType = {
  articleList: ArticleType[];
  dispatch: Dispatch
}

// 引入明细组件
const Article: React.FC<PropsType> = (props) => {

  const { articleList  } = props;
  const [current, setCurrent] = useState(1);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('编辑');

  const formData: FormType[] = [
    {
      title: '标题',
      id: '1',
      colLayout: 6,
      placeholder: '请选择姓名',
      name: 'title',
      type: 'select',
      selectData: [
        {
          name: 'jack',
          id: '1',
          key_id: 'id',
          key_name: 'name',
        },
        {
          name: 'bob',
          id: '2',
          key_id: 'id',
          key_name: 'name',
        }
      ],
    },
    {
      title: '作者',
      id: '2',
      colLayout: 6,
      placeholder: '请输入作者信息',
      name: 'auther',
      type: 'input',
    },
    {
      title: '详细',
      id: '3',
      colLayout: 6,
      placeholder: '请输入详细信息',
      name: 'info',
      type: 'date',
      picker: 'date'
    },
  ]

  const colums: TableColumnType<ColumnType>[] = [
    {
      title: '#',
      // 如果定义形参未使用 建议添加_
      render(_text, _record, index) {
        return `${index + 1}`;
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      align: 'center'
    },
    {
      title: '链接',
      dataIndex: 'herf',
      align: 'center'
    },
    {
      title: '操作',
      align: 'center',
      render: () => (
        <Space>
          <a onClick={() => {
            doViewOrEdit(0)
          }} >查看</a>
          <a onClick={() => {
            doViewOrEdit(1)
          }} >编辑</a>
          <a className={styles.delBtn}>删除</a>
        </Space>
      )
    }
  ];

  // 可以监听值的变化
  useEffect(() => {
    console.log('start');
  }, [current]);

  // 搜索条件的数据
  const getSearchData = (data: SearchType): void => {
    console.log(data);
    setCurrent(3);
  }

  // 弹窗确认逻辑
  const onConfirm = (): void => {
    setShowDetail(false)
  }
  // 弹窗取消逻辑
  const onCancel = (): void => {
    setShowDetail(false)
  }

  // 更改title 
  const doViewOrEdit = (type:number ): void => {
    enum modalTitle  {
      '新增',
      '编辑'
    } 
    setModalTitle(modalTitle[type])
    setShowDetail(true);
  }

  return (
    <div>
      <PageContainer className={styles.main} >
        <Card className={styles.searchBar} >
          <BaseFrom
            getSearchData={getSearchData}
            formData={formData}
          ></BaseFrom>
        </Card>
        <Table
          loading={false}
          rowKey="id"
          columns={colums}
          dataSource={articleList}
        />
        <ArticleModal
          title={modalTitle}
          showDetail={showDetail}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </PageContainer>
    </div>
  )
}

/**
 * 提取需要的属性
 * dva-loading
 * @param param0
 */
const mapStateToProps = (state: StateType) => {

  return {
    articleList: state[namespace].articleList,
    dispatch: state.dispatch,
  };
};

// 把组件的props连接到一起
export default connect(mapStateToProps)(Article);