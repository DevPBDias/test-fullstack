import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Nome curto, por favor insira mais caracteres."),
  email: z.string().email("E-mail inválido, por favor corrija-o."),
  personalID: z.string().min(3, "CPF errado."),
  phoneNumber: z.string().min(3, "Número errado."),
  status: z.string().min(3, "Status errado."),
});
