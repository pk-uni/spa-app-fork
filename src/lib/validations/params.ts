import { z } from "zod";

export const groupParamsSchema = z.object({
  group: z.string(),
});

export const subGroupParamsSchema = z.object({
  group: z.string(),
  subGroup: z.string(),
});

export const spaceParamsSchema = groupParamsSchema.or(subGroupParamsSchema);

export type SpaceParams = z.infer<typeof spaceParamsSchema>;

export const instanceParamsSchema = z.object({
  group: z.string(),
  subGroup: z.string(),
  instance: z.string(),
});

export type GroupParams = z.infer<typeof groupParamsSchema>;

export type SubGroupParams = z.infer<typeof subGroupParamsSchema>;

export type InstanceParams = z.infer<typeof instanceParamsSchema>;
