"use client";

import { Client } from "@/types";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewClient } from "@/services/clientData";
import "../../components/form/form.css";
import { Form } from "@/components/form";
import DashboardTitle from "@/components/common/DashboardTitle";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [personalIDError, setPersonalIDError] = useState<boolean>(false);
  const createUserForm = useForm<Client>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = createUserForm;

  const resetForm = () => {
    if (isSubmitSuccessful)
      reset({
        email: "",
        name: "",
        personalID: "",
        phoneNumber: "",
      });
  };

  const handleClick = async (data: Client) => {
    try {
      await createNewClient(data);
      resetForm();
      router.push("/");
    } catch (error: any) {
      if (
        error.response.data.message === "E-mail já existente no banco de dados"
      ) {
        setEmailError(true);
        setPersonalIDError(false);
      }
      if (
        error.response.data.message === "Cpf já existente no banco de dados"
      ) {
        setEmailError(false);
        setPersonalIDError(true);
      }
    }
  };

  return (
    <FormProvider {...createUserForm}>
      <main className="dashboard-container">
        <PageTitle titleName="Painel de clientes" />
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
              Criar
            </Form.SubmitBtn>
            <Link className="sub-btn" href="/">
              Voltar
            </Link>
          </section>
          {emailError && (
            <span className="error-msg">E-mail já cadastrado</span>
          )}
          {personalIDError && (
            <span className="error-msg">Cpf já cadastrado</span>
          )}
        </form>
      </main>
    </FormProvider>
  );
};

export default RegisterForm;
