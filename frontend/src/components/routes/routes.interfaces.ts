export interface IRoute {
  children: React.ReactNode;
  path: string;
  exact: boolean;
  render?: () => React.ReactNode;
  isLoggedIn: boolean;
}

export interface IAdminRoute extends IRoute {
  role: string;
}
