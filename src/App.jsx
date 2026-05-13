import IntakeControlTower from "./pages/IntakeControlTower";
import "./styles/app.css";

const steps = [
  { step: "01", label: "Intake Control Tower", active: true },
  { step: "02", label: "Loan Reconstruction", active: false },
  { step: "03", label: "Defect and Cure", active: false },
  { step: "04", label: "Proof chain", active: false },
  { step: "05", label: "Buyer diligence", active: false },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-head">
          <p className="logo-kicker">Resi-X · UI mock v2</p>
          <h1>Workflow</h1>
        </div>
        <p className="sidebar-note">Steps 02–05 are placeholders for future mocks. Lara asked to start with Screen 1.</p>
        <nav className="side-nav" aria-label="Workflow steps">
          {steps.map((s) => (
            <button
              key={s.step}
              type="button"
              className={`nav-btn ${s.active ? "active" : "nav-btn-disabled"}`}
              disabled={!s.active}
              aria-current={s.active ? "page" : undefined}
            >
              <span className="nav-step">{s.step}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="main-layout">
        <IntakeControlTower />
      </main>
    </div>
  );
}
