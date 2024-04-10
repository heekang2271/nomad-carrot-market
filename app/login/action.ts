'use server';

export const login = async (prevState: any, formData: FormData) => {
  console.log(prevState);
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  return {
    errors: ['wrong password', 'password too short'],
  };
};
