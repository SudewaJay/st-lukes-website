import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatContext";

export const runtime = "edge";

type ChatMessage = { role: "user" | "assistant"; content: string };

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "z-ai/glm-4.5-air:free";

export async function POST(req: NextRequest) {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) {
    return Response.json(
      { error: "Chat is not configured. Please call 071 123 1954." },
      { status: 500 },
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const trimmed = messages
    .slice(-10)
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string",
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (trimmed.length === 0) {
    return Response.json({ error: "No message." }, { status: 400 });
  }

  try {
    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "HTTP-Referer": "https://www.stlukesmedilab.com",
        "X-Title": "St. Luke's Medical Laboratory",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 800,
        reasoning: { exclude: true },
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("OpenRouter error:", res.status, errText);
      return Response.json(
        { error: "Assistant is unavailable right now. Please call 071 123 1954." },
        { status: 502 },
      );
    }

    const data = await res.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? "";

    return Response.json({
      reply:
        reply.trim() ||
        "Sorry, I didn't catch that. You can also reach us on 071 123 1954.",
    });
  } catch {
    return Response.json(
      { error: "Assistant is unavailable right now. Please call 071 123 1954." },
      { status: 502 },
    );
  }
}
