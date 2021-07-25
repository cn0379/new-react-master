/**
 * 对于食物需要什么属性？
 * 应该具有吃完加分的属性
 * 蛇吃到食物应该消失，如何判断蛇吃到了食物 ？
 * 如果蛇头的坐标和食物的一样就代表吃到了。
 * 食物的位置是蛇吃到之后就没了，不能是固定位置，
 * 所以还需定义一个改变食物位置的操作
 */
 class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!; // id元素不一定拿的到，！表示一定有
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }
  // 生成食物的随机位置
  // 食物的最小位置是0 最大位置是300 
  // 蛇移动一次是一格（大小为10），所以要求食物的坐标必须是整数10的倍数
  randomFoodCords() {
    let left = Math.round(Math.random() * 29) * 10 // 0 到300 之间
    let top = Math.round(Math.random() * 31) * 10 // 0 到320 之间
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }

}



export default Food