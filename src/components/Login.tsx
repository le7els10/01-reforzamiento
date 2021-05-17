import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: { username: string; nombre: string } };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
      break;

    case "login":
      return {
        validando: false,
        token: "abc123",
        username: action.payload.username,
        nombre: action.payload.nombre,
      };
      break;

    default:
      return state;
      break;
  }
};

const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "juan", username: "dsharp" },
    });
  };

  const logOut = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return <div className="alert alert-info">Validando...</div>;
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado {nombre}</div>
      ) : (
        <div className="alert alert-danger">No validado</div>
      )}

      {token ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            logOut();
          }}
        >
          Log out
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Login;
