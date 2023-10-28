import { useState, useEffect } from 'react'

function useCountdown(initialTime = 120) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft <= 0) {
      return
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [timeLeft])

  return timeLeft
}

export default useCountdown
