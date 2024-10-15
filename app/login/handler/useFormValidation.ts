"use client";
import saveToCooki from "@/app/login/service/saveCooki";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function useFormValidation() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await handleValidationCredencial();

    if (response) {
      router.push(`/login/admin`);
    }
  };

  const handleValidationCredencial = async () => {
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    const emailValido = email !== "" && email !== undefined;
    const passwordValido = password !== "" && password !== undefined;

    if (!emailValido || !passwordValido) {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    return await validationUser(email, password);
  };

  const validationUser = async (email: string, password: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_D;
    const url = `${apiUrl}/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(JSON.stringify(errorData.error, null, 2));
        return false;
      }

      const dataResponse = await response.json();
      saveToCooki(dataResponse);
      return dataResponse;

    } catch  {
      alert("Tu solicitud ha fallado, por favor intente nuevamente.");
      return false;
    }
  };

  return {
    emailRef,
    passwordRef,
    handleValidationCredencial,
    handleFormSubmit,
  };
}
