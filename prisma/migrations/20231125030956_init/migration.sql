/*
  Warnings:

  - A unique constraint covering the columns `[stripeId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Orders_stripeId_key" ON "Orders"("stripeId");
