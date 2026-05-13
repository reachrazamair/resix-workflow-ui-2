# workflow-app-ui-2 — Lara journey mock (tape → sale → token → retail)

Interactive **Vite + React** mock aligned with Lara’s feedback: **intake** plus a **sidebar journey** for loan tape, institutional **capital-markets sale** storyboard, **tokenized loan / pool** illustrations, a **saved diligence bundle** manifest, and a **retail vs institutional** toggle. Desk-friendly copy (no “canonical / reconstruct” on visible surfaces); internal filter values such as `Reconstructed` stay stable for pool logic.

This complements (does not replace) the narrative workbooks:

- `docs/lara/genre-walkthrough/resi-x-walkthrough-coarse-12-genres.xlsx`
- `docs/lara/genre-walkthrough/resi-x-walkthrough-archetypes-7.xlsx`

The older five-screen prototype remains in `code/workflow-app-ui/`.

## Run locally

```bash
cd code/workflow-app-ui-2
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`). Use the **sidebar** to switch steps. On **Intake**, use **Role** and **Loan lifecycle filter** dropdowns, filter pools, pick a **walkthrough lens**, select a pool with the radio column, and click **Run** on an action to see the mock API toast.

```bash
npm run lint
npm run build
```

## Sidebar steps (mock)

| Step | Component | Intent |
|------|-----------|--------|
| 01 Intake | `IntakeControlTower.jsx` | Tapes land, QC, integrity |
| 02 Loan tape | `TapeIngest.jsx` | Tape rows, pre-bid strat strip |
| 03 Cap markets sale | `CapMarketsSale.jsx` | Ten-phase cards + escrow callout |
| 04 Token loan | `TokenLoanAsset.jsx` | Single-asset token card; hashed vs shown |
| 05 Token pool | `TokenPoolView.jsx` | Pool token, tranche strip |
| 06 Saved bundle | `SavedBundle.jsx` | Diligence bundle manifest + export toast |
| 07 Retail buyer | `RetailBuyerShell.jsx` | Retail-safe vs institutional toggle |

## Files

| Path | Purpose |
|------|---------|
| `src/App.jsx` | Sidebar navigation + active page |
| `src/pages/IntakeControlTower.jsx` | Screen 1: filters, lens, callout, stats, table, actions, toast |
| `src/pages/TapeIngest.jsx` | Loan tape table + strat strip + upload toast |
| `src/pages/CapMarketsSale.jsx` | Ten-phase sale cards + escrow callout |
| `src/pages/TokenLoanAsset.jsx` | Tokenized single loan; hashed vs displayed |
| `src/pages/TokenPoolView.jsx` | Pool token + tranche strip |
| `src/pages/SavedBundle.jsx` | Saved diligence bundle manifest |
| `src/pages/RetailBuyerShell.jsx` | Retail vs institutional toggle |
| `src/data/mockPools.js` | Pool rows + lens options + `globalStateOptions` (value/label) |
| `src/data/journeyMock.js` | Static rows / phases / copy for journey pages |
| `src/components/*` | FilterBar, PoolTable, ActionDeck, AppHeader |
