import { useState } from "react";
import { useForm } from "../hooks/useForm";

const Formularios = () => {
  const { formulario, email, pass, setValue } = useForm({
    email: "text@test.com",
    pass: "123456",
  });
  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value, "email");
        }}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="password"
        value={pass}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value, "pass");
        }}
      />
    </>
  );
};

export default Formularios;
