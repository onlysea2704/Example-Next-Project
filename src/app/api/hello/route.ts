// src/app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  console.log({message: 'Success'})
  const authHeader = {
    headers: {
      Authorization: `Bearer ${process.env.CRON_SECRET}`,
    },
    method: 'POST',
  }
  const url = 'https://test-security-cronjob.vercel.app/api/post-authen/'
  await fetch(url, authHeader)
  return NextResponse.json({ message: 'Hello from modern Next.js API!' });
}
