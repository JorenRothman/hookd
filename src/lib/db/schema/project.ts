import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const projectTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar().notNull(),
  createdAt: date().defaultNow(),
});
