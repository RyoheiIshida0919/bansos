# Project rules

## Stack
- Use Next.js + TypeScript + Tailwind CSS
- Use App Router
- Use functional React components

## Figma implementation rules
- Always fetch Figma context before implementing UI
- Start with the exact frame or node that needs implementation
- Reuse existing components before creating new ones
- Prefer project tokens and theme variables over hardcoded values
- Match spacing, typography, radius, and layout closely to Figma
- Build static UI first, then add interactions
- After implementation, report changed files and remaining visual differences

## Component rules
- Reuse components under src/components/ui when possible
- Do not create duplicate Button, Card, Input, Modal components
- Keep props simple and reusable

## Styling rules
- Prefer Tailwind utility classes
- Avoid one-off hardcoded values unless necessary
- Keep responsive behavior consistent with the design

## Output rules
- Summarize what changed
- List files created or modified
- Note any parts that were approximated
