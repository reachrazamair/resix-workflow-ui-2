# workflow-app-ui-2 — Intake Control Tower (Lara mock)

Interactive **Screen 1** mock for Lara: native **dropdowns** with clear options, **pool table** with row selection, **walkthrough lens** tied to the genre Excel deliverables, and **action cards** that show what an intake analyst can do (with mock toast feedback).

This complements (does not replace) the narrative workbooks:

- `docs/lara/genre-walkthrough/resi-x-walkthrough-coarse-12-genres.xlsx`
- `docs/lara/genre-walkthrough/resi-x-walkthrough-archetypes-7.xlsx`

The older five-screen prototype remains in `code/workflow-app-ui/`. This app focuses on **step 01 only**; steps 02–05 are disabled placeholders until we build those mocks.

## Run locally

```bash
cd code/workflow-app-ui-2
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`). Use **Role** and **Global loan state** dropdowns, filter pools, pick a **walkthrough lens** to highlight the matching coarse row, select a pool with the radio column, and click **Run** on an action to see the mock API toast.

```bash
npm run build
```

## Files

| Path | Purpose |
|------|---------|
| `src/pages/IntakeControlTower.jsx` | Screen 1 layout: filters, lens, callout, stats, table, actions, toast |
| `src/data/mockPools.js` | Pool rows + lens options + same fictional `RX-*` ids as genre workbooks |
| `src/components/*` | FilterBar, PoolTable, ActionDeck, AppHeader |
