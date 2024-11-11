import DashboardButton from "@/components/common/DashboardButton";
import DashboardTitle from "@/components/common/DashboardTitle";
import PageTitle from "@/components/common/PageTitle";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="dashboard-container">
        <PageTitle titleName="Painel de clientes" />
        <div className="information-container">
          <DashboardTitle
            subtitle="Escolha um cliente para visualizar detalhes"
            title="Listagem de usuários"
          />
          <DashboardButton path="/register" text="Novo cliente" />
        </div>
      </section>
    </main>
  );
}
