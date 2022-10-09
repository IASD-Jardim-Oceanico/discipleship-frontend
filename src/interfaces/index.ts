export interface DiscipleMakerDTO {
  email: string | undefined;
  password: string | undefined;
  role: string;
  fullName: string | undefined;
  phone?: string | undefined;
}

export interface UserInfo {
  full_name: string;
  role: string;
  phone: string | undefined;
}

export type Token = {
  token: string;
}

export interface LoginRequest {
  userInfo: UserInfo;
  token: Token;
}


export interface DecodedToken {
  data: { userId: string };
}