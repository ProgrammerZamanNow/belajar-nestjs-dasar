import { z } from 'zod';

export class LoginUserRequest {
  username: string;
  password: string;
}

export const loginUserRequestValidation = z.object({
  username: z.string().max(50).min(1),
  password: z.string().max(50).min(1),
});
