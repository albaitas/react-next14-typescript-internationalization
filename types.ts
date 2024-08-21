export interface LocalLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export interface GenerateProps {
  params: {
    locale: string;
  };
}

export interface NavigationItem {
  id: number;
  title: string;
  path: string;
}
