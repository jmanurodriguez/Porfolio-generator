import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/options';

export function auth() {
  return getServerSession(authOptions);
}