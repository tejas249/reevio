import { MongoClient } from 'mongodb'

declare global {
  // allow global cache across hot-reloads in dev
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!process.env.MONGODB_URI) {
  throw new Error('Please add MONGODB_URI to your .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client = new MongoClient(uri, options)
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise