import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import dataJSON from './robots.js';

// export async function install(collection = 'books') {
//     const { mongoClient, dbCoders } = await mongoConnect();
//     await dbCoders.dropCollection(collection);
//     const booksCollection = dbCoders.collection(collection);
//     const result = await booksCollection.insertMany(dataJSON.books);
//     mongoClient.close();
//     return result;
// }
