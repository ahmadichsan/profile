import { History } from 'history';
import { SweetAlertProps } from 'react-bootstrap-sweetalert/dist/types';

export * from './ProjectModel';

export interface State {
  fetch: boolean;
  data: any;
  res: any;
  err: any;
  action: string;
}

export interface Action {
  type: string;
  data: any;
}

export interface HistoryProps {
  history: History;
}

export interface ColSizes {
  md: number;
  lg: number;
  sm: number;
  xs: number;
}

export interface SweetAlertConfig extends Omit<SweetAlertProps, 'onConfirm'> {
  children: React.ReactNode | string;
  confirmAction?: string;
  cancelAction?: string;
}

export interface AlertState extends Omit<State, 'data'> {
  data: SweetAlertConfig;
}

export interface PagingProps {
  page: number;
  totalPages: number;
  onClickPage: (page: number) => void;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export interface RoutePath {
  path: string;
  name: string;
  exact: boolean;
  component: any;
}
