import { IconType } from 'react-icons';

// Domain type for local use
export interface Domain {
  key: string;
  name?: string;
  icon: IconType;
  description?: string;
  children?: string[];
}

export interface DomainGroup {
  key: string;
  group?: string;
  icon: IconType;
  domains: Domain[];
}
