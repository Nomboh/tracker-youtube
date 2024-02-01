/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_CategoryToOrder_B_index";

-- DropIndex
DROP INDEX "_CategoryToOrder_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CategoryToOrder";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tracking-info" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "arrivalTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" TEXT,
    "status" TEXT DEFAULT 'pending',
    "lat" TEXT,
    "lng" TEXT,
    "location" TEXT DEFAULT 'unknown',
    "courier" TEXT DEFAULT 'Brokang Courier',
    "couriersNumber" TEXT,
    CONSTRAINT "tracking-info_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_tracking-info" ("arrivalTime", "courier", "couriersNumber", "id", "lat", "lng", "location", "orderId", "status") SELECT "arrivalTime", "courier", "couriersNumber", "id", "lat", "lng", "location", "orderId", "status" FROM "tracking-info";
DROP TABLE "tracking-info";
ALTER TABLE "new_tracking-info" RENAME TO "tracking-info";
CREATE UNIQUE INDEX "tracking-info_orderId_key" ON "tracking-info"("orderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
