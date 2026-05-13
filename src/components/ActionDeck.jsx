export default function ActionDeck({ actions, disabled, onAction }) {
  return (
    <div className="panel action-deck">
      <h3>What you can do (Screen 1)</h3>
      <p className="muted">
        Operations intake analyst actions from <code>resix-workflow-doc-v1.md</code>. Buttons are mock: they show the
        intent and a toast — no backend.
      </p>
      <ul className="action-list">
        {actions.map((a) => (
          <li key={a.id}>
            <div className="action-head">
              <strong>{a.title}</strong>
              <button
                type="button"
                className="primary-btn"
                disabled={disabled && a.requiresPool}
                onClick={() => onAction(a.id, a.title)}
              >
                Run
              </button>
            </div>
            <p className="action-effect">{a.effect}</p>
            <p className="action-rule">
              <em>Enabled when:</em> {a.rule}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
