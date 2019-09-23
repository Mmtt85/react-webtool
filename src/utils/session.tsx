import { makeMember, RecMember } from 'src/models/records/member';

export function login(account: RecMember): void {
  localStorage.setItem('loginAccount', JSON.stringify(account.toJS()));
}

export function logout(): void {
  localStorage.clear();
}

export function getAccount(): RecMember | null {
  const loginAccount = localStorage.getItem('loginAccount');
  return loginAccount ? makeMember(JSON.parse(loginAccount)) : null;
}

export function isLogin(): boolean {
  return !!localStorage.getItem('loginAccount');
}
