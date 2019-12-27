import { action, observable, runInAction } from "mobx";
import { authorizeLogin } from "../../services/authorizeLogin";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  validated: boolean;
  token: string;
}

export class AuthorizationStore {
  @observable successfulAuth: boolean = false;
  @observable failedAuth: boolean = false;
  @observable userToken: string | null = null;

  @action logout() {
    this.successfulAuth = false;
    this.failedAuth = false;
    this.userToken = null;
  }

  @action async validatePayload(payload: LoginPayload) {
    try {
      const resp: LoginResponse | null = await authorizeLogin(payload);

      runInAction(() => {
        if (resp?.validated) {
          this.successfulAuth = true;
          this.failedAuth = false;
          this.userToken = resp.token;
        } else {
          this.failedAuth = true;
          this.successfulAuth = false;
          this.userToken = null;
        }
      });
    } catch {
      throw new Error("Something went wrong");
    }
  }
}
