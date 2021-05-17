import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [formulario, setformulario] = useState({
    email: "text@test.com",
    pass: "123456",
  });

  const setValue = (value: string, campo: keyof T) => {
    setformulario({
      ...formulario,
      [campo]: value,
    });
  };
  return {
    ...formulario,
    setValue,
    formulario,
  };
};
