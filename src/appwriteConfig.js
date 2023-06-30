import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "649ab9f6856c39b18e92";
export const DATABASE_ID = "649d199f218ae5e84dff";
export const COLLECTION_ID_MESSAGES = "649d19bb2955ad911fe0";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("649ab9f6856c39b18e92");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
