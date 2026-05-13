function StatusChip({ label, tone }) {
  const cls = tone === "good" ? "good" : tone === "warn" ? "warn" : "";
  return <span className={`status-chip ${cls}`.trim()}>{label}</span>;
}

export default function PoolTable({ columns, rows, selectedId, onSelect, highlightCoarse }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: 40 }} aria-label="Select" />
            {columns.map((c) => (
              <th key={c.key}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const highlighted = highlightCoarse && row.coarseGenre === highlightCoarse;
            const selected = row.id === selectedId;
            return (
              <tr key={row.id} className={highlighted ? "row-highlight" : undefined}>
                <td>
                  <input
                    type="radio"
                    name="poolPick"
                    checked={selected}
                    onChange={() => onSelect(row.id)}
                    aria-label={`Select pool ${row.id}`}
                  />
                </td>
                {columns.map((c) => (
                  <td key={c.key}>
                    {c.render ? c.render(row[c.key], row) : row[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { StatusChip };
