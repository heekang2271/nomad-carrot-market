'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import SocialLogin from '@/components/SocialLogin';
import { useFormState } from 'react-dom';
import { createAccount } from './action';

const CreateAccount = () => {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3" action={dispatch}>
        <Input name="username" placeholder="Username" required errors={state?.fieldErrors.username} />
        <Input name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email} />
        <Input name="password" type="password" placeholder="Password" required errors={state?.fieldErrors.password} />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Password Confirm"
          required
          errors={state?.fieldErrors.confirmPassword}
        />
        <Button>Create account</Button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
