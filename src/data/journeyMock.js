/** Static copy for journey mocks (tape → sale → token → retail). */

export const SAMPLE_TAPE_ROWS = [
  { loanId: "RX-AGCY-DEMO-2026-101", upb: 412000, fico: 742, state: "CO", noteRate: "6.375%", sellerField: "Tape v3" },
  { loanId: "RX-AGCY-DEMO-2026-101b", upb: 355000, fico: 718, state: "AZ", noteRate: "6.50%", sellerField: "Tape v3" },
  { loanId: "RX-NQM-DEMO-2026-103", upb: 520000, fico: 698, state: "FL", noteRate: "7.125%", sellerField: "Tape v3" },
];

export const STRAT_STRIP = [
  { label: "WA avg FICO", value: "726" },
  { label: "WA LTV", value: "79%" },
  { label: "Non-QM share", value: "33%" },
  { label: "Geography", value: "AZ / CO / FL" },
];

export const CAP_MARKET_PHASES = [
  { n: "1", title: "Aggregation & boarding", detail: "Loans rolled into a pool / tape; LOS + servicing exports land in one place." },
  { n: "2", title: "Data scrub & bid tape", detail: "QC, strat, exceptions removed; final bid tape + collateral summary." },
  { n: "3", title: "Diligence package", detail: "Data room: credit files, title, servicing comments, trailing doc schedule." },
  { n: "4", title: "Buyer outreach & bids", detail: "NDA → teaser → bid tape → Q&A → indicative / final bids." },
  { n: "5", title: "Buyer diligence", detail: "Sampled re-underwrite; tape vs collateral file is where discounts appear." },
  { n: "6", title: "Pricing & negotiation", detail: "Yield, holdbacks, kick rights, servicing transfer timing vs settlement." },
  { n: "7", title: "Trade execution", detail: "MLPA / confirmations, assignments, bailee letters, custodian notified." },
  { n: "8", title: "Collateral & custody", detail: "Note / endorsements / custodian certification before wire." },
  { n: "9", title: "Settlement & funding", detail: "Buyer wires; seller transfers ownership + data + servicing (as agreed)." },
  { n: "10", title: "Post-sale surveillance", detail: "EPD, repurchase, missing docs — years of monitoring." },
];

export const TOKEN_LOAN = {
  symbol: "rXL-AGCY-101",
  poolRef: "POOL-AGCY-DEMO-01",
  upbDisplay: "$412k sleeve",
  ltvBand: "75–82%",
  walacorSeal: "Walacor Certified · sealed bundle hash 0x9f2c…a41",
  hashedNotShown: ["Full SSN", "Full street address", "1003 PDF bytes", "Servicer borrower contact"],
  shownRetailSafe: ["State", "FICO band", "LTV band", "Note rate band", "Pool ID"],
};

export const TOKEN_POOL = {
  poolId: "POOL-AGCY-DEMO-01-T",
  name: "Resi-X Agency sleeve · demo",
  subscribed: "68%",
  tranches: [
    { name: "Senior", target: "72% of cash flow", badge: "Walacor pool root" },
    { name: "Sub", target: "Mezz risk sleeve", badge: "Subscribed" },
  ],
};

export const BUNDLE_FILES = [
  { name: "bid_tape_v4.csv", sealed: true },
  { name: "collateral_manifest.pdf", sealed: true },
  { name: "exceptions_schedule.xlsx", sealed: true },
  { name: "custodian_ack_letter.pdf", sealed: false },
];

export const RETAIL_HIDDEN = [
  "Borrower name",
  "Full address",
  "Account numbers",
  "1003 / tax return images",
  "Servicer direct contact",
];

export const ESCROW_CALLOUT =
  "Institutional pattern (deal-specific): good-faith / bid deposit into escrow before final bid; holdbacks at settlement; release tied to conditions precedent in purchase docs — not legal advice; confirm with counsel.";
