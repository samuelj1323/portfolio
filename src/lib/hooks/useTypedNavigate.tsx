import type { Route } from "$utils/types";
import { useNavigate } from "react-router";

const useTypedNavigate = () => {
  const navigate = useNavigate();
  return (route: Route) => navigate(route);
};
export default useTypedNavigate;
