/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `EventCoordinators` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `EventCoordinators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `EventCoordinators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventCoordinators" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EventCoordinators_email_key" ON "EventCoordinators"("email");
