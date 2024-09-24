import { CohereClient } from 'cohere-ai';
import { NextResponse } from 'next/server';

import { getPrompt } from '@/lib/prompt';

export async function POST(request: Request) {
  const data = await request.json();

  const cohere = new CohereClient({
    token: process.env.COHERE_TOKEN,
  });

  const prompt = getPrompt();

  const stream = await cohere.chatStream({
    message: `Answer the following query by taking context from documents only and summarise and reply according to you  \n\n query ${data.message}`,
    documents: [{ title: 'Proffesional History of ayush', text: prompt }],
  });

  const response = new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Transfer-Encoding': 'chunked',
    },
  });

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chat of stream) {
        if (chat.eventType === 'text-generation') {
          controller.enqueue(encoder.encode(chat.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readableStream, response);
}
