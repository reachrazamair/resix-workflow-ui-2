import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { RETAIL_HIDDEN } from "../data/journeyMock";

export default function RetailBuyerShell() {
  const [mode, setMode] = useState("retail");
  const [showProof, setShowProof] = useState(false);

  return (
    <div className="page-content">
      <AppHeader
        title="Retail buyer view"
        subtitle="What a retail-facing screen might show vs hide (mock toggle)."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <div className="panel toggle-row">
          <span>View:</span>
          <button type="button" className={mode === "retail" ? "primary-btn" : "secondary-btn"} onClick={() => setMode("retail")}>
            Retail
          </button>
          <button
            type="button"
            className={mode === "institutional" ? "primary-btn" : "secondary-btn"}
            onClick={() => setMode("institutional")}
          >
            Institutional
          </button>
        </div>
        <div className="panel proof-toggle-bar">
          <label className="toggle-inline">
            <input type="checkbox" checked={showProof} onChange={() => setShowProof((v) => !v)} />
            <span>Show Walacor / trusted proof on this teaser (usually off for retail)</span>
          </label>
        </div>
        <div className={`panel retail-card ${mode === "retail" ? "retail-mode" : ""}`}>
          <h3>Pool teaser · Agency sleeve (demo)</h3>
          <p>
            Target yield band: <strong>6.8–7.4%</strong> (illustrative)
          </p>
          <p>Geography mix: CO / AZ / FL</p>
          {showProof ? (
            <p className="trust-cert-pill inline-proof">
              Walacor proof stub · hash 0x9f2c…a41 · cert WLC-TRUST-CERT-2026-1844-A41
            </p>
          ) : null}
          {mode === "retail" ? (
            <>
              <h4>Not shown to retail</h4>
              <ul className="bullet-list muted-list">
                {RETAIL_HIDDEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="muted">Institutional view would unlock loan-level drilldown + data room links (not built in this mock).</p>
          )}
        </div>
      </section>
    </div>
  );
}
