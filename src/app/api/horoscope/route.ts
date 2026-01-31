import { NextResponse } from "next/server";
import type { HoroscopeDay } from "@/types/horoscope";

const validDays = new Set<HoroscopeDay>(["yesterday", "today", "tomorrow"]);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sign = typeof body?.sign === "string" ? body.sign.toLowerCase() : "";
    const day: HoroscopeDay = validDays.has(body?.day) ? body.day : "today";

    if (!sign) {
      return NextResponse.json({ error: "Missing sign" }, { status: 400 });
    }

    const url = `https://aztro.sameerkumar.website?sign=${encodeURIComponent(
      sign
    )}&day=${encodeURIComponent(day)}`;

    const resp = await fetch(url, { method: "POST" });
    const data = await resp.json();

    return NextResponse.json({ sign, day, ...data });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
