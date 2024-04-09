import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SocialLogin from '@/components/SocialLogin';

const CreateAccount = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput placeholder="Username" required />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <FormInput type="password" placeholder="Password Confirm" required />
        <FormButton>Create account</FormButton>
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
