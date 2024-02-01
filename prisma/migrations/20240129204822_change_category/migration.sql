/*
  Warnings:

  - You are about to drop the column `courierNumber` on the `tracking-info` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tracking-info" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "arrivalTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" TEXT,
    "status" TEXT DEFAULT 'pending',
    "lat" TEXT,
    "lng" TEXT,
    "location" TEXT,
    "courier" TEXT DEFAULT 'Brokang Courier',
    "couriersNumber" TEXT,
    CONSTRAINT "tracking-info_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_tracking-info" ("arrivalTime", "courier", "id", "lat", "lng", "location", "orderId", "status") SELECT "arrivalTime", "courier", "id", "lat", "lng", "location", "orderId", "status" FROM "tracking-info";
DROP TABLE "tracking-info";
ALTER TABLE "new_tracking-info" RENAME TO "tracking-info";
CREATE UNIQUE INDEX "tracking-info_orderId_key" ON "tracking-info"("orderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
