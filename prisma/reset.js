const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function seed() {
  await prisma.eventDoubts.deleteMany()
  await prisma.eventCategories.deleteMany()
  await prisma.eventCoordinators.deleteMany()
  await prisma.sponsorCategories.deleteMany()
  await prisma.events.deleteMany()
  await prisma.registration.deleteMany()
  await prisma.user.deleteMany()
  await prisma.sponsor.deleteMany()
  await prisma.announcements.deleteMany()
  await prisma.lectures.deleteMany()
  await prisma.technicalSociety.deleteMany()
  await prisma.FAQs.deleteMany()
}

seed()