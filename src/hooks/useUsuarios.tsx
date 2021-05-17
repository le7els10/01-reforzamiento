import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [Data, setData] = useState<Usuario[]>([]);
  const pageRef = useRef(1);

  const getUsers = async () => {
    let res = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (res.data.data.length > 0) {
      setData(res.data.data);
    } else {
      pageRef.current--;
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const nextPage = () => {
    pageRef.current++;
    getUsers();
  };

  const lastPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      getUsers();
    }
  };

  return { getUsers, Data, nextPage, lastPage };
};
