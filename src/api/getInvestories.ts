import { Investor } from '../types';
import { investoryMock } from './mocks';

export const getInvestories = async (): Promise<Investor[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: Add data validation
      resolve(investoryMock);
    }, 1000);
  });
};
