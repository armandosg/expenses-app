import { z } from "zod";

const typeSchema = z.union([z.literal("Variable"), z.literal("Fijo")]);
const amountSchema = z.coerce.number();
const dateSchema = z.coerce.date();

export { typeSchema, amountSchema, dateSchema };
