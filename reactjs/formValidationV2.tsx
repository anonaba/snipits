import type { FormState } from "./types"
import { email, minLength, required } from "./validators"

export const initialState: FormState = {
  success: false,
  errors: {},
  values: {
    email: "",
    password: "",
  },
}

export function submitForm(
  prevState: FormState,
  formData: FormData
): FormState {
  const values = {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  }

  const errors = {
    email: required(values.email) || email(values.email) || undefined,
    password:
      required(values.password) ||
      minLength(values.password, 8) ||
      undefined,
  }

  const hasErrors = Object.values(errors).some(Boolean)

  if (hasErrors) {
    return {
      success: false,
      errors,
      values,
    }
  }

  return {
    success: true,
    errors: {},
    values: {
      email: "",
      password: "",
    },
  }
}
