import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        fontSize: '4em', 
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '15px 0'
      }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setCount(c => c + 1)} className="btn btn-plus">
          ➕ +1
        </button>
        <button onClick={() => setCount(c => c - 1)} className="btn btn-minus">
          ➖ -1
        </button>
        <button onClick={() => setCount(0)} className="btn btn-reset">
          🔄 Сброс
        </button>
      </div>
    </div>
  )
}

export default Counter