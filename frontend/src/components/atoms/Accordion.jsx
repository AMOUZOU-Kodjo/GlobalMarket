import { useState } from "react";

export function Accordion({ items = [], defaultOpen = null, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState(
    defaultOpen != null ? (allowMultiple ? [defaultOpen] : [defaultOpen]) : []
  );

  const toggle = (id) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div className="collapse collapse-arrow bg-base-200">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`collapse ${isOpen ? "collapse-open" : ""}`}
          >
            <input
              type="checkbox"
              checked={isOpen}
              readOnly
              className="hidden"
            />
            <div
              className="collapse-title text-lg font-medium cursor-pointer"
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(item.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {item.title}
            </div>
            <div className="collapse-content">
              <div className="pt-1">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
