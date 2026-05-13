export default function AppHeader({
  title,
  subtitle,
  role,
  roles,
  onRoleChange,
  globalState,
  globalStateOptions,
  onGlobalStateChange,
  showGlobalFilters = true,
}) {
  return (
    <header className="top-header">
      <div>
        <p className="kicker">Resi-X workflow mock</p>
        <h2>{title}</h2>
        {subtitle ? (
          <p className="muted" style={{ marginBottom: 0 }}>
            {subtitle}
          </p>
        ) : null}
      </div>
      {showGlobalFilters && globalStateOptions && onGlobalStateChange ? (
        <div className="filter-bar header-controls">
          <label className="field">
            <span>Role (perspective)</span>
            <select value={role} onChange={(e) => onRoleChange(e.target.value)}>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Loan lifecycle filter</span>
            <select value={globalState} onChange={(e) => onGlobalStateChange(e.target.value)}>
              {globalStateOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}
    </header>
  );
}
