import React from 'react'
import { Modal } from 'antd';

type PropsType = {
  showDetail: boolean,
  title: string,
  onCancel: () => void,
  onConfirm: () => void,
}

const ArticleModal: React.FC<PropsType> = props => {
  const { showDetail, title, onCancel, onConfirm } = props
  return (
    <div>
      <Modal
        title={title}
        visible={showDetail}
        onOk={onConfirm}
        onCancel={onCancel}
      >
      </Modal>
    </div>
  )
}

export default ArticleModal