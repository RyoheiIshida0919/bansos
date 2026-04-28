@AGENTS.md

# Project rules

## Stack
- Next.js + TypeScript + Tailwind CSS
- App Router

## Figma rules
- 必ずFigmaのdesign contextを取得してから実装
- 必ずscreenshotでも見た目を確認
- Figmaの見た目をできるだけ忠実に再現
- ただしコードはこのプロジェクトの構造に合わせる

## Component rules
- components/ui を優先して使う
- Button, Cardは使い回し
- 重複コンポーネントは禁止

## Styling rules
- Tailwindを使う
- 色や余白のハードコードは最小限
- できるだけ統一する

## Implementation flow
- まず静的UI
- 次にレスポンシブ
- 最後に細かい調整

## Output
- 変更ファイル一覧を出す
- Figmaとの差分も報告する
