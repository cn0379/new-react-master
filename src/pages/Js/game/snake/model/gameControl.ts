/*
 * @Author: your name
 * @Date: 2021-07-18 13:41:27
 * @LastEditTime: 2021-07-24 12:58:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin-main\src\pages\Js\game\snake\model\gameControl.ts
 */
import Food from "./food"
import Snake from "./snake"
import ScorePanel from "./scorePanel"

class GameControl {
  // 蛇
  snake: Snake
  // 食物 
  food: Food
  // 积分盘
  scorePanel: ScorePanel
  // 蛇的方向
  direction: string = ''
  // 游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 游戏前的初始化方法调用游戏即开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this)) // 所有this表示当前对象 
    this.run()
  }

  keydownHandler(event: KeyboardEvent) {
    // 赋值前须校验用户的值
    // 修改方向
    this.direction = event.key
  }

  // 控制蛇的移动 
  run() {
    /* 
    * 根据方向改变蛇的位置
    * 向上 top减少
    * 向下 top增加
    * 向左 left减少
    * 向右 letf增加 
    *
    */
    // 获取蛇的现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 更具方向修改X Y值
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10
        break
      case "ArrowDown":
        Y += 10
        break
      case "ArrowLeft":
        X -= 10
        break
      case "ArrowRight":
        X += 10
        break
    }

    // 是都吃到了食物
    this.checkEat(X, Y)


    // 撞到墙snake会抛出错误。
    try {
      console.log(X);
      
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert(e.message + 'game over!')
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - this.scorePanel.level - 1 + 30)
  }

  // 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物的位置进行重置
      this.food.randomFoodCords()
      // 分数增加
      this.scorePanel.addScore()
      // 添加一节身体
      this.snake.addBody()
    }
  }
}

export default GameControl