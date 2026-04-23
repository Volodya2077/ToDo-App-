import { useState } from 'react'
import { ListTodo } from 'lucide-react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

function App() {
  const [todos, setTodos] = useState([])
  // TODO 1: Создай стейт для списка задач (массив объектов)
  // Каждая задача: { id: число, text: строка, completed: булеан }
  // Подсказка: useState([])

  // TODO 2: Создай стейт для текста в инпуте
  // Подсказка: useState('')
  const[text, setText] = useState('')

  // TODO 3: Создай стейт для текущего фильтра
  // Возможные значения: 'all', 'active', 'completed'
  // Подсказка: useState('all')
  const [filter,setFilter] = useState('all')

  // TODO 4: Напиши функцию handleInputChange
  // Она вызывается при каждом изменении инпута
  // Получает event — нужно обновить стейт инпута
  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    if(text.trim() !== ''){
      
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      }
      setTodos([...todos, newTodo])
      setText('')

    }
    
  }

  // TODO 6: Напиши функцию handleToggleTodo
  // Принимает id задачи
  // Переключает completed у задачи с этим id (true ↔ false)
  // Подсказка: используй .map() чтобы создать новый массив
  const handleToggleTodo = (id) => {
    const updated = todos.map((el)=> el.id===id?{...el, completed: !el.completed}:el)
    setTodos(updated)
  }

  // TODO 7: Напиши функцию handleDeleteTodo
  // Принимает id задачи
  // Удаляет задачу с этим id из массива
  // Подсказка: используй .filter()
  const handleDeleteTodo = (id) => {
    const filteredTodo = todos.filter((el)=>el.id !== id )
    setTodos(filteredTodo)
  }

  // TODO 8: Напиши функцию handleFilterChange
  // Принимает строку фильтра ('all', 'active', 'completed')
  // Обновляет стейт фильтра
  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  // TODO 9: Создай переменную filteredTodos
  // Фильтруй массив задач в зависимости от текущего фильтра:
  // 'all' → все задачи
  // 'active' → только незавершённые (completed === false)
  // 'completed' → только завершённые (completed === true)
  // Подсказка: используй .filter() или тернарный оператор
  const filteredTodos = todos.filter((el)=>{
    return filter === 'active'?el.completed === false:filter === 'completed'?el.completed === true:true;
  })
  // TODO 10: Создай объект counts с количеством задач
  // { active: число активных, completed: число завершённых }
  // Подсказка: используй .filter().length
  const counts = { active: todos.filter((el)=>el.completed === false).length, completed: todos.filter((el)=>el.completed === true).length } // ЗАМЕНИ НА СВОЮ ЛОГИКУ

  // ============================================================
  // UI — стили уже готовы, не трогай JSX (если не хочешь)
  // ============================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-xl mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl bg-violet-100 dark:bg-violet-900/30">
            <ListTodo size={28} className="text-violet-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Мои задачи
          </h1>
        </div>

        {/* Карточка */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 space-y-5">
          {/* Ввод задачи */}
          <TodoInput
            inputValue={text} 
            onInputChange={handleInputChange}
            onAddTodo={handleAddTodo}
          />

          {/* Фильтры */}
          <FilterBar
            currentFilter={filter} 
            onFilterChange={handleFilterChange}
            counts={counts}
          />

          {/* Разделитель */}
          <div className="border-t border-gray-100 dark:border-gray-700" />

          {/* Список задач */}
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        </div>

      </div>
    </div>
  )
}

export default App
