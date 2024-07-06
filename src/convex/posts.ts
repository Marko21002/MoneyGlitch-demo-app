import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const add = mutation({
  args: {
    assetName: v.string(),
    entryPrice: v.number(),
    exitPrice: v.number(),
    stopLossPrice: v.number(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("posts", args);
  },
});
