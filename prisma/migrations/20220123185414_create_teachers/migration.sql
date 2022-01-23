/*
  Warnings:

  - You are about to drop the column `created_At` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the `modules` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fk_id_teacher]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "created_At",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fk_id_teacher" TEXT;

-- DropTable
DROP TABLE "modules";

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teacher_key" ON "courses"("fk_id_teacher");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
