import { LOGIN_URL } from "../constants/endpoints";
import { LoginPayload, LoginResponse } from "../stores/Authorization";

async function authorizeLogin(
  payload: LoginPayload
): Promise<LoginResponse | null> {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const { validated, token } = await response.json();

    return {
      validated,
      token
    };
  } catch {
    return null;
  }
}

export { authorizeLogin };
