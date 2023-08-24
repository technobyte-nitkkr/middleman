// Import the Prisma Client
const { PrismaClient } = require('@prisma/client');

// Import your sample data
const sampleData = require('./sampledata2'); // Adjust the path if necessary

async function seed() {
  const prisma = new PrismaClient();

  try {
    // Insert sample data into the database

    for (const techSociety of sampleData.technicalSocieties) {
      await prisma.technicalSociety.create({
        data: techSociety,
      });
    }

    for (const user of sampleData.users) {
      await prisma.user.create({
        data: user,
      });
    }


    for (const techSociety of sampleData.eventCategories) {
      await prisma.eventCategories.create({
        data: techSociety,
      });
    }


    for (const techSociety of sampleData.eventCoordinators) {
      await prisma.eventCoordinators.create({
        data: techSociety,
      });
    }

    for (const event of sampleData.events) {
      await prisma.events.create({
        data: event,
      });
    }

    for (const techSociety of sampleData.eventDoubts) {
      await prisma.EventDoubts.create({
        data: techSociety,
      });
    }


    for (const techSociety of sampleData.sponsorCategories) {
      await prisma.sponsorCategories.create({
        data: techSociety,
      });
    }


      for (const techSociety of sampleData.sponsor) {
        await prisma.Sponsor.create({
          data: techSociety,
        });
      }

      for (const techSociety of sampleData.lectures) {
        await prisma.Lectures.create({
          data: techSociety,
        });
      }

      for (const techSociety of sampleData.faqs) {
        await prisma.FAQs.create({
          data: techSociety,
        });
      }
      for (const techSociety of sampleData.announcements) {
        await prisma.announcements.create({
          data: techSociety,
        });
      }
    // Insert data for other models in a similar way
    const temp = await prisma.user.findMany({
        select:{
            name: true,
            email: true,
            mobile: true,
        }
    })

    console.log(temp);
    console.log('Sample data has been inserted successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the seed function to insert the data
seed();
