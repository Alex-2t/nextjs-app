import { atom, atomFamily, CallbackInterface, selector } from 'recoil';
import { Investor } from '../types';

export const investorAtom = atomFamily<Investor | null, Investor['appId']>({
  key: 'inventors',
  default: null,
});

export const inventorsOrderAtom = atom<Investor['appId'][]>({
  key: 'inventors_order',
  default: [],
});

export const selectedInvetorAtom = atom<Investor['appId'] | null>({
  key: 'selectedInvetorAtom',
  default: null,
});

export const inventoryListSelector = selector<Investor[]>({
  key: 'inventors_list',
  get: ({ get }) => {
    const order = get(inventorsOrderAtom);

    return order.map((id) => get(investorAtom(id))).filter(Boolean) as Investor[];
  },
});

export const setInvestorCb =
  ({ set }: CallbackInterface) =>
  (items: Investor[]) => {
    const order: Investor['appId'][] = [];

    items.forEach((item) => {
      order.push(item.appId);
      set(investorAtom(item.appId), item);
    });

    set(inventorsOrderAtom, order);
  };
