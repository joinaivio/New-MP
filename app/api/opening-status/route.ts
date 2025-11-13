import { NextRequest, NextResponse } from 'next/server';
import { getOpeningStatus } from '../../../services/geminiService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { latitude, longitude } = body;
    let userLocation: { latitude: number, longitude: number } | undefined = undefined;

    if (latitude && longitude) {
      userLocation = { latitude, longitude };
    }

    const status = await getOpeningStatus(userLocation);
    return NextResponse.json({ status });

  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ error: 'Failed to fetch opening status' }, { status: 500 });
  }
}
