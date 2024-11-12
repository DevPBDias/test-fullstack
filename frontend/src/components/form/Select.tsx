import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select = (props: SelectProps) => {
  const { register } = useFormContext();

  return (
    <select {...register(props.name)} {...props} defaultValue="status">
      <option value="status" disabled hidden>
        Status
      </option>
      <option value="Ativo">Ativo</option>
      <option value="Inativo">Inativo</option>
      <option value="Aguardando ativação">Aguardando ativação</option>
      <option value="Desativo">Desativado</option>
    </select>
  );
};

export default Select;
