import { useMemo, useState } from "react";
import AppHeader from "../components/AppHeader";
import { pools } from "../data/mockPools";

const emptyRoute = () => ({ p2p: false, rated: false, unrated: false, retail: false });

export default function LiquidityRoutingDesk() {
  const rows = useMemo(
    () =>
      pools.slice(0, 6).map((p) => ({
        poolId: p.id,
        loanId: p.exampleLoanId,
        seller: p.seller,
        coarse: p.coarseGenre,
      })),
    []
  );

  const [routes, setRoutes] = useState(() => {
    const init = {};
    rows.forEach((r) => {
      init[r.loanId] = emptyRoute();
    });
    return init;
  });

  const [toast, setToast] = useState("");

  const toggle = (loanId, key) => {
    setRoutes((prev) => ({
      ...prev,
      [loanId]: { ...prev[loanId], [key]: !prev[loanId][key] },
    }));
  };

  const queueAll = () => {
    const lines = rows
      .filter((r) => {
        const x = routes[r.loanId];
        return x.p2p || x.rated || x.unrated || x.retail;
      })
      .map((r) => {
        const x = routes[r.loanId];
        const lanes = [
          x.p2p && "P2P",
          x.rated && "Sec (rated)",
          x.unrated && "Sec (unrated)",
          x.retail && "Retail token",
        ].filter(Boolean);
        return `${r.loanId}: ${lanes.join(", ")}`;
      });
    setToast(
      lines.length
        ? `[Mock] Queued workflows:\n${lines.join("\n")}`
        : "[Mock] Select at least one lane per loan before queueing."
    );
    window.setTimeout(() => setToast(""), 5500);
  };

  return (
    <div className="page-content">
      <AppHeader
        title="Liquidity routing desk"
        subtitle="Desk Admin only — assign illustrative loans to outbound lanes (mock). Capital Markets persona does not see this step."
        showGlobalFilters={false}
      />
      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <aside className="callout design-paths-callout" role="note">
          <strong>Design Paths (v1.0)</strong>
          <p className="callout-body">
            Horizon + Resi-X <strong>demo</strong> today emphasizes the tokenization / integrity story for consortium and
            fundraising. A full <strong>P2P marketplace</strong> and some distribution rails are <strong>separate builds</strong> (or
            negotiated scope with the demo vendor). This screen is a planning mock — checkboxes do not execute real trades.
          </p>
        </aside>

        <div className="panel">
          <div className="routing-toolbar">
            <p className="muted" style={{ margin: 0 }}>
              Reference collateral taxonomy: <code className="inline-code">docs/lara/Gmail - RMBS Workflow…pdf</code>
            </p>
            <button type="button" className="primary-btn" onClick={queueAll}>
              Queue selected (mock)
            </button>
          </div>
          <div className="table-wrap table-wrap--dense">
            <table className="data-table data-table--dense data-table--routing">
              <thead>
                <tr>
                  <th>Loan ref</th>
                  <th>Pool</th>
                  <th>Seller</th>
                  <th>Program</th>
                  <th className="th-center">P2P</th>
                  <th className="th-center">Sec rated</th>
                  <th className="th-center">Sec unrated</th>
                  <th className="th-center">Retail token</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const rt = routes[r.loanId] ?? emptyRoute();
                  return (
                    <tr key={r.loanId}>
                      <td className="td-mono">{r.loanId}</td>
                      <td className="td-mono">{r.poolId}</td>
                      <td>{r.seller}</td>
                      <td>{r.coarse}</td>
                      {["p2p", "rated", "unrated", "retail"].map((k) => (
                        <td key={k} className="td-center">
                          <input
                            type="checkbox"
                            checked={rt[k]}
                            onChange={() => toggle(r.loanId, k)}
                            aria-label={`${k} for ${r.loanId}`}
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {toast ? (
          <div className="toast toast--multiline" role="status">
            {toast}
          </div>
        ) : null}
      </section>
    </div>
  );
}
