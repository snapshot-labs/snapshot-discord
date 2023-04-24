export type Subscription = {
  guild: string;
  channel: string;
  space: string;
  mention: string;
  created: string;
  updated: string;
};

export type Event = {
  id: string;
  event: string;
  space: string;
  expire: number;
};

export type Subscriber = {
  id: number;
  owner: string;
  url: string;
  space: string;
  active: number;
  created: number;
};

export type Message = {
  mci: number;
  id: string;
  ipfs: string;
  type: string;
  timestamp: number;
  space: string;
};
