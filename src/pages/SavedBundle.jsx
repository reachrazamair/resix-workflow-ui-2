import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { BUNDLE_FILES } from "../data/journeyMock";

export default function SavedBundle() {
  const [toast, setToast] = useState("");
  return (
    <div className="page-content">
      <AppHeader
        title="Saved diligence bundle"
        subtitle="What gets sealed + exportable after intake / data room (mock manifest)."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <div className="panel">
          <p className="muted">Bundle ID: RX-BUNDLE-DEMO-2026-501 · last signer: Compliance (mock)</p>
          <ul className="bundle-list">
            {BUNDLE_FILES.map((f) => (
              <li key={f.name}>
                <span>{f.name}</span>
                <span className={f.sealed ? "seal-yes" : "seal-pending"}>{f.sealed ? "Sealed" : "Pending seal"}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              setToast("[Mock] Would download ZIP + Walacor proof certificate.");
              window.setTimeout(() => setToast(""), 4000);
            }}
          >
            Export bundle (mock)
          </button>
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
