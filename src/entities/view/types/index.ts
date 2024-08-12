import { FC, ReactElement } from 'react';

export type RoutesType = {
  Layout?: FC<{ children: ReactElement }>;
  element: ReactElement;
  name: string;
  path: string;
};
