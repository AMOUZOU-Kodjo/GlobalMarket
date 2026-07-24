import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Inbox,
} from "lucide-react";
import { Skeleton } from "../atoms/Skeleton";
import { EmptyState } from "../atoms/EmptyState";

function TableSkeleton({ columns, compact }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex} className={compact ? "py-1.5" : "py-3"}>
              <Skeleton
                variant="text"
                width={colIndex === 0 ? "60%" : "80%"}
                height={14}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export function DataTable({
  columns = [],
  data = [],
  loading = false,
  emptyMessage,
  onRowClick,
  striped = false,
  hover = true,
  compact = false,
  className = "",
}) {
  const { t } = useTranslation();
  const resolvedEmptyMessage = emptyMessage || t('common.noData');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      const strA = String(aVal).toLowerCase();
      const strB = String(bVal).toLowerCase();

      if (strA < strB) return sortConfig.direction === "asc" ? -1 : 1;
      if (strA > strB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const renderSortIcon = (column) => {
    if (!column.sortable) return null;

    if (sortConfig.key === column.key) {
      return sortConfig.direction === "asc" ? (
        <ArrowUp size={14} />
      ) : (
        <ArrowDown size={14} />
      );
    }

    return <ArrowUpDown size={14} className="opacity-30" />;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`${compact ? "py-2" : ""} ${
                  col.sortable
                    ? "cursor-pointer select-none hover:bg-base-200 transition-colors"
                    : ""
                }`}
                style={col.width ? { width: col.width } : undefined}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {renderSortIcon(col)}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading && <TableSkeleton columns={columns} compact={compact} />}

          {!loading && data.length === 0 && (
            <tr>
              <td colSpan={columns.length}>
                <EmptyState
                  icon={Inbox}
                  title={resolvedEmptyMessage}
                />
              </td>
            </tr>
          )}

          {!loading &&
            sortedData.map((row, rowIndex) => (
              <tr
                key={row._id || row.id || rowIndex}
                className={`${
                  onRowClick ? "cursor-pointer" : ""
                } ${hover ? "hover:bg-base-200/50" : ""} ${
                  striped && rowIndex % 2 === 1 ? "bg-base-200/30" : ""
                }`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`${compact ? "py-1.5" : ""}`}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
