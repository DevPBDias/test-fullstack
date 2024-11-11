"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/schemas";
import { Form } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { Client } from "@/services/fakeData";
import DashboardTitle from "../common/DashboardTitle";
import "./form.css";

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
      <DashboardTitle
        title="Novo usuário"
        subtitle="Informe os campos a seguir para criar novo usuário:"
      />
      <form className="form-container" onSubmit={handleSubmit(handleClick)}>
        <Form.Field className="input-container">
          <Form.Input
            placeholder="Nome"
            className="input"
            type="text"
            name="name"
          />
          <Form.ErrorMessage field="name" />
        </Form.Field>
        <Form.Field className="input-container">
          <Form.Input
            placeholder="E-mail"
            className="input"
            type="text"
            name="email"
          />
          <Form.ErrorMessage field="email" />
        </Form.Field>
        <Form.Field className="input-container">
          <Form.Input
            placeholder="CPF"
            className="input"
            type="text"
            name="personalID"
          />
          <Form.ErrorMessage field="personalID" />
        </Form.Field>
        <Form.Field className="input-container">
          <Form.Input
            placeholder="Telefone"
            className="input"
            type="text"
            name="phoneNumber"
          />
          <Form.ErrorMessage field="phoneNumber" />
        </Form.Field>
        <Form.Field className="input-container">
          <Form.Select name="status" className="input status-text" />
        </Form.Field>
        <section className="container-btns">
          <Form.SubmitBtn className="main-btn" type="submit">
            Entrar
          </Form.SubmitBtn>
          <button className="sub-btn" onClick={() => router.back()}>
            Voltar
          </button>
        </section>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
