import { z } from "zod";

const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;

const personalRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;

export const formSchema = z.object({
  name: z.string().min(3, "Nome curto, insira mais de 2 caracteres"),
  email: z
    .string()
    .email("Formato inválido, insira nesse formato: teste@teste.com"),
  personalID: z
    .string()
    .refine(
      (value) => personalRegex.test(value),
      "Inserir CPF no formato xxx.xxx.xx-xx"
    ),
  phoneNumber: z
    .string()
    .refine(
      (value) => phoneRegex.test(value),
      "Inserir telefone no formato (xx) xxxxx-xxxx"
    ),
  status: z.string(),
});
