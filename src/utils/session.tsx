import {
  MemberCardModel,
  RecMember,
} from 'src/components/models/member-card/interface';

export default class Session {
  static login = (account: RecMember): void => {
    localStorage.setItem('loginAccount', JSON.stringify(account.toJS()));
  };

  static logout = (): void => {
    localStorage.clear();
  };

  static getAccount = (): RecMember | null => {
    const loginAccount = localStorage.getItem('loginAccount');
    return loginAccount ? new MemberCardModel(JSON.parse(loginAccount)) : null;
  };

  static isLogin = (): boolean => !!localStorage.getItem('loginAccount');
}
