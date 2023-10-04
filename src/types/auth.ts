export type LoginParameters = { username: string; password: string }
export type LoginResponse = {
  data: AuthUser
  useTwoFactorAuth: boolean
}

export type AuthUser = {
  accessToken: string
  email: string
  id: number
  refreshToken: string
  username: string
}

export type AuthUserWith2FA = {
  accessKey: string
}

export type TokenDetails = {
  exp: number
  iat: number
  iss: string
  sub: string
}
