import { useState } from "react";
import { localStorageUtil } from "./utils/local-storage";

const backendUrl = "http://localhost:1337";

const providersNames = [
  "discord",
  "facebook",
  "github",
  "google",
  "instagram",
  "linkedin",
  "reddit",
  "twitch",
  "twitter",
  "vk",
  "auth0",
];

const LoginButton = (props: { providerName: string }) => (
  <a href={`${backendUrl}/api/connect/${props.providerName}`}>
    <button style={{ width: "150px" }}>Connect to {props.providerName}</button>
  </a>
);

const LogoutButton = (props: { onClick: () => void }) => (
  <button onClick={props.onClick}>Logout</button>
);

export default function Root() {
  const [isLogged, setIsLogged] = useState(!!localStorageUtil.value?.token);

  console.log(isLogged);

  return (
    <div>
      <h1>Strapi Auth Providers Test</h1>
      <div>
        {isLogged ? (
          <LogoutButton
            onClick={() => {
              localStorageUtil.value = { token: null };
              setIsLogged(false);
            }}
          />
        ) : (
          providersNames.map((providerName) => (
            <LoginButton key={providerName} providerName={providerName} />
          ))
        )}
      </div>
    </div>
  );
}
