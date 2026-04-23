import { Plus } from 'lucide-react'

function TodoInput({ inputValue, onInputChange, onAddTodo }) {
  return (
    <form
      onSubmit={onAddTodo}
      className="flex gap-3"
    >
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Что нужно сделать?"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white
                   text-gray-800 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent
                   shadow-sm transition-all duration-200
                   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-3 rounded-xl
                   bg-violet-500 text-white font-medium
                   hover:bg-violet-600 active:scale-95
                   shadow-sm transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus size={18} />
        <span className="hidden sm:inline">Добавить</span>
      </button>
    </form>
  )
}

export default TodoInput
