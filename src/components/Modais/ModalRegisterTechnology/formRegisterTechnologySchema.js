import { z } from "zod";

export const formRegisterTechnologySchema = z.object({
    title: z.string().min(1, "O title é obrigatório"),
    status: z.string().min(1, "O status é obrigatório"),
  });