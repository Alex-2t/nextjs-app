import { InvestorDetail, InvestorId } from '../types';
import { detailMock } from './mocks';

export const getInvestorDetailsById = async (appId: InvestorId): Promise<InvestorDetail> => {
  console.log('appId', appId);

  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: Add data validation
      resolve(detailMock);
    }, 1000);
  });
};
