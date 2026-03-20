"use client";

import { useChat } from "@/lib/contexts/chat-context";
import { AVAILABLE_MODELS, ModelId } from "@/lib/models";

export function ModelSelector() {
  const { model, setModel } = useChat();

  return (
    <select
      value={model}
      onChange={(e) => setModel(e.target.value as ModelId)}
      className="text-xs text-neutral-600 bg-white border border-neutral-200 rounded-md px-2 py-1.5 cursor-pointer hover:border-neutral-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      {AVAILABLE_MODELS.map((m) => (
        <option key={m.id} value={m.id}>
          {m.label}
        </option>
      ))}
    </select>
  );
}
