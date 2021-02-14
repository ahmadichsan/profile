import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
// import { createBlacklistFilter } from 'redux-persist-transform-filter';
import 'dotenv/config';

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_PERSIST_SECRET || '',
  onError: error => {
    console.log('encryptTransform error ', error);
  },
});

// const saveAuthSubsetBlacklistFilter = createBlacklistFilter('auth', ['data', 'action']);

export const configPersist: any = {
  key: 'root',
  storage,
  transforms: [encryptor],
};
