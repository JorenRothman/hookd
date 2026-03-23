import { date, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";
import { projectTable } from "./project";

export const requestTable = pgTable("requests", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: integer("project_id").references(() => projectTable.id),
  method: varchar().notNull(),
  path: varchar().notNull(),
  headers: json().notNull(),
  body: varchar(),
  queryParams: varchar(),
  receivedAt: date().defaultNow(),
});
