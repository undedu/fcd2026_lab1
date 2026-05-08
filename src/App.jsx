import Counter from './components/Counter'
import InputTracker from './components/InputTracker'
import Stopwatch from './components/Stopwatch'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* ШАПКА */}
      <header className="header">
        <div className="header-badge">ЛАБ 1</div>
        <h1>Базовая работа с хуками в React</h1>
        <p className="header-subtitle">
          useState &bull; useEffect &bull; Функциональные компоненты
        </p>
        <div className="header-info">
          <span>Разработка полного цикла</span>
          <span className="separator">|</span>
          <span>Ушаков НД УБВТ2303</span>
          <span className="separator">|</span>
          <span>API: /todos</span>
        </div>
      </header>

      {/* СЕТКА ЗАДАНИЙ */}
      <main className="dashboard">
        {/* Задание 1 */}
        <section className="card card-counter">
          <h2 className="card-title">Задание 1: Счётчик</h2>
          <p className="card-desc">Управление состоянием через <code>useState</code></p>
          <Counter />
        </section>

        {/* Задание 2 */}
        <section className="card card-input">
          <h2 className="card-title">Задание 2: Ввод текста</h2>
          <p className="card-desc">Отслеживание <code>onChange</code> + <code>useState</code></p>
          <InputTracker />
        </section>

        {/* Задание 3 */}
        <section className="card card-timer">
          <h2 className="card-title">Задание 3: Секундомер</h2>
          <p className="card-desc"><code>useEffect</code> + <code>setInterval</code> + очистка</p>
          <Stopwatch />
        </section>

        {/* Задание 4 */}
        <section className="card card-api">
          <h2 className="card-title">Задание 4: API /todos</h2>
          <p className="card-desc"><code>fetch</code> + <code>useEffect</code> + <code>map()</code></p>
          <TodoList />
        </section>
      </main>

      {/* ПОДВАЛ */}
      <footer className="footer">
        <p>РПЦ 6сем УБВТ2303 &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App