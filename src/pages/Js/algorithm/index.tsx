import React from 'react'
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';


type PropsType = {
}

type ItemMapType = {
  id: number,
  pid: number,
  title: string,
  children?: Array<ItemMapType>,
}

const arrayToTree = (arr: Array<ItemMapType>): Array<object> => {
  const result: Array<ItemMapType> = [];   // 存放结果集
  const itemMap: Object = {};  // 
  for (const item of arr) {
    if (!itemMap[item.id]) {
      itemMap[item.id] = {
        children: [],
      }
    }

    itemMap[item.id] = {
      ...item,
      children: itemMap[item.id]['children']
    }

    const treeItem: ItemMapType = itemMap[item.id];
    if (item.pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[item.pid]) {
        itemMap[item.pid] = {
          children: [],
        }
      }
      itemMap[item.pid].children.push(treeItem)
    }
  }
  return result
};


const Alforithm: React.FC<PropsType> = props => {

  const arr: Array<ItemMapType> = [
    { id: 2, title: '部门2', pid: 1 },
    { id: 3, title: '部门3', pid: 1 },
    { id: 4, title: '部门4', pid: 3 },
    { id: 5, title: '部门5', pid: 4 },
    { id: 1, title: '部门1', pid: 0 },
  ]


  return (
    <PageContainer>
      <Card title="数组转树" bordered={true} >
        {
          arrayToTree(arr).map(ele => {
            return <div key={ele.id} > {ele.title}  </div>
          })
        }
      </Card>
    </PageContainer>
  )
}

export default Alforithm