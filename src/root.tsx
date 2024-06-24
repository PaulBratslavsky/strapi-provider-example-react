import { useState } from "react";
import { localStorageUtil } from "./utils/local-storage";

import { LoginButton, LogoutButton } from "./components/auth-buttons";


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


export default function Root() {
  const [isLogged, setIsLogged] = useState(!!localStorageUtil.value?.token);

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
