"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Client,
  getClientById,
  updateClienttById,
} from "@/services/clientData";
import "../../components/form/form.css";
import React, { useEffect } from "react";
import { Form } from "@/components/form";
import DashboardTitle from "@/components/common/DashboardTitle";

const EditForm = ({ params }: any) => {
  const router = useRouter();
  const { id }: any = React.use(params);

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

  const showDataInput = async () => {
    const { data } = await getClientById(id);
    reset(data);
  };

  useEffect(() => {
    showDataInput();
  }, []);

  const handleClick = async (formData: Client) => {
    await updateClienttById(id, formData);
    resetForm();
    router.push("/");
  };

  return (
    <FormProvider {...createUserForm}>
      <main className="dashboard-container">
        <DashboardTitle
          title="Editar usuário"
          subtitle="Troque os campos a seguir do usuário existente:"
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
              Editar
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

export default EditForm;
