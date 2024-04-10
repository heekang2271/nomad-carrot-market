'use server';
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from '@/libs/constants';
import { z } from 'zod';

const checkUsername = (username: string) => !username.includes('potato');

const checkPassword = ({ password, confirmPassword }: { password: string; confirmPassword: string }) =>
  password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: 'Username must be a string!',
        required_error: 'Where is my username???',
      })
      .min(3, 'Way too short!!!')
      .max(10, 'That is too loooooong!')
      .toLowerCase()
      .trim()
      .transform((username) => `test${username}`)
      .refine(checkUsername, 'custom error'),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, '비밀번호는 소문자, 대문자 및 특수문자를 포함해야 합니다.'),
    confirmPassword: z.string().min(10),
  })
  .refine(checkPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  console.log(result.data);
};
