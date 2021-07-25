/*
 * @Author: your name
 * @Date: 2021-07-18 12:01:29
 * @LastEditTime: 2021-07-24 12:40:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin-main\src\pages\Js\game\snake\index.tsx
 */
import styles from './index.less';
import React, { useEffect } from 'react'
import { Food, ScorePanel, GameControl } from './model'
type PropsType = {

}

const SnakeCom: React.FC<PropsType> = (props) => {
  useEffect(() => {
    const food = new Food();
    const scorePanel = new ScorePanel();
    const gamec = new GameControl()

  }, []);

  return (
    // 游戏的容器
    <div className={styles.main} >
      {/* 游戏区域 */}
      <div className={styles.stage}>
        {/* 蛇 */}
        <div id="snake" className={styles.snake} >
          <div></div>
        </div>
        {/* 食物 */}
        <div id="food" className={styles.food} >
          {/* 添加四个小div 来设置食物的样式 */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* 积分盘 */}
      <div className={styles.scorePanpel}>
        <div>
          分数：<span id="score" className={styles.score} >0</span>
        </div>
        <div>
          等级:<span id="level" className={styles.level} >1</span>
        </div>
      </div>
    </div>
  )
}

export default SnakeCom