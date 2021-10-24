import styles from './Game.module.css'
import { useState, Fragment, memo } from 'react'

import RockIcon from '../../Icons/Game/RockIcon'
import PaperIcon from '../../Icons/Game/PaperIcon'
import ScissorsIcon from '../../Icons/Game/ScissorsIcon'
import Statistics from './GameComponents/Statistics'
import GameSettings from './GameComponents/GameSettings'

export const ROCK = 'KÁMEN'
export const PAPER = 'PAPÍR'
export const SCISSORS = 'NŮŽKY'
export const VICTORY = 'VÝHRA'
export const DEFEAT = 'PROHRA'
export const DRAW = 'REMÍZA'

const computerChoices = [
  { choice: ROCK, beats: SCISSORS, isBeatenBy: PAPER },
  { choice: PAPER, beats: ROCK, isBeatenBy: SCISSORS },
  { choice: SCISSORS, beats: PAPER, isBeatenBy: ROCK },
]

const Game = () => {
  const [gameRunning, setGameRunning] = useState(false)
  const [resultText, setResultText] = useState(null)
  const [log, setLog] = useState([])
  const [settingsShown, setSettingsShown] = useState(false)
  const [statisticsShown, setStatisticsShown] = useState(false)
  const [playstyleShown, setPlaystyleShown] = useState(false)

  const displayResult = (resultObj) => {
    const { playerChoice, computerChoice, result } = resultObj
    const updatedResultText = (
      <p>
        Zvolili jste {playerChoice}
        <br /> Počítač zahrál {computerChoice}
        <br />
        <span>{result}</span>
      </p>
    )

    setTimeout(() => {
      setGameRunning(false)
      setResultText(updatedResultText)
    }, 600)
  }

  const evaluateGame = (playerChoice, computerChoice) => {
    let result
    if (computerChoice.isBeatenBy === playerChoice) {
      result = VICTORY
    } else if (computerChoice.beats === playerChoice) {
      result = DEFEAT
    } else if (computerChoice.choice === playerChoice) {
      result = DRAW
    }

    const resultObject = {
      playerChoice,
      computerChoice: computerChoice.choice,
      result,
    }

    writeToLog(resultObject)
    displayResult(resultObject)
  }

  const playGameHandler = (e) => {
    if (!gameRunning) {
      setGameRunning(true)
      setResultText(null)
      const randomIndex = Math.floor(Math.random() * computerChoices.length)
      const computerChoice = computerChoices[randomIndex]
      let userChoice
      if (e.target.tagName === 'IMG') {
        userChoice = e.target.parentElement.dataset.choice
      } else {
        userChoice = e.target.dataset.choice
      }

      evaluateGame(userChoice, computerChoice)
    } else {
      return
    }
  }

  const writeToLog = (logEntry) => {
    setLog((prevLogState) => {
      return [...prevLogState, logEntry]
    })
  }

  const openSettingsHandler = () => {
    setSettingsShown((prevState) => !prevState)
  }

  const closeSettingsHandler = (statisticsShown, playstyleShown) => {
    setSettingsShown(false)
    setStatisticsShown(statisticsShown)
    setPlaystyleShown(playstyleShown)
  }

  const result =
    !resultText && !gameRunning ? (
      <p>Hru lze zahájit kliknutím na libovolnou z herních ikon</p>
    ) : (
      resultText
    )

  return (
    <Fragment>
      <button className={styles['game-settings-btn']} onClick={openSettingsHandler}>
        Nastavení hry
      </button>
      <h3 className={styles['game-heading']}>Což takhle kámen nůžky?</h3>
      <div className={styles['choice-container']}>
        <button data-choice={ROCK} onClick={playGameHandler} disabled={gameRunning}>
          <RockIcon />
        </button>
        <button data-choice={SCISSORS} onClick={playGameHandler} disabled={gameRunning}>
          <ScissorsIcon />
        </button>
        <button data-choice={PAPER} onClick={playGameHandler} disabled={gameRunning}>
          <PaperIcon />
        </button>
      </div>
      <div className={styles['result-container']}>{result}</div>
      <Statistics log={log} statisticsShown={statisticsShown} playstyleShown={playstyleShown} />
      {settingsShown && (
        <GameSettings
          onClose={closeSettingsHandler}
          playstyleShown={playstyleShown}
          statisticsShown={statisticsShown}
        />
      )}
    </Fragment>
  )
}

export default memo(Game)
