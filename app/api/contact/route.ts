import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!
const dbName = process.env.MONGODB_DB_NAME!

if (!uri || !dbName) {
  throw new Error("Please define the environment variables")
}

let cachedClient: MongoClient | null = null

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  const client = new MongoClient(uri, { maxPoolSize: 10 });
  await client.connect()
  cachedClient = client
  return client
}

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json()

    if (!name || !message) {
      return NextResponse.json({ message: 'Name and message are required.' }, { status: 400 })
    }

    const client = await connectToDatabase()
    const db = client.db(dbName)
    const collection = db.collection('contacts')

    await collection.insertOne({ name, message, createdAt: new Date() })

    return NextResponse.json({ message: 'Message received!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}