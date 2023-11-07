/*
  Warnings:

  - The primary key for the `sponsorCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `sponsorCategories` table. All the data in the column will be lost.
  - The required column `id` was added to the `sponsorCategories` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Sponsor" DROP CONSTRAINT "Sponsor_sponsorCategoriesId_fkey";

-- AlterTable
ALTER TABLE "sponsorCategories" DROP CONSTRAINT "sponsorCategories_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "sponsorCategories_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Sponsor" ADD CONSTRAINT "Sponsor_sponsorCategoriesId_fkey" FOREIGN KEY ("sponsorCategoriesId") REFERENCES "sponsorCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
