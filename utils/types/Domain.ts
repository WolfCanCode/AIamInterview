import React from 'react';
// Domain type for local use
export interface Domain {
  key: string;
  name?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
  children?: string[];
}

export interface DomainGroup {
  key: string;
  group?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  domains: Domain[];
}
