import connectToDatabase from '../../middleware/database';

export default async function handler(req, res) {
 const db = await connectToDatabase(process.env.MONGODB_URI);
 const data = await db.collection('your_collection_name').find({}).toArray();
 res.status(200).json({ data });
}