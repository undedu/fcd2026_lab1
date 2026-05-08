import { useState } from 'react'

function InputTracker() {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="Введите что-нибудь..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '14px 18px',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          fontSize: '1em',
          outline: 'none',
          transition: 'border-color 0.3s',
        }}
        onFocus={e => e.target.style.borderColor = '#f5576c'}
        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
      />
      <div style={{
        background: '#f8f9fa',
        borderRadius: '12px',
        padding: '15px',
        marginTop: '15px',
        minHeight: '50px'
      }}>
        <span style={{ color: '#718096', fontSize: '0.85em' }}>Вы ввели:</span>
        <p style={{ fontSize: '1.1em', marginTop: '5px', wordBreak: 'break-word' }}>
          {text || 'Ожидание ввода...'}
        </p>
      </div>
      <p style={{ textAlign: 'right', color: '#a0aec0', fontSize: '0.85em', marginTop: '8px' }}>
        Символов: <strong>{text.length}</strong>
      </p>
    </div>
  )
}

export default InputTracker