"use client"
import Button from "@/components/button"
import Input from "@/components/input"
import { login } from "@/services/api/auth"
import { handleError } from "@/utils/getAxiosErrorMessage"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import { toast } from "react-toastify"

export default function Home() {
  const methods = useForm()

  const onSubmit = (data: FieldValues) => {
    const payload = {
      username: data?.username,
      password: data?.username,
    }
    handleLogin(payload)
  }

  const { mutate: handleLogin, isLoading: editingChannel } = useMutation(
    login,
    {
      onSuccess: (response) => {
        //toast success message
      },
      onError: (error: AxiosError) => {
        toast.error(handleError(error))
      },
    }
  )

  return (
    <main className="flex justify-center items-center h-screen">

      <div className="bg-white shadow-md p-6 rounded-3xl max-w-lg w-full">
        <h6 className="text-center text-3xl mb-4">Login</h6>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormProvider {...methods}>
            <Input label="Username" name="username" />
            <Input label="password" name="password" />
          </FormProvider>
          <Button variant="primary">Login</Button>

        </form>
      </div>
    </main>
  )
}
