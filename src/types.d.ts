export type RegisterForm = {
  name: string
  username: string
  email: string
  password: string
  password_confirmation: string
}

export type LoginForm = Omit<RegisterForm, 'name' | 'username' | 'password_confirmation'> & {
  remember?: boolean
}