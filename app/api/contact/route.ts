import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME;

  if (!uri || !dbName) {
    throw new Error('Please define the environment variables');
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, { maxPoolSize: 10 });
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    if (
      !name ||
      !message ||
      typeof name !== 'string' ||
      typeof message !== 'string' ||
      name.length > 100 ||
      message.length > 1000
    ) {
      return NextResponse.json(
        { message: 'Invalid input. Please ensure name and message are valid strings with appropriate lengths.' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db(process.env.MONGODB_DB_NAME);
    const collection = db.collection('contacts');

    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const recentMessagesCount = await collection.countDocuments({
      createdAt: { $gte: oneMinuteAgo },
    });

    if (recentMessagesCount >= 10) {
      return NextResponse.json(
        { message: 'Message limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    await collection.insertOne({ name, message, createdAt: new Date() });

    return NextResponse.json({ message: 'Message received!' });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}