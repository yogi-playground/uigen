Load a saved context file to resume work on a task.

File requested: $ARGUMENTS

Follow these steps:

1. If $ARGUMENTS is empty:
   - List all `.md` files in the `context/` directory
   - Tell the user: "No context file specified. Available context files:" followed by the list
   - Ask: "Which one would you like to load?"
   - Stop here and wait for the user to respond.

2. If $ARGUMENTS is provided:
   - Read the file at `context/$ARGUMENTS` (try with and without `.md` extension)
   - If the file does not exist, say so and list what's available in `context/`

3. After reading the file, respond with:
   - A one-line confirmation: "Context loaded: <title>"
   - A brief 2-3 sentence summary of what this task covers
   - "I'm ready to continue. What would you like to do?"

Do not dump the raw file contents at the user. Internalize the context and be ready to act on it.
