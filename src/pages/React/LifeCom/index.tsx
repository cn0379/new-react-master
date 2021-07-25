import React from 'react'

type PropProps = {

}

const LifeCom: React.FC<PropProps> = props => {
  return (
    <div>
      <h3>componentWillMount:在组建之前渲染执行</h3>
      <h3>componentDidMount:在组建之后渲染执行</h3>
      <h3>shouldComponentUpdate:返回true和false，true允许改变，false则反之</h3>
      <h3>componentWillUpdata:数据在改变之前执行</h3>
      <h3>componentDidUpdata:数据在改变之后执行</h3>
      <h3>componentWillReveiceProps:props发生改变执行 </h3>
      <h3>componentWillUnmount:组件卸载前执行</h3>
    </div>
  )
}

export default LifeCom