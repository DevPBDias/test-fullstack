import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select = (props: SelectProps) => {
  const { register } = useFormContext();

  return (
    <select {...register(props.name)} {...props}>
      <option value="status" disabled selected hidden>
        Status
      </option>
      <option value="active">Ativo</option>
      <option value="inactive">Inativo</option>
      <option value="waiting">Aguardando ativação</option>
      <option value="disabled">Desativado</option>
    </select>
  );
};

export default Select;
