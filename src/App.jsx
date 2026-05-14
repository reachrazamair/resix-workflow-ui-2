import { useMemo, useState } from "react";
import IntakeControlTower from "./pages/IntakeControlTower";
import TapeIngest from "./pages/TapeIngest";
import CapMarketsSale from "./pages/CapMarketsSale";
import TokenLoanAsset from "./pages/TokenLoanAsset";
import TokenPoolView from "./pages/TokenPoolView";
import SavedBundle from "./pages/SavedBundle";
import RetailBuyerShell from "./pages/RetailBuyerShell";
import LiquidityRoutingDesk from "./pages/LiquidityRoutingDesk";
import { deskPersonas } from "./data/mockPools";
import "./styles/app.css";

const NAV_BASE = [
  { key: "intake", step: "01", label: "Intake" },
  { key: "tape", step: "02", label: "Loan tape" },
  { key: "sale", step: "03", label: "Cap markets sale" },
  { key: "tokenLoan", step: "04", label: "Token loan" },
  { key: "tokenPool", step: "05", label: "Token pool" },
  { key: "bundle", step: "06", label: "Saved bundle" },
  { key: "retail", step: "07", label: "Retail buyer" },
];

const ROUTING_NAV = { key: "routing", step: "08", label: "Routing desk" };

export default function App() {
  const [deskPersona, setDeskPersona] = useState("Capital Markets");
  const [activeKey, setActiveKey] = useState("intake");

  const onDeskPersonaChange = (next) => {
    setDeskPersona(next);
    if (next === "Capital Markets" && activeKey === "routing") {
      setActiveKey("intake");
    }
  };

  const navItems = useMemo(() => {
    if (deskPersona === "Desk Admin") return [...NAV_BASE, ROUTING_NAV];
    return NAV_BASE;
  }, [deskPersona]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup" aria-label="Resi-X">
          <span className="brand-mark">Resi-X</span>
          <span className="brand-sub">Residential Loan Exchange</span>
        </div>
        <div className="sidebar-head">
          <p className="logo-kicker">Desk workflow · mock v2</p>
          <h1>Console</h1>
        </div>
        <label className="persona-field">
          <span>Viewing as</span>
          <select value={deskPersona} onChange={(e) => onDeskPersonaChange(e.target.value)} className="persona-select">
            {deskPersonas.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <p className="sidebar-note">
          Tape → sale → token → bundle → retail. Routing desk appears only for Desk Admin. No backend calls.
        </p>
        <nav className="side-nav" aria-label="Workflow steps">
          {navItems.map((s) => (
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
        {activeKey === "routing" ? <LiquidityRoutingDesk /> : null}
      </main>
    </div>
  );
}
