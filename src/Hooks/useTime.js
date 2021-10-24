import { useEffect, useState } from 'react'

const useTime = () => {
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const result = `${hours}:${minutes.length === 1 ? '0' + minutes : minutes}:${
    seconds.length === 1 ? '0' + seconds : seconds
  }`

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setHours(date.getHours().toString())
      setMinutes(date.getMinutes().toString())
      setSeconds(date.getSeconds().toString())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [hours, minutes, seconds])

  return result
}

export default useTime
