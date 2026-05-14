# workflow-app-ui-2 — Lara journey mock (tape → sale → token → retail)

Interactive **Vite + React** mock aligned with Lara’s feedback: **intake** plus a **sidebar journey** for loan tape, institutional **capital-markets sale** storyboard, **tokenized loan / pool** illustrations, a **saved diligence bundle** manifest, and **retail vs institutional** views. Desk-friendly copy (no “canonical / reconstruct” on visible surfaces); internal filter values such as `Reconstructed` stay stable for pool logic.

**Desk persona:** sidebar **Viewing as** selector — **Capital Markets** (default) or **Desk Admin**. **Routing desk** (step 08) appears only for **Desk Admin** (outbound lane checkboxes; Design Paths disclaimer). **IBM Plex** typography and denser tables aim for a trading-terminal feel.

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
| 02 Loan tape | `TapeIngest.jsx` | RMBS-style prep stepper + checklist + tape table + strat strip |
| 03 Cap markets sale | `CapMarketsSale.jsx` | Ten-phase cards + escrow + pool / artifact accordions |
| 04 Token loan | `TokenLoanAsset.jsx` | Single-asset card; optional **show / hide** integrity proof |
| 05 Token pool | `TokenPoolView.jsx` | Pool token + tranche strip |
| 06 Saved bundle | `SavedBundle.jsx` | Diligence bundle manifest + export toast |
| 07 Retail buyer | `RetailBuyerShell.jsx` | Retail vs institutional + optional proof on teaser |
| 08 Routing desk | `LiquidityRoutingDesk.jsx` | **Desk Admin only** — P2P / sec rated / unrated / retail checkboxes |

## Files

| Path | Purpose |
|------|---------|
| `src/App.jsx` | Sidebar navigation, **desk persona**, active page |
| `src/pages/IntakeControlTower.jsx` | Screen 1: filters, lens, callout, stats, table, actions, toast |
| `src/pages/TapeIngest.jsx` | Tape prep stepper + RMBS checklist + table + strat |
| `src/pages/CapMarketsSale.jsx` | Phase grid + accordions (pool docs, artifact groups) |
| `src/pages/TokenLoanAsset.jsx` | Token card + integrity proof toggle |
| `src/pages/TokenPoolView.jsx` | Pool token + tranche strip |
| `src/pages/SavedBundle.jsx` | Saved diligence bundle manifest |
| `src/pages/RetailBuyerShell.jsx` | Retail vs institutional + proof toggle |
| `src/pages/LiquidityRoutingDesk.jsx` | Liquidity routing (persona-gated) |
| `src/data/mockPools.js` | Pool rows, `roles`, `deskPersonas`, `globalStateOptions` |
| `src/data/journeyMock.js` | Tape rows, phases, token copy |
| `src/data/rmbsChecklistMock.js` | Tape prep steps, pool doc list, artifact groups |
| `src/styles/app.css` | Design tokens, stepper, accordion, dense tables |
| `src/components/*` | FilterBar, PoolTable, ActionDeck, AppHeader |
