import React from 'react'
import LifeCom from './LifeCom'
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

type PropProps = {

}

const ReactCom: React.FC<PropProps> = props => {
  return (
    <PageContainer>
      <Card title="生命周期" bordered={true}>
        <LifeCom />
      </Card>
    </PageContainer>
  )
}

export default ReactCom