
const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";

export const LoginButton = (props: { providerName: string }) => (
  <a href={`${backendUrl}/api/connect/${props.providerName}`}>
    <button style={{ width: "150px" }}>Connect to {props.providerName}</button>
  </a>
);

export const LogoutButton = (props: { onClick: () => void }) => (
  <button onClick={props.onClick}>Logout</button>
);
