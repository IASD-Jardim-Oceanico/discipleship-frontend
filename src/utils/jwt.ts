import * as jwt from 'jsonwebtoken';
import { DecodedToken } from '../interfaces';

export function decodedUserId(token: string) {
  const decode: string | jwt.JwtPayload = jwt.verify(token, process.env.JWT_SECRET || 'segredo');

  const { userId } = (decode as DecodedToken).data;

  return userId;
}
