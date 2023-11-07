const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function reset() {
  try {
    await prisma.eventDoubts.deleteMany();
  } catch (error) {
    console.error('Error deleting eventDoubts:', error.message);
  }

  try {
    await prisma.eventCategories.deleteMany();
  } catch (error) {
    console.error('Error deleting eventCategories:', error.message);
  }

  try {
    await prisma.eventCoordinators.deleteMany();
  } catch (error) {
    console.error('Error deleting eventCoordinators:', error.message);
  }

  try {
    await prisma.sponsorCategories.deleteMany();
  } catch (error) {
    console.error('Error deleting sponsorCategories:', error.message);
  }

  try {
    await prisma.events.deleteMany();
  } catch (error) {
    console.error('Error deleting events:', error.message);
  }

  try {
    await prisma.registration.deleteMany();
  } catch (error) {
    console.error('Error deleting registration:', error.message);
  }

  try {
    await prisma.user.deleteMany();
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }

  try {
    await prisma.sponsor.deleteMany();
  } catch (error) {
    console.error('Error deleting sponsor:', error.message);
  }

  try {
    await prisma.announcements.deleteMany();
  } catch (error) {
    console.error('Error deleting announcements:', error.message);
  }

  try {
    await prisma.lectures.deleteMany();
  } catch (error) {
    console.error('Error deleting lectures:', error.message);
  }

  try {
    await prisma.technicalSociety.deleteMany();
  } catch (error) {
    console.error('Error deleting technicalSociety:', error.message);
  }

  try {
    await prisma.FAQs.deleteMany();
  } catch (error) {
    console.error('Error deleting FAQs:', error.message);
  }

  console.info('The data in the db has been reset');
}

reset();
