import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Screen } from 'ui'
import * as yup from 'yup'

type FormData = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
})

export const Login = () => {
  const { signIn } = useAuth()

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    signIn({ access: 'access-token', refresh: 'refresh-token' })
  }
  return (
    <Screen>
      <Input
        control={control}
        name="email"
        placeholder="jdoe@example.com"
        label="Email"
      />
      <Input
        control={control}
        name="password"
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
      />
    </Screen>
  )
}
