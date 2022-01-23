/*
  Warnings:

  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_author_id_fkey";

-- DropTable
DROP TABLE "authors";

-- DropTable
DROP TABLE "books";
