import { LogoutButton } from "../components/auth-buttons";
import { localStorageUtil } from "../utils/local-storage";
import { useNavigate} from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <LogoutButton
            onClick={() => {
              localStorageUtil.value = { token: null };
              navigate("/");
            }}
          />
    </div>
  )
}
