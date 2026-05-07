# 夯榜 HangRank

A modern MVP product ranking and searchable category directory.

## Current MVP

The current runnable preview is `index.html`. It supports:

- Major category -> subcategory -> specific ranking drill-down
- Search across categories and products
- Five ranking tiers: 夯, 顶级, 人上人, npc, 拉完了
- Chinese, English, and Japanese language switching
- Local-storage favorites

## Local Preview

This workspace currently does not expose a usable `npm` command, so a lightweight static preview server is included:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\serve-static.ps1 -Root . -Port 3000
```

Then open `http://localhost:3000`.

## Next.js Project Structure

- `app/` - Next.js App Router pages and global styles
- `components/` - Reusable UI, search, language, favorites, ranking, and product cards
- `lib/category-tree.ts` - Reusable three-level category tree
- `lib/products.ts` - Local mock product data
- `types/` - Shared TypeScript product and category types

When Node/npm are available:

```bash
npm install
npm run dev
```
