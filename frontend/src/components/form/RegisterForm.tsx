"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/schemas";
import { Form } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { Client } from "@/services/fakeData";

const RegisterForm = () => {
  const router = useRouter();
  const createUserForm = useForm<Client>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit } = createUserForm;

  const handleClick = async (data: Client) => {
    console.log(data);
  };

  return (
    <FormProvider {...createUserForm}>
      <form className="" onSubmit={handleSubmit(handleClick)}>
        <Form.Field className="">
          <Form.Input type="text" name="name" />
          <Form.ErrorMessage field="name" />
        </Form.Field>
        <Form.Field className="">
          <Form.Input type="text" name="email" />
          <Form.ErrorMessage field="email" />
        </Form.Field>
        <Form.Field className="">
          <Form.Input type="text" name="personalID" />
          <Form.ErrorMessage field="personalID" />
        </Form.Field>
        <Form.Field className="">
          <Form.Input type="text" name="phoneNumber" />
          <Form.ErrorMessage field="phoneNumber" />
        </Form.Field>
        <Form.Field>
          <Form.Select name="status" defaultValue="Status" />
        </Form.Field>
        <section className="container-btns">
          <Form.SubmitBtn className="main-btn" type="submit">
            Entrar
          </Form.SubmitBtn>
          <Link className="register-link" href="/sign-up">
            Voltar
          </Link>
        </section>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
