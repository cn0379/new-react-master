import EchartsLine from './line/index'
import EchartsPie from './pie/index'
import {  Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

type PropsType = {

}

const LineEcharts: React.FC<PropsType> = (props) => {
  return (
    <PageContainer>
      <Card title="折线图" bordered={true}>
        <EchartsLine />
      </Card>
      <Card title="饼图" bordered={true}>
        <EchartsPie />
      </Card>
    </PageContainer>
  )
}

export default LineEcharts