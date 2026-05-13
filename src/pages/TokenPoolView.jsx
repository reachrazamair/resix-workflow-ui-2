import AppHeader from "../components/AppHeader";
import { TOKEN_POOL } from "../data/journeyMock";

export default function TokenPoolView() {
  return (
    <div className="page-content">
      <AppHeader
        title="Tokenized pool"
        subtitle="Pool-level instrument — tranches are illustrative."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <div className="panel token-card">
          <h3>{TOKEN_POOL.name}</h3>
          <p className="muted">Pool ID {TOKEN_POOL.poolId}</p>
          <p>
            <strong>Subscribed</strong> {TOKEN_POOL.subscribed} (mock)
          </p>
          <ul className="tranche-list">
            {TOKEN_POOL.tranches.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong> — {t.target}
                <span className="tranche-badge">{t.badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
