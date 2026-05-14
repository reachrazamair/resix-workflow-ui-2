import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { SAMPLE_TAPE_ROWS, STRAT_STRIP } from "../data/journeyMock";
import { TAPE_PREP_STEPS } from "../data/rmbsChecklistMock";

export default function TapeIngest() {
  const [toast, setToast] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [checked, setChecked] = useState(() => {
    const o = {};
    TAPE_PREP_STEPS.forEach((s) => {
      s.items.forEach((_, i) => {
        o[`${s.id}-${i}`] = false;
      });
    });
    return o;
  });

  const toggleItem = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allInStepDone = (step) => step.items.every((_, i) => checked[`${step.id}-${i}`]);

  return (
    <div className="page-content">
      <AppHeader
        title="Loan tape — capital markets prep"
        subtitle="Step 02 — checklist before upload (RMBS desk reference, mock)."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <nav className="stepper" aria-label="Tape workflow steps">
          {TAPE_PREP_STEPS.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`stepper-step ${idx === stepIndex ? "active" : ""} ${allInStepDone(s) ? "done" : ""}`}
              onClick={() => setStepIndex(idx)}
            >
              <span className="stepper-num">{idx + 1}</span>
              <span className="stepper-label">{s.title}</span>
            </button>
          ))}
        </nav>

        <div className="panel">
          <h3>{TAPE_PREP_STEPS[stepIndex].title}</h3>
          <ul className="checklist">
            {TAPE_PREP_STEPS[stepIndex].items.map((item, i) => {
              const key = `${TAPE_PREP_STEPS[stepIndex].id}-${i}`;
              return (
                <li key={key}>
                  <label className="checklist-row">
                    <input type="checkbox" checked={checked[key]} onChange={() => toggleItem(key)} />
                    <span>{item}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="tape-actions">
            <button
              type="button"
              className="secondary-btn"
              disabled={stepIndex === 0}
              onClick={() => setStepIndex((x) => Math.max(0, x - 1))}
            >
              Back
            </button>
            <button
              type="button"
              className="secondary-btn"
              disabled={stepIndex >= TAPE_PREP_STEPS.length - 1}
              onClick={() => setStepIndex((x) => Math.min(TAPE_PREP_STEPS.length - 1, x + 1))}
            >
              Next
            </button>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setToast("[Mock] Would POST multipart tape + manifest to ingestion API.");
                window.setTimeout(() => setToast(""), 4000);
              }}
            >
              Simulate tape upload
            </button>
          </div>
        </div>

        <div className="table-wrap table-wrap--dense">
          <table className="data-table data-table--dense">
            <thead>
              <tr>
                <th>Internal loan ref</th>
                <th className="th-num">UPB</th>
                <th className="th-num">FICO</th>
                <th>State</th>
                <th>Note rate</th>
                <th>Tape version</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_TAPE_ROWS.map((r) => (
                <tr key={r.loanId}>
                  <td className="td-mono">{r.loanId}</td>
                  <td className="td-num">{r.upb.toLocaleString()}</td>
                  <td className="td-num">{r.fico}</td>
                  <td>{r.state}</td>
                  <td>{r.noteRate}</td>
                  <td>{r.sellerField}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stats-grid strat-strip">
          {STRAT_STRIP.map((s) => (
            <article key={s.label} className="stat-card">
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </article>
          ))}
        </div>
        {toast ? (
          <div className="toast" role="status">
            {toast}
          </div>
        ) : null}
      </section>
    </div>
  );
}
