export interface RegisterRequest {
  name?: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  ok: boolean;
}
