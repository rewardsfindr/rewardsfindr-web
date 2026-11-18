# RewardsFindr Web — Agent Workflow

This repo is the **marketing site only** ([rewardsfindr.com](https://rewardsfindr.com)). Agents here must not edit the mobile/api monorepo or any sibling repo.

## Roster

| Agent | Invoke | Purpose |
| --- | --- | --- |
| **Web designer** | `/web-designer` | Design and maintain the landing page: propose plans, implement approved slices, keep copy/visuals truthful |

## Order

1. **Plan** — `/web-designer` proposes (or revises) a short plan when the next visual/copy change is not already decided.
2. **Human review** — Rakesh approves or requests changes. No coding of that slice until the plan for it is accepted.
3. **Implement** — `/web-designer` implements **one** approved slice on a branch and opens a PR.
4. **Human merge** — Merge only after the PR looks good; do not auto-merge.

## Constraints

- Touch **only** files in `rewardsfindr-web`.
- One PR per slice. No drive-by refactors.
- Prefer the product as it works today over aspirational marketing claims.
- Do not invent App Store / Play URLs, bank support, or savings stats without an approved source.
- Keep the brand readable as RewardsFindr in the first viewport; do not let a generic headline erase the brand.
- Follow the project frontend design preferences when redesigning (brand-first hero, expressive type, real visual anchor, minimal card clutter, intentional motion).

## Handoff shape (plan)

When planning, write: Goal → Decision → Done when → Out of scope → Likely files → Open questions. Stop and wait for approval before coding.
