class Snake {

  // 蛇的元素 
  head: HTMLElement
  // 蛇的身体（包含蛇头）
  bodies: HTMLCollection
  // 蛇的容器
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }


  // 只需要考虑舌头的坐标因为是蛇头吃到食物 
  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  set X(value) {
    if (this.X === value) {
      return
    }
    // X的合法值为0-300之间
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了');
    }

    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {

      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        value = this.X - 10;
      } else {
        // 向左走
        value = this.X + 10;
      }
    }

    this.moveBody()
    this.head.style.left = value + 'px'
  }

  set Y(value) {
    if (this.Y === value) {
      return
    }

    // Y的合法值为0-320之间
    if (value < 0 || value > 320) {
      throw new Error('蛇撞墙了');
    }

    // 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    this.moveBody()

    this.head.style.top = value + 'px'
  }


  // 添加蛇的身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 添加一个蛇移动的方法
  moveBody() {
    /*
    *   将后边的身体设置为前边身体的位置
    *       举例子：
    *           第4节 = 第3节的位置
    *           第3节 = 第2节的位置
    *           第2节 = 蛇头的位置
    */
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

   // 检查蛇头是否撞到身体的方法
   checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
        let bd = this.bodies[i] as HTMLElement;
        if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
            // 进入判断说明蛇头撞到了身体，游戏结束
            throw new Error('撞到自己了！');
        }
    }
}

}

export default Snake