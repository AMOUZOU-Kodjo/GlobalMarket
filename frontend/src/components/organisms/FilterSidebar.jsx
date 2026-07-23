import { useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  X,
  Star,
} from "lucide-react";
import { Badge } from "../atoms/Badge";

function FilterSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-base-200 pb-4 mb-4 last:border-0 last:mb-0">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left font-semibold text-sm mb-2"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && children}
    </div>
  );
}

export function FilterSidebar({
  filters = {},
  activeFilters = {},
  onFilterChange,
  onClearAll,
  loading = false,
  categories = [],
  className = "",
}) {
  const [priceMin, setPriceMin] = useState(activeFilters.priceMin || "");
  const [priceMax, setPriceMax] = useState(activeFilters.priceMax || "");
  const [showMobile, setShowMobile] = useState(false);

  const activeCount = Object.values(activeFilters).reduce((count, val) => {
    if (Array.isArray(val)) return count + val.length;
    if (val !== undefined && val !== null && val !== "" && val !== false) return count + 1;
    return count;
  }, 0);

  const handleCategoryToggle = (categoryId) => {
    const current = activeFilters.categories || [];
    const updated = current.includes(categoryId)
      ? current.filter((id) => id !== categoryId)
      : [...current, categoryId];
    onFilterChange?.({ ...activeFilters, categories: updated });
  };

  const handleRatingChange = (value) => {
    onFilterChange?.({
      ...activeFilters,
      rating: activeFilters.rating === value ? undefined : value,
    });
  };

  const handleBrandToggle = (brand) => {
    const current = activeFilters.brands || [];
    const updated = current.includes(brand)
      ? current.filter((b) => b !== brand)
      : [...current, brand];
    onFilterChange?.({ ...activeFilters, brands: updated });
  };

  const handlePriceApply = () => {
    onFilterChange?.({
      ...activeFilters,
      priceMin: priceMin !== "" ? Number(priceMin) : undefined,
      priceMax: priceMax !== "" ? Number(priceMax) : undefined,
    });
  };

  const handleClearAll = () => {
    setPriceMin("");
    setPriceMax("");
    onClearAll?.();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold flex items-center gap-2">
          <SlidersHorizontal size={18} />
          Filtres
          {activeCount > 0 && (
            <Badge variant="primary" size="xs">{activeCount}</Badge>
          )}
        </h3>
        {activeCount > 0 && (
          <button
            type="button"
            className="btn btn-ghost btn-xs text-error"
            onClick={handleClearAll}
          >
            Tout effacer
          </button>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <span className="loading loading-spinner loading-md" />
        </div>
      )}

      {!loading && (
        <>
          {categories.length > 0 && (
            <FilterSection title="Catégories">
              <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto">
                {categories.map((cat) => {
                  const id = cat._id || cat.id || cat.slug;
                  const name = cat.name || cat.label;
                  const count = cat.productCount ?? cat.count;
                  return (
                    <label
                      key={id}
                      className="flex items-center gap-2 cursor-pointer text-sm hover:bg-base-200 rounded px-2 py-1"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-primary"
                        checked={(activeFilters.categories || []).includes(id)}
                        onChange={() => handleCategoryToggle(id)}
                      />
                      <span className="flex-1 truncate">{name}</span>
                      {count !== undefined && (
                        <span className="text-xs opacity-40">({count})</span>
                      )}
                    </label>
                  );
                })}
              </div>
            </FilterSection>
          )}

          <FilterSection title="Prix">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="input input-bordered input-sm w-full"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                min="0"
              />
              <span className="opacity-40">-</span>
              <input
                type="number"
                placeholder="Max"
                className="input input-bordered input-sm w-full"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                min="0"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block mt-2"
              onClick={handlePriceApply}
            >
              Appliquer
            </button>
          </FilterSection>

          <FilterSection title="Note minimale">
            <div className="flex flex-col gap-1.5">
              {[4, 3, 2, 1].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                    activeFilters.rating === value
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-base-200"
                  }`}
                  onClick={() => handleRatingChange(value)}
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < value
                            ? "fill-warning text-warning"
                            : "text-base-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="opacity-60">& up</span>
                </button>
              ))}
            </div>
          </FilterSection>

          {filters.brands && filters.brands.length > 0 && (
            <FilterSection title="Marques">
              <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto">
                {filters.brands.map((brand) => {
                  const value = typeof brand === "string" ? brand : brand.name || brand.slug;
                  return (
                    <label
                      key={value}
                      className="flex items-center gap-2 cursor-pointer text-sm hover:bg-base-200 rounded px-2 py-1"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-primary"
                        checked={(activeFilters.brands || []).includes(value)}
                        onChange={() => handleBrandToggle(value)}
                      />
                      <span className="truncate">{value}</span>
                    </label>
                  );
                })}
              </div>
            </FilterSection>
          )}
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">
        <div className={`bg-base-100 border border-base-200 rounded-xl p-4 sticky top-24 ${className}`}>
          {sidebarContent}
        </div>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setShowMobile(true)}
        >
          <SlidersHorizontal size={16} />
          Filtres
          {activeCount > 0 && (
            <Badge variant="primary" size="xs">{activeCount}</Badge>
          )}
        </button>

        {showMobile && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobile(false)}
            />
            <div className="relative ml-auto w-full max-w-sm bg-base-100 h-full overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Filtres</h3>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm btn-circle"
                  onClick={() => setShowMobile(false)}
                >
                  <X size={20} />
                </button>
              </div>
              {sidebarContent}
              <div className="sticky bottom-0 bg-base-100 pt-4 border-t border-base-200 mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => setShowMobile(false)}
                >
                  Voir les résultats
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FilterSidebar;
