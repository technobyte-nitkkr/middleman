-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('CONFIRMED', 'INCOMPLETE', 'REMOVED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT,
    "mobile" INTEGER,
    "college" TEXT NOT NULL,
    "technicalSocietyId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventCoordinators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "technicalSocietyId" TEXT NOT NULL,

    CONSTRAINT "EventCoordinators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventDoubts" (
    "id" TEXT NOT NULL,
    "Question" TEXT NOT NULL,
    "eventsId" TEXT NOT NULL,
    "eventCoordinatorsId" TEXT NOT NULL,

    CONSTRAINT "EventDoubts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "longdescription" TEXT NOT NULL,
    "shortdescription" TEXT NOT NULL,
    "timeline" JSONB NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "poster" TEXT NOT NULL,
    "rules" TEXT[],
    "eventCategoriesId" TEXT,
    "technicalSocietyId" TEXT,
    "eventCoordinatorsId" TEXT,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "status" "RegistrationStatus" NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventCategories" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "eventCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sponsor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sponsorWebsite" TEXT NOT NULL,
    "sponsorCategoriesId" TEXT,

    CONSTRAINT "Sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsorCategories" (
    "Id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "sponsorCategories_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "technicalSociety" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "socials" JSONB NOT NULL,

    CONSTRAINT "technicalSociety_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lectures" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "longdesc" TEXT NOT NULL,
    "shortdesc" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "timeline" JSONB NOT NULL,
    "socials" JSONB NOT NULL,

    CONSTRAINT "Lectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "FAQs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcements" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "event" TEXT NOT NULL,
    "technicalSocietyId" TEXT NOT NULL,

    CONSTRAINT "Announcements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_userId_eventId_key" ON "Registration"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_technicalSocietyId_fkey" FOREIGN KEY ("technicalSocietyId") REFERENCES "technicalSociety"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventCoordinators" ADD CONSTRAINT "EventCoordinators_technicalSocietyId_fkey" FOREIGN KEY ("technicalSocietyId") REFERENCES "technicalSociety"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDoubts" ADD CONSTRAINT "EventDoubts_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDoubts" ADD CONSTRAINT "EventDoubts_eventCoordinatorsId_fkey" FOREIGN KEY ("eventCoordinatorsId") REFERENCES "EventCoordinators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_eventCategoriesId_fkey" FOREIGN KEY ("eventCategoriesId") REFERENCES "eventCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_technicalSocietyId_fkey" FOREIGN KEY ("technicalSocietyId") REFERENCES "technicalSociety"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_eventCoordinatorsId_fkey" FOREIGN KEY ("eventCoordinatorsId") REFERENCES "EventCoordinators"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sponsor" ADD CONSTRAINT "Sponsor_sponsorCategoriesId_fkey" FOREIGN KEY ("sponsorCategoriesId") REFERENCES "sponsorCategories"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_technicalSocietyId_fkey" FOREIGN KEY ("technicalSocietyId") REFERENCES "technicalSociety"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
