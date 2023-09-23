"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [credential, setCrendential] = useState({
    username: "",
    password: ""
  })

  const router = useRouter()


  const handleLogin = () => {
    console.log("triggered");

    if (credential.username === "lilybest" && credential.password === "1234") {
      router.push("/dashboard")
    }
  }

  const handleInputChange = (value: string, inputName: string) => {
    setCrendential({
      ...credential,
      [inputName]: value
    })
  }
  return (
    <main className="bg-login-bg w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center bg-blend-darken">
      <Image src="/images/logo.png" width={150} height={40} alt='logo' className="mb-5" />
      <form onSubmit={handleLogin} className="bg-black/50 p-8 rounded-[20px] backdrop-blur-sm text-white flex flex-col justify-center items-center gap-4">
        <p className="mb-4 text-center font-bold text-xl">Please login to your account</p>
        <div className="flex flex-col w-full">
          <div className="relative flex flex-col mb-4 gap-1 w-full">
            <label
              htmlFor="exampleFormControlInput1"
              className="font-bold"
            >Username
            </label>
            <input
              value={credential.username}
              type="text"
              id="username"
              name="username"
              placeholder="Enter user id"
              className="h-8 rounded-md px-2 bg-gray-100 text-black"
              onChange={(e) => handleInputChange(e.target.value, e.target.name)}
            />

          </div>

          <div className="relative flex flex-col mb-4 gap-1 w-full">
            <label
              htmlFor="exampleFormControlInput11"
              className="font-bold"

            >Password
            </label>
            <input
              value={credential.password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="h-8 rounded-md px-2 bg-gray-100 text-black"
              onChange={(e) => handleInputChange(e.target.value, e.target.name)}
            />

          </div>
        </div>


        <div className="pb-1 pt-1 text-center flex items-center justify-between w-full">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="bg-blue-500 text-white rounded-xl px-5 h-8"
            onClick={handleLogin}
          >
            Log in
          </button>

          <a href="#!">Forgot password?</a>
        </div>


      </form>
    </main>
  )
}
