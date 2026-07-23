import { ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react'
import classNames from '../../utils/classNames'

function CategoryNode({
  category,
  selectedCategory,
  onSelect,
  expanded,
  onToggleExpand,
  level = 0,
}) {
  const hasChildren = category.children && category.children.length > 0
  const isExpanded = expanded.includes(category.id)
  const isSelected = selectedCategory === category.id

  const toggleExpand = (e) => {
    e.stopPropagation()
    onToggleExpand?.(category.id)
  }

  const handleSelect = () => {
    onSelect?.(category.id)
  }

  return (
    <div>
      <div
        className={classNames(
          'flex items-center gap-1 py-1.5 px-2 rounded-lg cursor-pointer text-sm transition-all',
          isSelected
            ? 'bg-primary/10 text-primary font-semibold'
            : 'hover:bg-base-200 text-base-content'
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleSelect}
        role="treeitem"
        aria-selected={isSelected}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleSelect()
          }
        }}
      >
        {hasChildren ? (
          <button
            className="btn btn-ghost btn-circle btn-xs"
            onClick={toggleExpand}
            aria-label={isExpanded ? 'Réduire' : 'Développer'}
          >
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        ) : (
          <span className="w-6" />
        )}

        {category.icon ? (
          <span className="text-base">{category.icon}</span>
        ) : isExpanded ? (
          <FolderOpen size={16} className="opacity-50" />
        ) : (
          <Folder size={16} className="opacity-50" />
        )}

        <span className="truncate">{category.label || category.name}</span>

        {category.count !== undefined && (
          <span className="ml-auto text-xs text-base-content/40">
            {category.count}
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div role="group">
          {category.children.map((child) => (
            <CategoryNode
              key={child.id}
              category={child}
              selectedCategory={selectedCategory}
              onSelect={onSelect}
              expanded={expanded}
              onToggleExpand={onToggleExpand}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function CategoryTree({
  categories = [],
  selectedCategory,
  onSelect,
  expanded = [],
  onToggleExpand,
}) {
  if (!categories.length) {
    return (
      <div className="text-sm text-base-content/40 py-4 text-center">
        Aucune catégorie disponible
      </div>
    )
  }

  return (
    <div className="py-2" role="tree" aria-label="Navigateur de catégories">
      {categories.map((category) => (
        <CategoryNode
          key={category.id}
          category={category}
          selectedCategory={selectedCategory}
          onSelect={onSelect}
          expanded={expanded}
          onToggleExpand={onToggleExpand}
          level={0}
        />
      ))}
    </div>
  )
}

export default CategoryTree
