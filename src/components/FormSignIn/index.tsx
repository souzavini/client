import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import { FormWrapper, FormLink } from 'components/Form'

import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormSignIn = () => (
  <FormWrapper>
    <form>

      <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
      <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />

      <S.ForgetPassword href="#"> Forgot your password?</S.ForgetPassword>

      <Button size="large" fullWidth>Sign in now</Button>

      <FormLink>
        Don´t have an account ?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>

    </form>
  </FormWrapper>
)

export default FormSignIn
