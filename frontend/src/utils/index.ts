export const statusColor = (status: string) => {
  switch (status) {
    case "Ativo":
      return "active";
    case "Inativo":
      return "inactive";
    case "Desativo":
      return "disabled";
    case "Aguardando ativação":
      return "waiting";
    default:
      break;
  }
};
