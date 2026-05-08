import { useState, useEffect } from 'react'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }
    // Очистка при размонтировании или смене isRunning
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (totalSec) => {
    const h = Math.floor(totalSec / 3600)
    const m = Math.floor((totalSec % 3600) / 60)
    const s = totalSec % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '3em',
        fontFamily: "'Courier New', monospace",
        fontWeight: 'bold',
        color: '#2d3748',
        background: '#f8f9fa',
        borderRadius: '15px',
        padding: '15px',
        margin: '15px 0',
        letterSpacing: '3px'
      }}>
        {formatTime(seconds)}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setIsRunning(!isRunning)} 
          className={`btn ${isRunning ? 'btn-pause' : 'btn-start'}`}
        >
          {isRunning ? '⏸️ Пауза' : '▶️ Старт'}
        </button>
        <button 
          onClick={() => { setSeconds(0); setIsRunning(false) }} 
          className="btn btn-reset"
        >
          🔄 Сброс
        </button>
      </div>
    </div>
  )
}

export default Stopwatch