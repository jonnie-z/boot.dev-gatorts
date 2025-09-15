import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/lib/db/",
  out: "src/out/",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:postgres@localhost:5432/gator?sslmode=disable",
  },
});