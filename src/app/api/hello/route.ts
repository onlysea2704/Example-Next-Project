// src/app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  console.log({message: 'Success'})
  return NextResponse.json({ message: 'Hello from modern Next.js API!' });
}
