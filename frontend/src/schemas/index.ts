import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Nome curto, insira mais de 2 caracteres"),
  email: z
    .string()
    .email("Formato inválido, insira nesse formato: teste@teste.com"),
  personalID: z
    .string()
    .refine(
      (value) => /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(value),
      "Inserir CPF no formato 123.456.789-00"
    ),
  phoneNumber: z
    .string()
    .refine(
      (value) =>
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
          value
        ),
      "Inserir telefone no formato (xx) xxxxx-xxxx"
    ),
  status: z.string(),
});
