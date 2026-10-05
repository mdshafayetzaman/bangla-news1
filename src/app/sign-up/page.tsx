'use client'

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from '@heroui/react'

const SignIn = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email, password)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4">
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-blue-600/30 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-purple-600/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative w-full max-w-md animate-[fadeIn_.6s_ease-out]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:border-white/20">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-blue-500/30">
              N
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue to your account
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="email" type="email">
              <Label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </Label>

              <Input
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-blue-400/40 focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
              />

              <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            <TextField isRequired minLength={8} name="password" type="password">
              <div className="mb-2 flex items-center justify-between">
                <Label className="block text-sm font-medium text-slate-200">
                  Password
                </Label>

                <button
                  type="button"
                  className="text-xs font-medium text-blue-400 transition hover:text-purple-400"
                >
                  Forgot Password?
                </button>
              </div>

              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-purple-400/40 focus:border-purple-500 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20"
              />

              <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            <Button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0"
            >
              Sign In
            </Button>
          </Form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link
              href="/sign-up"
              className="cursor-pointer font-medium text-blue-400 transition hover:text-purple-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
