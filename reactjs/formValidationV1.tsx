import { useActionState } from "react";

type FormState = {
  errors: {
    name?: string;
    email?: string;
    password?: string;
  };
  success: boolean;
};

const initialState: FormState = {
  errors: {},
  success: false,
};

async function registerUser(
  previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: FormState["errors"] = {};

  // Name validation
  if (!name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!email.includes("@")) {
    errors.email = "Please enter a valid email";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  // If validation failed
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
    };
  }

  // Simulate API request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log({
    name,
    email,
    password,
  });

  return {
    errors: {},
    success: true,
  };
}


function RegisterForm() {
   const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState
  );
}
