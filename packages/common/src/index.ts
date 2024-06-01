import { z } from "zod";

export const personSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type Person = z.infer<typeof personSchema>;
