const FILTERS = [
  { key: 'all', label: 'Все' },
  { key: 'active', label: 'Активные' },
  { key: 'completed', label: 'Завершённые' },
]

function FilterBar({ currentFilter, onFilterChange, counts }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      {/* Кнопки фильтров */}
      <div className="flex gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${currentFilter === key
                          ? 'bg-white text-violet-600 shadow-sm dark:bg-gray-700 dark:text-violet-400'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Счётчик задач */}
      <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{counts.active} активных</span>
        <span>{counts.completed} завершённых</span>
      </div>
    </div>
  )
}

export default FilterBar
