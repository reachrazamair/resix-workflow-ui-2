export default function FilterBar({ filters }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <label key={filter.label} className="field">
          <span>{filter.label}</span>
          <select value={filter.value} onChange={(e) => filter.onChange(e.target.value)}>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
