// src/app/api/hello/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
        return new NextResponse(`Unauthorized`, { status: 401 });
    }
    console.log({ message: 'Success' })
    return NextResponse.json({ message: 'Hello from modern Next.js API!' });
}