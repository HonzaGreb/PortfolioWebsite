import { ROCK, PAPER, SCISSORS, VICTORY, DRAW, DEFEAT } from '../Game'
import { useEffect, useState, Fragment, useCallback, memo } from 'react'
import styles from './Statistics.module.css'

const victoryPlaystyle = ['W', 'VÍTĚZ']
const drawPlaystyle = ['Pacifismus', 'Princip Neagrese']
const defeatPlaystyle = ['Smolný sloup', 'Ozbrojené síly Francie']
const scissorsPlaystyle = ['Střihoruký Edvard', 'Poněkud ostrý', 'Průměrný užívač nůžek']
const rockPlaystyle = ['Rock Café', 'Olgierd von Everecc', 'Kluk s kamením']
const paperPlaystyle = ['La Casa de Papel', 'PAPÍRNY BRNO a.s.', 'Grafoman']
const fiftyPlusPlaystyle = ['Závislák', 'Proboha, jdi ven', 'Certifikovaný gamer']

const statsConfig = [
  { name: null, count: 0, playstyle: null },
  { name: null, count: 0, playstyle: null },
  { name: null, count: 0, playstyle: null },
  { name: null, count: 0, playstyle: null },
  { name: null, count: 0, playstyle: null },
  { name: null, count: 0, playstyle: null },
]

const Statistics = (props) => {
  const [stats, setStats] = useState(statsConfig)
  const [playstyleState, setPlaystyleState] = useState()

  const countOccurrences = (array, choice) =>
    array.reduce((a, ch) => (ch === choice ? a + 1 : a), 0)

  const randomize = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const calculatePlaystyle = useCallback((total, arr) => {
    const fiftyPercent = total / 2
    let playstyleArray = []
    for (let arrItem of arr) {
      if (arrItem.count > fiftyPercent) {
        if (total > 50) {
          playstyleArray = playstyleArray.concat(fiftyPlusPlaystyle)
          setPlaystyleState(randomize(playstyleArray))
        }
        playstyleArray = playstyleArray.concat(arrItem.playstyle)
        setPlaystyleState(randomize(playstyleArray))
      }
    }
  }, [])

  const renderStatistics = useCallback(() => {
    const log = props.log
    const choicesArray = log.map((logItem) => {
      return logItem.playerChoice
    })

    const resultsArray = log.map((logItem) => {
      return logItem.result
    })

    const rockOcc = countOccurrences(choicesArray, ROCK)
    const paperOcc = countOccurrences(choicesArray, PAPER)
    const scissorsOcc = countOccurrences(choicesArray, SCISSORS)

    const victoryOcc = countOccurrences(resultsArray, VICTORY)
    const drawOcc = countOccurrences(resultsArray, DRAW)
    const defeatOcc = countOccurrences(resultsArray, DEFEAT)

    const totalGames = victoryOcc + drawOcc + defeatOcc

    const statsArray = [
      { name: ROCK, count: rockOcc, playstyle: rockPlaystyle },
      { name: SCISSORS, count: scissorsOcc, playstyle: scissorsPlaystyle },
      { name: PAPER, count: paperOcc, playstyle: paperPlaystyle },
      { name: VICTORY, count: victoryOcc, playstyle: victoryPlaystyle },
      { name: DRAW, count: drawOcc, playstyle: drawPlaystyle },
      { name: DEFEAT, count: defeatOcc, playstyle: defeatPlaystyle },
    ]

    if (totalGames % 5 === 0) {
      calculatePlaystyle(totalGames, statsArray)
    }

    setStats(statsArray)
  }, [props.log, calculatePlaystyle])

  useEffect(() => {
    renderStatistics()
  }, [renderStatistics])

  return (
    <Fragment>
      {props.statisticsShown && (
        <div className={styles['statistics']}>
          <ul>
            <p>Volby</p>
            <li>
              Kámen:
              <b> {stats[0].count}x</b>
            </li>
            <li>
              Nůžky:
              <b> {stats[1].count}x</b>
            </li>
            <li>
              Papír:
              <b> {stats[2].count}x</b>
            </li>
          </ul>
          <ul>
            <p>Výsledky</p>
            <li>
              Výhra: <b>{stats[3].count}</b>
            </li>
            <li>
              Remíza: <b>{stats[4].count}</b>
            </li>
            <li>
              Prohra: <b>{stats[5].count}</b>
            </li>
          </ul>
        </div>
      )}
      {props.playstyleShown && (
        <p className={styles['playstyle']}>
          Herní styl: <b>{playstyleState}</b>
        </p>
      )}
    </Fragment>
  )
}

export default memo(Statistics)
