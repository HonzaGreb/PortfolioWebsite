import styles from './WorkItem.module.css'
import { memo } from 'react'

const WorkItem = (props) => {
  return (
    <div className={styles['work-container']}>
      <img src={props.img} alt={props.title} />
      <div className={styles['work-text-container']}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default memo(WorkItem)
