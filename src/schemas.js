import { z } from "zod";

const typeSchema = z.union([z.literal("Variable"), z.literal("Fijo")]);
const amountSchema = z.coerce.number();
const dateSchema = z.coerce.date();
const categorySchema = z.string().min(1);
const conceptSchema = z.string().min(1);

export { typeSchema, amountSchema, dateSchema, categorySchema, conceptSchema };
