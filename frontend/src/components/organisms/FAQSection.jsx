import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, HelpCircle } from "lucide-react";
import { EmptyState } from "../atoms/EmptyState";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-200">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
        className="peer"
      />
      <div className="collapse-title font-medium text-sm pr-10">
        {item.question}
      </div>
      <div className="collapse-content text-sm opacity-70">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection({
  items = [],
  categories,
  className = "",
}) {
  const { t } = useTranslation();
  const [openIndices, setOpenIndices] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleItem = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (openIndices.size === items.length) {
      setOpenIndices(new Set());
    } else {
      setOpenIndices(new Set(items.map((_, i) => i)));
    }
  };

  const filteredItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  const categoryMap = {};
  if (categories && categories.length) {
    categories.forEach((cat) => {
      categoryMap[cat] = items.filter((item) => item.category === cat);
    });
  }

  const itemCategories = categories || [
    ...new Set(items.map((item) => item.category).filter(Boolean)),
  ];

  if (!items.length) {
    return (
      <EmptyState
        icon={HelpCircle}
        title={t('faq.noQuestions')}
        description={t('faq.noQuestionsDescription')}
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{t('faq.title')}</h2>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={toggleAll}
        >
          {openIndices.size === items.length ? t('faq.collapseAll') : t('faq.expandAll')}
        </button>
      </div>

      {itemCategories.length > 0 && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 flex-wrap">
          <button
            type="button"
            className={`btn btn-sm ${activeCategory === null ? "btn-primary" : "btn-outline"}`}
            onClick={() => setActiveCategory(null)}
          >
            {t('faq.all')}
          </button>
          {itemCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`btn btn-sm ${
                activeCategory === cat ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {filteredItems.map((item, index) => {
          const globalIndex = items.indexOf(item);
          return (
            <FAQItem
              key={item.id || item._id || globalIndex}
              item={item}
              isOpen={openIndices.has(globalIndex)}
              onToggle={() => toggleItem(globalIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQSection;
