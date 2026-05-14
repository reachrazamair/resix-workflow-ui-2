import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { CAP_MARKET_PHASES, ESCROW_CALLOUT } from "../data/journeyMock";
import { POOL_LEVEL_DOC_GROUPS, RMBS_ARTIFACT_GROUPS } from "../data/rmbsChecklistMock";

export default function CapMarketsSale() {
  const [poolOpen, setPoolOpen] = useState(true);
  const [artifactOpen, setArtifactOpen] = useState(false);

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

      <section className="accordion-stack screen-layout">
        <div className="panel accordion-panel">
          <button type="button" className="accordion-trigger" onClick={() => setPoolOpen((o) => !o)} aria-expanded={poolOpen}>
            <span>Pool-level documents (read-only labels)</span>
            <span className="accordion-chev">{poolOpen ? "−" : "+"}</span>
          </button>
          {poolOpen ? (
            <ul className="doc-li">
              {POOL_LEVEL_DOC_GROUPS[0].docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="panel accordion-panel">
          <button
            type="button"
            className="accordion-trigger"
            onClick={() => setArtifactOpen((o) => !o)}
            aria-expanded={artifactOpen}
          >
            <span>Loan collateral file — high-level groups (RMBS reference)</span>
            <span className="accordion-chev">{artifactOpen ? "−" : "+"}</span>
          </button>
          {artifactOpen ? (
            <ul className="doc-li doc-li--twocol">
              {RMBS_ARTIFACT_GROUPS.map((g) => (
                <li key={g.title}>
                  <strong>{g.title}</strong> — <span className="muted-inline">{g.examples}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </div>
  );
}
