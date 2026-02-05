/*
  Warnings:

  - You are about to drop the `_OptionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_OptionToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserVoteOption" (
    "userId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("userId", "optionId"),
    CONSTRAINT "UserVoteOption_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserVoteOption_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
