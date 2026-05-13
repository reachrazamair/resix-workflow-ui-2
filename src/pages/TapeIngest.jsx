import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { SAMPLE_TAPE_ROWS, STRAT_STRIP } from "../data/journeyMock";

export default function TapeIngest() {
  const [toast, setToast] = useState("");
  return (
    <div className="page-content">
      <AppHeader
        title="Loan tape ingest"
        subtitle="Step 02 — raw seller tape rows land here before bid / data room (mock)."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <div className="panel">
          <h3>Upload / connect tape</h3>
          <p className="muted">Mock only — no file leaves your browser.</p>
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
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Internal loan ref</th>
                <th>UPB</th>
                <th>FICO</th>
                <th>State</th>
                <th>Note rate</th>
                <th>Tape version</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_TAPE_ROWS.map((r) => (
                <tr key={r.loanId}>
                  <td>{r.loanId}</td>
                  <td>{r.upb.toLocaleString()}</td>
                  <td>{r.fico}</td>
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
