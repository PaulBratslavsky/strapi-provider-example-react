import { Navigate, Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

interface StrapiAuthResponse {
  data: null | {
    username: string;
  };
  error?: {
    message: string;
  };
}

import { localStorageUtil } from "./utils/local-storage";
import type { LoaderFunctionArgs } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  console.log(params);

  const localStorageData = localStorageUtil.value;

  const token = localStorageData?.token;

  try {
    const BASE_URL = "http://localhost:1337";
    const path = "/api/users/me";

    const url = new URL(path, BASE_URL);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return { data };
  } catch (err) {
    console.error(err);
  }
}

const PrivateRoutes = () => {
  const data = useLoaderData() as StrapiAuthResponse;
  const user = data?.data?.username;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
