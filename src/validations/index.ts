export const VALIDATION_LOGIN = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
  },
  password: {
    required: true
  }
}

export const VALIDATION_REGISTER = {
  name: {
    required: 'El nombre es requerido',
    minLength: {
      value: 4,
      message: 'El nombre es demasiado corto'
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'El nombre del paciente solo puede contener letras'
    }
  },
  username: {
    required: 'El nombre de usuario es requerido',
    minLength: {
      value: 4,
      message: 'El nombre de usuario es demasiado corto'
    },
  },
  email: {
    required: 'El email es requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'El email no es válido'
    }
  },
  password: {
    required: 'El password es requerido',
    minLength: {
      value: 6,
      message: 'El password debe tener al menos 6 caracteres'
    }
  }
}