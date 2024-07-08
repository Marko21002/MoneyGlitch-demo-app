import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    assetName: v.string(),
    entryPrice: v.number(),
    exitPrice: v.number(),
    stopLossPrice: v.number(),
    description: v.string(),
  }),
  users: defineTable({
    userId: v.string(),
    email: v.string(),
  }),
});
