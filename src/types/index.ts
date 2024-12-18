export interface Route {
  // TODO: make new type for id, not just string
  id: string;
  title: string;
  href: `/${string}`;
}

// TODO: make new type for id, not just string
export type InvestorId = string;

export interface Investor {
  appId: InvestorId;
  name: string;
  category: string;
  connector: string;
  logos: {
    app?: string;
    connector?: string;
  };
}

export interface InvestorDetail {
  appId: InvestorId;
  name: string;
  category: string;
  // TODO: Convert to Date
  lastClassification: string;
  connector: Connector;
  users: User[];
}

export interface User {
  id: string;
  name: string;
  pic?: string;
}

export interface Connector {
  name: string;
  logo: string;
}
