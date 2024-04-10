'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import SocialLogin from '@/components/SocialLogin';
import { useFormState } from 'react-dom';
import { login } from './action';

const Login = () => {
  const [state, dispatch] = useFormState(login, {
    potato: 1,
  } as any);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3" action={dispatch}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" errors={state?.errors} required />
        <Button>Log in</Button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
