import { useState, useEffect } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // 'all' | 'done' | 'pending'

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети')
        return res.json()
      })
      .then(data => {
        setTodos(data.slice(0, 15))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <div style={{ fontSize: '2em', marginBottom: '10px' }}>⏳</div>
        <p style={{ color: '#718096' }}>Загрузка задач с сервера...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        background: '#fff5f5', 
        borderRadius: '12px',
        color: '#c53030' 
      }}>
        ❌ Ошибка: {error}
      </div>
    )
  }

  const filtered = todos.filter(t => {
    if (filter === 'done') return t.completed
    if (filter === 'pending') return !t.completed
    return true
  })

  const stats = {
    all: todos.length,
    done: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length
  }

  return (
    <div>
      {/* Фильтры */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px', flexWrap: 'wrap' }}>
        {[
          { key: 'all', label: `Все (${stats.all})` },
          { key: 'done', label: `Готово (${stats.done})` },
          { key: 'pending', label: `В работе (${stats.pending})` },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setFilter(item.key)}
            className={`filter-btn ${filter === item.key ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Список */}
      <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }}>
        {filtered.map(todo => (
          <div 
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 15px',
              marginBottom: '6px',
              background: todo.completed ? '#f0fff4' : '#fffaf0',
              borderRadius: '10px',
              borderLeft: `4px solid ${todo.completed ? '#48bb78' : '#ed8936'}`,
              transition: 'transform 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <span style={{ fontSize: '1.3em', minWidth: '35px', textAlign: 'center' }}>
              {todo.completed ? '✅' : '⏳'}
            </span>
            <span style={{ 
              flex: 1, 
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#718096' : '#2d3748'
            }}>
              {todo.title}
            </span>
            <span style={{ 
              fontSize: '0.75em', 
              background: todo.completed ? '#c6f6d5' : '#fefcbf',
              color: todo.completed ? '#276749' : '#975a16',
              padding: '4px 10px',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              {todo.completed ? 'Done' : 'Todo'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList