
// 积分盘的类
class ScorePanel {
  // score 用来记录分数和等级
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 限制等级
  maxLevel: number
  // 多少分升级
  upScore: number

  constructor(maxLevel = 10, upScore = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分的方法 
  addScore()  {
    this.scoreEle.innerHTML = ++this.score +  ''

    // 判断分数是多少
    if(this.score % 10 === 0) {
      this.levelUp()
    }
  }

  // 等级提升
  // 需要满足一定条件才可以升级和分数有关系
  levelUp() {
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level +  ''
    }
  }
}

export default ScorePanel