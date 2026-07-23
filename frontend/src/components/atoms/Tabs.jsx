export function Tabs({ tabs = [], activeTab, onTabChange, className = "" }) {
  return (
    <div role="tablist" className={`tabs tabs-bordered ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          className={`tab ${activeTab === tab.id ? "tab-active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="flex items-center gap-1.5">
            {tab.icon && <tab.icon size={16} />}
            {tab.label}
            {tab.badge != null && (
              <span className="badge badge-sm">{tab.badge}</span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
