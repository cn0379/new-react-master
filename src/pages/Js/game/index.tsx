import React from 'react'
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import SnakeCom from './snake'
type PropsType = {

}

const GameCom: React.FC<PropsType> = (props) => {
  return (
    <PageContainer>
      <Card title={"贪吃蛇"} >
          <SnakeCom />
      </Card>
    </PageContainer>
  )
}

export default GameCom