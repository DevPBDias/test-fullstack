import ClientList from "@/components/client/ClientList";
import DashboardButton from "@/components/common/DashboardButton";
import DashboardTitle from "@/components/common/DashboardTitle";
import PageTitle from "@/components/common/PageTitle";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <section className="dashboard-container">
        <PageTitle titleName="Painel de clientes" />
        <div className="information-container">
          <DashboardTitle
            subtitle="Escolha um cliente para visualizar detalhes"
            title="Listagem de usuários"
          />
          <DashboardButton path="/register" text="Novo cliente" />
          <ClientList />
          <p className="text-clients-qty">Exibindo 4 clientes</p>
        </div>
      </section>
    </main>
  );
}
