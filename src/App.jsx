import { useEffect, useState } from 'react'
import { ListTodo } from 'lucide-react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

function App() {
  const [todos, setTodos] = useState(()=>{
    const saved = localStorage.getItem('todos')
    return saved? JSON.parse(saved) : []
  })
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const[text, setText] = useState('')

  const [filter,setFilter] = useState('all')

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

  
  const handleToggleTodo = (id) => {
    const updated = todos.map((el)=> el.id===id?{...el, completed: !el.completed}:el)
    setTodos(updated)
  }

  const handleDeleteTodo = (id) => {
    const filteredTodo = todos.filter((el)=>el.id !== id )
    setTodos(filteredTodo)
  }

  const handleFilterChange = (filter) => {
    setFilter(filter)
  }


  const filteredTodos = todos.filter((el)=>{
    return filter === 'active'?el.completed === false:filter === 'completed'?el.completed === true:true;
  })
 
  const counts = { active: todos.filter((el)=>el.completed === false).length, completed: todos.filter((el)=>el.completed === true).length } // ЗАМЕНИ НА СВОЮ ЛОГИКУ


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
