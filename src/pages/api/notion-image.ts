// pages/api/notion-image.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;
  if (!url || typeof url !== "string")
    return res.status(400).end("url required");

  try {
    const notionRes = await fetch(url);

    if (!notionRes.ok) {
      return res.status(notionRes.status).send("Failed to fetch image");
    }

    // Buffer로 변환
    const arrayBuffer = await notionRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Cache-Control", "public, max-age=86400, immutable");
    res.setHeader(
      "Content-Type",
      notionRes.headers.get("content-type") || "image/jpeg"
    );
    res.send(buffer);
  } catch (e) {
    res.status(500).send("Image proxy error");
  }
}
