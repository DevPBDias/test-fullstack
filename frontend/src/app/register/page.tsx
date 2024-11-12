"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Client, createNewClient } from "@/services/clientData";
import "../../components/form/form.css";
import { Form } from "@/components/form";
import DashboardTitle from "@/components/common/DashboardTitle";

const RegisterForm = () => {
  const router = useRouter();
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
    await createNewClient(data);
    resetForm();
    router.push("/");
  };

  return (
    <FormProvider {...createUserForm}>
      <main className="dashboard-container">
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
      </main>
    </FormProvider>
  );
};

export default RegisterForm;
