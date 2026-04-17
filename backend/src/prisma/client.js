const { PrismaClient } = require('@prisma/client');

// Singleton del cliente Prisma para evitar múltiples conexiones
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

module.exports = prisma;
