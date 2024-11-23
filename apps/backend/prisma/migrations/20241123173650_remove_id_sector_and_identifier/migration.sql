/*
  Warnings:

  - You are about to drop the column `idSector` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `identifier` on the `Role` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Role_id_idSector_key";

-- DropIndex
DROP INDEX "Role_identifier_key";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "idSector",
DROP COLUMN "identifier";
