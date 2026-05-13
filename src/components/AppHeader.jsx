export default function AppHeader({ role, roles, onRoleChange, globalState, globalStates, onGlobalStateChange }) {
  return (
    <header className="top-header">
      <div>
        <p className="kicker">Resi-X workflow mock</p>
        <h2>Intake Control Tower</h2>
        <p className="muted" style={{ marginBottom: 0 }}>
          Step 01 — pool ingestion, schema checks, first-pass integrity (Walacor-ready).
        </p>
      </div>
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
          <span>Global loan state filter</span>
          <select value={globalState} onChange={(e) => onGlobalStateChange(e.target.value)}>
            {globalStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}
