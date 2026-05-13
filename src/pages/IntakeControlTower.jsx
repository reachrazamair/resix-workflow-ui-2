import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import PoolTable, { StatusChip } from "../components/PoolTable";
import ActionDeck from "../components/ActionDeck";
import AppHeader from "../components/AppHeader";
import {
  buildLensOptions,
  globalStates,
  lensCalloutText,
  lensToHighlightCoarse,
  LENS_ALL,
  pools as allPools,
  roles,
} from "../data/mockPools";

const INTAKE_ACTIONS = [
  {
    id: "accept",
    title: "Accept ingestion batch",
    effect: "Marks selected pool batch as accepted for downstream reconstruction queue.",
    rule: "A pool row must be selected (radio).",
    requiresPool: true,
  },
  {
    id: "request",
    title: "Request missing documents",
    effect: "Opens seller request template (email / SFTP stub) listing missing artifact types.",
    rule: "A pool row must be selected.",
    requiresPool: true,
  },
  {
    id: "route",
    title: "Route to reconstruction",
    effect: "Hands off canonical intake package to Screen 2 (Loan Reconstruction Workspace) when ready.",
    rule: "A pool row must be selected; integrity should be Hash Confirmed (soft check in mock).",
    requiresPool: true,
  },
];

function intakeStatesFilter(globalState, rows) {
  if (globalState === "All States") return rows;
  const intakeStates = new Set(["Ingested", "Reconstructed", "Scored", "ProofAnchored"]);
  if (!intakeStates.has(globalState)) return rows;
  return rows.filter((r) => r.status === globalState);
}

export default function IntakeControlTower() {
  const [role, setRole] = useState(roles[0]);
  const [globalState, setGlobalState] = useState(globalStates[0]);
  const [sourceType, setSourceType] = useState("All");
  const [schemaProfile, setSchemaProfile] = useState("All");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("Last 7 days");
  const [lens, setLens] = useState(LENS_ALL);
  const [selectedId, setSelectedId] = useState(allPools[0]?.id ?? "");
  const [toast, setToast] = useState("");

  const options = useMemo(() => {
    const scoped = intakeStatesFilter(globalState, allPools);
    return {
      sourceType: ["All", ...new Set(scoped.map((p) => p.sourceType))],
      schemaProfile: ["All", ...new Set(scoped.map((p) => p.schemaProfile))],
      status: ["All", ...new Set(scoped.map((p) => p.status))],
    };
  }, [globalState]);

  const filtered = useMemo(() => {
    const scoped = intakeStatesFilter(globalState, allPools);
    return scoped.filter(
      (p) =>
        (sourceType === "All" || p.sourceType === sourceType) &&
        (schemaProfile === "All" || p.schemaProfile === schemaProfile) &&
        (status === "All" || p.status === status)
    );
  }, [globalState, sourceType, schemaProfile, status]);

  const displayPoolId = useMemo(() => {
    if (filtered.some((p) => p.id === selectedId)) return selectedId;
    return filtered[0]?.id ?? "";
  }, [filtered, selectedId]);

  const highlightCoarse = lensToHighlightCoarse(lens);

  const lensOptions = useMemo(() => buildLensOptions().map((o) => o.label), []);
  const lensLabelToValue = useMemo(() => {
    const opts = buildLensOptions();
    return Object.fromEntries(opts.map((o) => [o.label, o.value]));
  }, []);

  const currentLensLabel = useMemo(() => {
    const opts = buildLensOptions();
    return opts.find((o) => o.value === lens)?.label ?? lensOptions[0];
  }, [lens, lensOptions]);

  const columns = [
    { key: "id", label: "Pool ID" },
    { key: "seller", label: "Seller" },
    { key: "exampleLoanId", label: "Example loan (workbook)" },
    { key: "coarseGenre", label: "Coarse genre" },
    { key: "sourceType", label: "Source type" },
    { key: "schemaProfile", label: "Schema profile" },
    {
      key: "status",
      label: "Ingestion status",
      render: (v) => <StatusChip label={v} tone={v === "Routed" ? "good" : "neutral"} />,
    },
    { key: "missingArtifacts", label: "Missing artifacts" },
    { key: "schemaErrors", label: "Schema errors" },
    {
      key: "integrity",
      label: "Integrity",
      render: (v) => <StatusChip label={v} tone={v === "Hash Confirmed" ? "good" : "warn"} />,
    },
  ];

  function showToast(msg) {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 5200);
  }

  function onAction(actionId, title) {
    const pool = filtered.find((p) => p.id === displayPoolId);
    if (!pool) {
      showToast("Select a pool first.");
      return;
    }
    if (actionId === "route" && pool.integrity !== "Hash Confirmed") {
      showToast(`[Mock] Route blocked: integrity is "${pool.integrity}" — resolve or override in a real app.`);
      return;
    }
    showToast(`[Mock API] ${title} for pool ${pool.id} (${pool.exampleLoanId}). Would POST /intake/v1/...`);
  }

  return (
    <div className="page-content">
      <AppHeader
        role={role}
        roles={roles}
        onRoleChange={setRole}
        globalState={globalState}
        globalStates={globalStates}
        onGlobalStateChange={setGlobalState}
      />

      <section className="screen-layout" style={{ marginTop: "0.9rem" }}>
        <FilterBar
          filters={[
            { label: "Source type", value: sourceType, options: options.sourceType, onChange: setSourceType },
            { label: "Schema profile", value: schemaProfile, options: options.schemaProfile, onChange: setSchemaProfile },
            { label: "Ingestion status", value: status, options: options.status, onChange: setStatus },
            {
              label: "Date range",
              value: dateRange,
              options: ["Last 24 hours", "Last 7 days", "Last 30 days"],
              onChange: setDateRange,
            },
          ]}
        />

        <label className="field lens-field">
          <span>Demo walkthrough lens (ties to Excel genre workbooks)</span>
          <select
            value={currentLensLabel}
            onChange={(e) => setLens(lensLabelToValue[e.target.value] ?? LENS_ALL)}
          >
            {lensOptions.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <aside className="callout" role="note">
          <strong>Walkthrough note</strong>
          <p className="callout-body">{lensCalloutText(lens)}</p>
        </aside>

        <div className="stats-grid">
          <article className="stat-card">
            <span>Pools in view</span>
            <strong>{filtered.length}</strong>
          </article>
          <article className="stat-card">
            <span>Missing artifacts (sum)</span>
            <strong>{filtered.reduce((s, r) => s + r.missingArtifacts, 0)}</strong>
          </article>
          <article className="stat-card">
            <span>Schema errors (sum)</span>
            <strong>{filtered.reduce((s, r) => s + r.schemaErrors, 0)}</strong>
          </article>
          <article className="stat-card">
            <span>Date window</span>
            <strong>{dateRange}</strong>
          </article>
        </div>

        <PoolTable
          columns={columns}
          rows={filtered}
          selectedId={displayPoolId}
          onSelect={setSelectedId}
          highlightCoarse={highlightCoarse}
        />

        <ActionDeck
          actions={INTAKE_ACTIONS}
          disabled={!displayPoolId || !filtered.some((p) => p.id === displayPoolId)}
          onAction={onAction}
        />

        {toast ? (
          <div className="toast" role="status">
            {toast}
          </div>
        ) : null}
      </section>
    </div>
  );
}
