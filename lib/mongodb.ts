import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB as string;

const mongoOptions: MongoClientOptions = {
  tls: true,
  tlsAllowInvalidCertificates: false,
};

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}
if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable in .env.local");
}

// In development, cache the MongoClient across HMR reloads to avoid
// exhausting connection limits.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, mongoOptions);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, mongoOptions);
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

export default clientPromise;
