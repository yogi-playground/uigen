List all saved context files with their titles and summaries.

Follow these steps:

1. Find all `.md` files in the `context/` directory.

2. If no files exist, say: "No context files saved yet. Use `/CompactContext <task-name>` at the end of a session to save one."

3. For each file found, read it and extract: title, date, summary, and tags from the frontmatter.

4. Display as a clean formatted list:

```
Saved Contexts
──────────────────────────────────────────────
📄 auth-system.md
   Title:   Auth System
   Date:    2026-03-19
   Summary: JWT auth with jose, httpOnly cookies, middleware setup
   Tags:    auth, jwt, middleware
   Use:     /ReadContext auth-system

📄 ai-provider.md
   ...
──────────────────────────────────────────────
Total: 2 context files
```

5. End with: "Use `/ReadContext <filename>` to load one, or `/CompactContext <task-name>` to save the current session."
