import { Client, Databases, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64727897859f4a7915f7");


export const id = new ID();
export const account = new Account(client,id);

export const databases = new Databases( client, "647a7e317cb81f7aa169");
