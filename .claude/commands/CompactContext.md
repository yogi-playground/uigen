Create a context file summarizing the current session for future reference.

Task name: $ARGUMENTS

Follow these steps:

1. Review the current conversation - identify what was worked on, what files were touched, what decisions were made.

2. Generate a filename: lowercase, hyphens for spaces (e.g., "auth system" → `auth-system.md`). If $ARGUMENTS is empty, infer a name from the work done.

3. Write the file to `context/<filename>.md` using this exact format:

```
---
title: <Human readable task title>
date: <today's date YYYY-MM-DD>
summary: <one sentence: what was built/changed and why>
tags: [<relevant tags like: auth, database, ai, ui, api, etc>]
---

## What Was Built
<Bullet points describing what was created or modified>

## Key Files & Locations
<List each important file with its path and one-line purpose>

## Decisions & Patterns
<Key architectural or implementation decisions made, and why>

## Gotchas / Watch Out For
<Anything non-obvious, tricky, or that caused problems>

## Continue From Here
<What the next logical steps are, or what state things were left in>
```

4. After saving, confirm with: "Context saved to `context/<filename>.md` — use `/ReadContext <filename>` to reload it next session."
