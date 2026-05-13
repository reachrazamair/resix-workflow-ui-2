import AppHeader from "../components/AppHeader";
import { TOKEN_LOAN } from "../data/journeyMock";

export default function TokenLoanAsset() {
  return (
    <div className="page-content">
      <AppHeader
        title="Tokenized loan (single asset)"
        subtitle="Illustration only — not a securities offering. Shows what could surface in-app."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <div className="panel token-card">
          <div className="token-head">
            <div>
              <h3>{TOKEN_LOAN.symbol}</h3>
              <p className="muted">Backed by loan ref {TOKEN_LOAN.poolRef}</p>
            </div>
            <span className="walacor-pill">{TOKEN_LOAN.walacorSeal}</span>
          </div>
          <dl className="token-dl">
            <dt>Exposure</dt>
            <dd>{TOKEN_LOAN.upbDisplay}</dd>
            <dt>LTV (band)</dt>
            <dd>{TOKEN_LOAN.ltvBand}</dd>
          </dl>
          <div className="split-two">
            <div>
              <h4>Shown (retail-safe bands)</h4>
              <ul className="bullet-list">
                {TOKEN_LOAN.shownRetailSafe.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Hashed / not displayed</h4>
              <ul className="bullet-list muted-list">
                {TOKEN_LOAN.hashedNotShown.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
