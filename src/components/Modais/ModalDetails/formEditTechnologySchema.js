import { z } from "zod";

export const formEditTechnologySchema = z.object({
  status: z.string().min(1, "O status é obrigatório"),
});
