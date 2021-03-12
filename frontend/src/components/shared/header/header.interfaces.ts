export interface IHeaderLink {
  children: React.ReactNode;
  to: string;
}

export interface IHeaderButton {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
