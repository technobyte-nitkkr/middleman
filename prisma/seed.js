// Import the Prisma Client
const { PrismaClient } = require('@prisma/client');

// Import your sample data
const sampleData = require('../fixtures/sampledata'); // Adjust the path if necessary

async function seed() {
  const prisma = new PrismaClient();
  // const transaction = await prisma.$transaction();
  try {
    for (const techSociety of sampleData.technicalSocieties) {
      await prisma.technicalSociety.upsert({
        where: { id: techSociety.id },
        create: techSociety,
        update: {},
      });
    }

    for (const user of sampleData.users) {
      await prisma.user.upsert({
        where: { id: user.id },
        create: user,
        update: {},
      });
    }

    for (const eventCategory of sampleData.eventCategories) {
      await prisma.eventCategories.upsert({
        where: { id: eventCategory.id },
        create: eventCategory,
        update: {},
      });
    }

    for (const eventCoordinator of sampleData.eventCoordinators) {
      await prisma.eventCoordinators.upsert({
        where: { id: eventCoordinator.id },
        create: eventCoordinator,
        update: {},
      });
    }

    for (const event of sampleData.events) {
      await prisma.events.upsert({
        where: { id: event.id },
        create: event,
        update: {},
      });
    }

    for (const eventDoubt of sampleData.eventDoubts) {
      await prisma.EventDoubts.upsert({
        where: { id: eventDoubt.id },
        create: eventDoubt,
        update: {},
      });
    }

    for (const sponsorCategory of sampleData.sponsorCategories) {
      await prisma.sponsorCategories.upsert({
        where: { id: sponsorCategory.id },
        create: sponsorCategory,
        update: {},
      });
    }

    for (const sponsor of sampleData.sponsor) {
      await prisma.Sponsor.upsert({
        where: { id: sponsor.id },
        create: sponsor,
        update: {},
      });
    }

    for (const techSociety of sampleData.lectures) {
      await prisma.Lectures.upsert({
        where: { id: techSociety.id },
        create: techSociety,
        update: {},
      });
    }

    for (const techSociety of sampleData.faqs) {
      await prisma.FAQs.upsert({
        where: { id: techSociety.id },
        create: techSociety,
        update: {},
      });
    }

    for (const techSociety of sampleData.announcements) {
      await prisma.announcements.upsert({
        where: { id: techSociety.id },
        create: techSociety,
        update: {},
      });
    }

    console.log('Sample data has been inserted successfully.');
  } catch (error) {
    // await transaction.$rollback();
    console.error('Error seeding the database:', error);
  }
}

seed();
