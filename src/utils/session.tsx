import { UserCardModel } from 'src/components/models/user-card/interface';

export default class Session {
  static login = (account: UserCardModel): void => {
    localStorage.setItem('loginAccount', JSON.stringify(account.toJS()));
  };

  static logout = (): void => {
    localStorage.clear();
  };

  static getAccount = (): UserCardModel | null => {
    const loginAccount = localStorage.getItem('loginAccount');
    return loginAccount ? new UserCardModel(JSON.parse(loginAccount)) : null;
  };

  static isLogin = (): boolean => !!localStorage.getItem('loginAccount');
}
