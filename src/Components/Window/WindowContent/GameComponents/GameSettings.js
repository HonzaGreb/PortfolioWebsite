import styles from './GameSettings.module.css'
import { Fragment, useRef, useState, memo } from 'react'

const GameSettings = (props) => {
  const [statisticsShown, setStatisticsShown] = useState(props.statisticsShown)
  const [playstyleShown, setPlaystyleShown] = useState(props.playstyleShown)
  const statisticsInputRef = useRef()
  const playstyleInputRef = useRef()

  const statisticsInputChangeHandler = () => {
    setStatisticsShown(statisticsInputRef.current.checked)
  }

  const playstyleInputChangeHandler = () => {
    setPlaystyleShown(playstyleInputRef.current.checked)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    props.onClose(statisticsShown, playstyleShown)
  }

  return (
    <Fragment>
      <div className={styles['game-settings-container']}>
        <form onSubmit={formSubmitHandler}>
          <span>
            <input
              ref={statisticsInputRef}
              checked={statisticsShown}
              onChange={statisticsInputChangeHandler}
              type='checkbox'
              id='statistics-input'
            ></input>
            <label htmlFor='statistics-input'>Zobrazit statistiky</label>
          </span>
          <span>
            <input
              ref={playstyleInputRef}
              checked={playstyleShown}
              onChange={playstyleInputChangeHandler}
              type='checkbox'
              id='playstyle-input'
            ></input>
            <label htmlFor='playstyle-input'>Zobrazit herní styl</label>
          </span>
          <button>OK</button>
        </form>
      </div>
      <div className={styles['backdrop']}></div>
    </Fragment>
  )
}

export default memo(GameSettings)
