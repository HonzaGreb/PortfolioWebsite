import { useState, memo } from 'react'
import styles from './Works.module.css'
import WorkItem from './WorkItem'

import joker_web from '../../../img/works/joker_web.png'
import gurmet_web from '../../../img/works/gurmet_web.png'
import personal_web from '../../../img/works/personal_web.png'
import joker_graphics from '../../../img/works/joker_graphics.png'
import posters_graphics from '../../../img/works/posters_graphics.png'

const GRAPHICS = 'Grafika'
const WEBDESIGN = 'Webdesign'
const ALL = 'Vše'

const WORKS_DATA = [
  {
    title: 'Joker Cider',
    description:
      'V tomto projektu jsem se podílel na tvorbě UI/UX designu a front-endu webových stránek lokálního řemeslného pivovaru.',
    img: joker_web,
    category: WEBDESIGN,
    id: 1,
  },
  {
    title: 'Master Gurmet',
    description: 'UI/UX design webových stránek pro Hradecký potravinový startup.',
    img: gurmet_web,
    category: WEBDESIGN,
    id: 2,
  },
  {
    title: 'Osobní web',
    description: 'Jednoduchá webová aplikace ve stylu retro operačních systémů, napsaná v Reactu.',
    img: personal_web,
    category: WEBDESIGN,
    id: 3,
  },
  {
    title: 'Joker Cider',
    description:
      'Produktový design v minimalistickém stylu. Navržený pro účely plánovaného rebrandingu.',
    img: joker_graphics,
    category: GRAPHICS,
    id: 4,
  },

  {
    title: 'Grafické práce',
    description: 'Řada plakátů, vizitek, logotypů a jiných tiskovin z mých grafických let.',
    img: posters_graphics,
    category: GRAPHICS,
    id: 5,
  },
]

const Works = () => {
  const [worksArray, setWorksArray] = useState(WORKS_DATA)
  const [currentFilter, setCurrentFilter] = useState(ALL)
  const showInfoHandler = () => {}

  const filterHandler = (e) => {
    const filterCategory = e.target.dataset.filter
    setCurrentFilter(filterCategory)

    if (filterCategory === ALL) {
      setWorksArray(WORKS_DATA)
    } else {
      const filteredArray = WORKS_DATA.filter((workItem) => workItem.category === filterCategory)
      setWorksArray(filteredArray)
    }
  }

  const mappedWorks = worksArray.map((workItem) => (
    <WorkItem
      title={workItem.title}
      description={workItem.description}
      img={workItem.img}
      category={workItem.category}
      key={workItem.id}
      onShowInfo={showInfoHandler}
    />
  ))

  const graphicsFilterStyles = currentFilter === GRAPHICS && 'selected-filter'
  const webdesignFilterStyles = currentFilter === WEBDESIGN && 'selected-filter'
  const allFilterStyles = currentFilter === ALL && 'selected-filter'

  return (
    <div className={styles['works-container']}>
      <h3>Mé práce:</h3>
      <div className={styles['filter-options-container']}>
        <button className={styles[allFilterStyles]} data-filter={ALL} onClick={filterHandler}>
          {ALL}
        </button>
        <button
          className={styles[graphicsFilterStyles]}
          data-filter={GRAPHICS}
          onClick={filterHandler}
        >
          {GRAPHICS}
        </button>
        <button
          className={styles[webdesignFilterStyles]}
          data-filter={WEBDESIGN}
          onClick={filterHandler}
        >
          {WEBDESIGN}
        </button>
      </div>
      <div className={styles['works-container']}>{mappedWorks}</div>
    </div>
  )
}

export default memo(Works)
