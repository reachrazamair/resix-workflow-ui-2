/** Curated from Lara's RMBS artifact mapping (desk reference PDF) — mock UI only. */

export const TAPE_PREP_STEPS = [
  {
    id: "prep",
    title: "Prep",
    items: [
      "Loan tape (loan-level fields aligned to data dictionary)",
      "Data dictionary + field lineage notes",
      "Strat tables (FICO, LTV, geography, product mix)",
      "Seller representations / exceptions schedule (if any)",
    ],
  },
  {
    id: "validate",
    title: "Validate",
    items: [
      "Tape vs collateral file spot-check (sample loans)",
      "Servicing tape slice reconciled to boarding file",
      "Missing-doc list cleared or flagged for data room",
    ],
  },
  {
    id: "upload",
    title: "Upload / handoff",
    items: [
      "Encrypted file drop or API ingest (mock)",
      "Internal integrity hash at boundary (Walacor-ready)",
      "Route to diligence / bid desk",
    ],
  },
];

export const POOL_LEVEL_DOC_GROUPS = [
  {
    title: "Pool-level (securitization context)",
    docs: [
      "Loan tape (master dataset)",
      "Data dictionary",
      "Stratification tables",
      "Due diligence reports (third-party)",
      "Exception reports / custodian exception report",
      "Servicing agreement",
      "PSA (Pooling & Servicing Agreement)",
      "Trust agreement / waterfall model",
      "Offering memorandum",
      "Rating agency package",
      "Tax opinions (REMIC)",
    ],
  },
];

export const RMBS_ARTIFACT_GROUPS = [
  { title: "Borrower identity & compliance", examples: "ID, OFAC, 4506-C, CD, fraud reports" },
  { title: "Income & assets", examples: "W-2 / bank statements / DSCR rent roll — varies by program" },
  { title: "Credit & property", examples: "Tri-merge, appraisal + UAD, title, flood cert" },
  { title: "Mortgage legal", examples: "Note, allonges, DOT, assignments, bailee, custodial cert" },
  { title: "Servicing transfer", examples: "Payment history, mods, boarding file" },
];
