/**
 * Mock pools aligned to genre walkthrough workbooks (coarse-12 + archetypes-7).
 * Each row includes the fictional example loan id from docs/lara/genre-walkthrough/build_genre_walkthroughs.py
 */

export const COARSE_KEYS = [
  "AgencyConforming",
  "PrimeJumbo",
  "NonQM",
  "ScratchDent",
  "NPL",
  "RPL",
  "Performing",
  "BridgeFixFlip",
  "GroundUpConstruction",
  "HELOC_Second",
  "ManufacturedHousing",
  "ReverseMortgage",
];

/** Archetype lens key -> coarse column for row highlight */
export const ARCHETYPE_TO_COARSE = {
  ConvConf: "AgencyConforming",
  PrimeJumbo: "PrimeJumbo",
  BankStmt: "NonQM",
  NPL: "NPL",
  BridgeRTL: "BridgeFixFlip",
  HELOC: "HELOC_Second",
  ReverseHECM: "ReverseMortgage",
};

export const ARCHETYPE_META = [
  { key: "ConvConf", label: "Conventional conforming", loanId: "RX-CONV-DEMO-2026-201" },
  { key: "PrimeJumbo", label: "Prime Jumbo", loanId: "RX-PJ-DEMO-2026-202" },
  { key: "BankStmt", label: "Bank Statement", loanId: "RX-BS-DEMO-2026-203" },
  { key: "NPL", label: "Non-Performing (NPL)", loanId: "RX-NPL-DEMO-2026-204" },
  { key: "BridgeRTL", label: "Bridge / RTL (Fix-and-Flip)", loanId: "RX-BR-DEMO-2026-205" },
  { key: "HELOC", label: "HELOC / Closed-End Second", loanId: "RX-HELOC-DEMO-2026-206" },
  { key: "ReverseHECM", label: "Reverse (HECM)", loanId: "RX-HECM-DEMO-2026-207" },
];

export const pools = [
  {
    id: "POOL-AGCY-DEMO-01",
    seller: "Demo Seller LLC",
    sourceType: "Seller tape",
    schemaProfile: "MISMO 3.4",
    status: "Ingested",
    missingArtifacts: 2,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "AgencyConforming",
    exampleLoanId: "RX-AGCY-DEMO-2026-101",
  },
  {
    id: "POOL-PJ-DEMO-02",
    seller: "HighTouch Capital",
    sourceType: "Whole-loan tape",
    schemaProfile: "Custom CSV",
    status: "Routed",
    missingArtifacts: 0,
    schemaErrors: 1,
    integrity: "Pending",
    coarseGenre: "PrimeJumbo",
    exampleLoanId: "RX-PJ-DEMO-2026-102",
  },
  {
    id: "POOL-NQM-DEMO-03",
    seller: "AltDoc Partners",
    sourceType: "Seller tape",
    schemaProfile: "CSV",
    status: "Ingested",
    missingArtifacts: 4,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "NonQM",
    exampleLoanId: "RX-NQM-DEMO-2026-103",
  },
  {
    id: "POOL-SD-DEMO-04",
    seller: "ScratchBid Co",
    sourceType: "Tape + scans",
    schemaProfile: "CSV",
    status: "Ingested",
    missingArtifacts: 6,
    schemaErrors: 2,
    integrity: "Pending",
    coarseGenre: "ScratchDent",
    exampleLoanId: "RX-SD-DEMO-2026-104",
  },
  {
    id: "POOL-NPL-DEMO-05",
    seller: "Distressed Desk LLC",
    sourceType: "Servicing export",
    schemaProfile: "CSV",
    status: "Ingested",
    missingArtifacts: 1,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "NPL",
    exampleLoanId: "RX-NPL-DEMO-2026-105",
  },
  {
    id: "POOL-RPL-DEMO-06",
    seller: "ModCo Servicing",
    sourceType: "Servicing export",
    schemaProfile: "MISMO 3.4",
    status: "Routed",
    missingArtifacts: 0,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "RPL",
    exampleLoanId: "RX-RPL-DEMO-2026-106",
  },
  {
    id: "POOL-PERF-DEMO-07",
    seller: "StableFlow Funding",
    sourceType: "Seller tape",
    schemaProfile: "MISMO 3.4",
    status: "Routed",
    missingArtifacts: 0,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "Performing",
    exampleLoanId: "RX-PERF-DEMO-2026-107",
  },
  {
    id: "POOL-BR-DEMO-08",
    seller: "Transitional Credit",
    sourceType: "Builder package",
    schemaProfile: "Custom CSV",
    status: "Ingested",
    missingArtifacts: 3,
    schemaErrors: 0,
    integrity: "Pending",
    coarseGenre: "BridgeFixFlip",
    exampleLoanId: "RX-BR-DEMO-2026-108",
  },
  {
    id: "POOL-GUC-DEMO-09",
    seller: "GroundUp RE",
    sourceType: "Construction draw tape",
    schemaProfile: "CSV",
    status: "Ingested",
    missingArtifacts: 2,
    schemaErrors: 1,
    integrity: "Hash Confirmed",
    coarseGenre: "GroundUpConstruction",
    exampleLoanId: "RX-GUC-DEMO-2026-109",
  },
  {
    id: "POOL-2LIEN-DEMO-10",
    seller: "SecondLien Markets",
    sourceType: "Seller tape",
    schemaProfile: "MISMO 3.4",
    status: "Ingested",
    missingArtifacts: 1,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "HELOC_Second",
    exampleLoanId: "RX-HELOC-DEMO-2026-110",
  },
  {
    id: "POOL-MH-DEMO-11",
    seller: "Manufactured Homes Inc",
    sourceType: "Tape + titling",
    schemaProfile: "CSV",
    status: "Ingested",
    missingArtifacts: 3,
    schemaErrors: 0,
    integrity: "Pending",
    coarseGenre: "ManufacturedHousing",
    exampleLoanId: "RX-MH-DEMO-2026-111",
  },
  {
    id: "POOL-HECM-DEMO-12",
    seller: "Senior Lien Capital",
    sourceType: "HECM case file",
    schemaProfile: "Custom CSV",
    status: "Ingested",
    missingArtifacts: 2,
    schemaErrors: 0,
    integrity: "Hash Confirmed",
    coarseGenre: "ReverseMortgage",
    exampleLoanId: "RX-HECM-DEMO-2026-112",
  },
];

export const LENS_ALL = "all";

export function buildLensOptions() {
  const coarse = COARSE_KEYS.map((k) => {
    const p = pools.find((x) => x.coarseGenre === k);
    return {
      value: `coarse:${k}`,
      label: `Coarse workbook — ${k} (${p?.exampleLoanId ?? ""})`,
    };
  });
  const arch = ARCHETYPE_META.map((a) => ({
    value: `arch:${a.key}`,
    label: `Archetypes workbook — ${a.label} (${a.loanId})`,
  }));
  return [{ value: LENS_ALL, label: "All pools (no walkthrough lens)" }, ...coarse, ...arch];
}

/** @returns {string|null} coarse genre to highlight, or null for none/all */
export function lensToHighlightCoarse(lens) {
  if (!lens || lens === LENS_ALL) return null;
  if (lens.startsWith("coarse:")) return lens.slice("coarse:".length);
  if (lens.startsWith("arch:")) {
    const key = lens.slice("arch:".length);
    return ARCHETYPE_TO_COARSE[key] ?? null;
  }
  return null;
}

export function lensCalloutText(lens) {
  if (!lens || lens === LENS_ALL) {
    return "Select a walkthrough lens to mirror the Excel genre workbooks: each coarse option maps to `resi-x-walkthrough-coarse-12-genres.xlsx`; each archetype maps to `resi-x-walkthrough-archetypes-7.xlsx`. Highlighting shows which pool row matches that lens.";
  }
  if (lens.startsWith("coarse:")) {
    const k = lens.slice("coarse:".length);
    return `Lens: ${k} — open tabs N_${k} and R_${k} in resi-x-walkthrough-coarse-12-genres.xlsx for the full phase narrative + embedded v4 artifact grid.`;
  }
  const key = lens.slice("arch:".length);
  const meta = ARCHETYPE_META.find((a) => a.key === key);
  return `Lens: Archetype ${meta?.label ?? key} — see resi-x-walkthrough-archetypes-7.xlsx (INDEX + N_* tabs) for the same fictional loan id ${meta?.loanId ?? ""}.`;
}

export const roles = [
  "Operations Analyst",
  "Data Ops Specialist",
  "Risk Reviewer",
  "Compliance Reviewer",
  "Capital Markets",
];

/** Machine `value` stays stable for filters; `label` uses desk-friendly wording in the UI. */
export const globalStateOptions = [
  { value: "All States", label: "All states" },
  { value: "Ingested", label: "Ingested" },
  { value: "Reconstructed", label: "File built (tape + collateral linked)" },
  { value: "Scored", label: "Scored (defects tagged)" },
  { value: "ProofAnchored", label: "Proof anchored (Walacor)" },
  { value: "DiligenceOpen", label: "Diligence open" },
  { value: "TokenEligible", label: "Token / distribution eligible" },
];
