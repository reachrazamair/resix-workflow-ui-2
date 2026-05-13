import AppHeader from "../components/AppHeader";
import { CAP_MARKET_PHASES, ESCROW_CALLOUT } from "../data/journeyMock";

export default function CapMarketsSale() {
  return (
    <div className="page-content">
      <AppHeader
        title="Capital markets — tape to trade"
        subtitle="Whole-loan / tape sale arc (institutional). Mock storyboard — align with counsel for real docs."
        showGlobalFilters={false}
      />
      <section className="journey-two-col" style={{ marginTop: "0.9rem" }}>
        <aside className="callout escrow-callout" role="note">
          <strong>Escrow / good-faith money</strong>
          <p className="callout-body">{ESCROW_CALLOUT}</p>
        </aside>
        <div className="phase-grid">
          {CAP_MARKET_PHASES.map((p) => (
            <article key={p.n} className="phase-card">
              <span className="phase-num">{p.n}</span>
              <h4>{p.title}</h4>
              <p>{p.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
