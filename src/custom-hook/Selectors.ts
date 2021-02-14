import { useSelector } from 'react-redux';
import { AppState } from '../app/App.reducers';
import { SweetAlertConfig } from '../interfaces';

export function useAlertSelector() {
  const { actionSweetAlert, data } = useSelector((state: AppState) => ({
    actionSweetAlert: state.sweetAlert ? state.sweetAlert.action : null,
    data: state.sweetAlert ? state.sweetAlert.data : null,
  }));

  const dataSweetAlert: SweetAlertConfig = { ...data };

  return { actionSweetAlert, dataSweetAlert };
}
