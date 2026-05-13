import { useState } from "react";
import IntakeControlTower from "./pages/IntakeControlTower";
import TapeIngest from "./pages/TapeIngest";
import CapMarketsSale from "./pages/CapMarketsSale";
import TokenLoanAsset from "./pages/TokenLoanAsset";
import TokenPoolView from "./pages/TokenPoolView";
import SavedBundle from "./pages/SavedBundle";
import RetailBuyerShell from "./pages/RetailBuyerShell";
import "./styles/app.css";

const NAV = [
  { key: "intake", step: "01", label: "Intake" },
  { key: "tape", step: "02", label: "Loan tape" },
  { key: "sale", step: "03", label: "Cap markets sale" },
  { key: "tokenLoan", step: "04", label: "Token loan" },
  { key: "tokenPool", step: "05", label: "Token pool" },
  { key: "bundle", step: "06", label: "Saved bundle" },
  { key: "retail", step: "07", label: "Retail buyer" },
];

export default function App() {
  const [activeKey, setActiveKey] = useState("intake");

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-head">
          <p className="logo-kicker">Resi-X · UI mock v2</p>
          <h1>Workflow</h1>
        </div>
        <p className="sidebar-note">
          Mock journey: tape → institutional sale → token views → sealed bundle → retail-safe teaser. No backend calls.
        </p>
        <nav className="side-nav" aria-label="Workflow steps">
          {NAV.map((s) => (
            <button
              key={s.key}
              type="button"
              className={`nav-btn ${activeKey === s.key ? "active" : ""}`}
              onClick={() => setActiveKey(s.key)}
              aria-current={activeKey === s.key ? "page" : undefined}
            >
              <span className="nav-step">{s.step}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="main-layout">
        {activeKey === "intake" ? <IntakeControlTower /> : null}
        {activeKey === "tape" ? <TapeIngest /> : null}
        {activeKey === "sale" ? <CapMarketsSale /> : null}
        {activeKey === "tokenLoan" ? <TokenLoanAsset /> : null}
        {activeKey === "tokenPool" ? <TokenPoolView /> : null}
        {activeKey === "bundle" ? <SavedBundle /> : null}
        {activeKey === "retail" ? <RetailBuyerShell /> : null}
      </main>
    </div>
  );
}
