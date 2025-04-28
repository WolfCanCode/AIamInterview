import { domainGroups } from '../constants/domain';
import { Domain } from '../types/Domain';

export const getDomainInstanceByName = (name: string): Domain | undefined => {
  let result;
  domainGroups.forEach((group) =>
    group.domains.forEach((domain) => {
      if (
        domain.name === (name.includes('-') ? name.split('-')[0].trim() : name)
      ) {
        result = domain;
      }
    })
  );
  return result;
};
