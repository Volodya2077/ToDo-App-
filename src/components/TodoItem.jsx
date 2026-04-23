import { Check, Trash2, RotateCcw } from 'lucide-react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`group flex items-center gap-3 px-4 py-3 rounded-xl border
                  transition-all duration-200 
                  ${todo.completed
                    ? 'bg-gray-50 border-gray-100 dark:bg-gray-800/50 dark:border-gray-700/50'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md dark:bg-gray-800 dark:border-gray-700'
                  }`}
    >
      {/* Кнопка завершения */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center
                    transition-all duration-200
                    ${todo.completed
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'border-gray-300 hover:border-violet-400 dark:border-gray-600'
                    }`}
      >
        {todo.completed && <Check size={14} />}
      </button>

      {/* Текст задачи */}
      <span
        className={`flex-1 text-left transition-all duration-200
                    ${todo.completed
                      ? 'line-through text-gray-400 dark:text-gray-500'
                      : 'text-gray-800 dark:text-gray-100'
                    }`}
      >
        {todo.text}
      </span>

      {/* Кнопка удаления */}
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-1.5 rounded-lg
                   text-gray-400 hover:text-red-500 hover:bg-red-50
                   dark:hover:bg-red-900/20
                   opacity-0 group-hover:opacity-100
                   transition-all duration-200"
      >
        <Trash2 size={16} />
      </button>
    </li>
  )
}

export default TodoItem
