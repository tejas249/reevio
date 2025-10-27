import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, videoType, message } = body

     // email and name require 
    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db()
    const contacts = db.collection('contacts')

    const doc = {
      name,
      email,
      videoType: videoType ?? '',
      message: message ?? '',
      createdAt: new Date(),
    }

    await contacts.insertOne(doc)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('API /api/contacts error:', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}