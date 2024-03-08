import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// because everytime we save a file, next.js does a hot reload
// if we didn't include this and just said "db = new PrismaClient()", everytime our app hot reloads it would create a new client and ruin everything and get an error saying we have too many prisma clients
export const db = globalThis.prisma || new PrismaClient();

// if we're not in production, store our database in globalThis.prisma, when hot reload it checks if we already have prisma and doesn't create a new client
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
