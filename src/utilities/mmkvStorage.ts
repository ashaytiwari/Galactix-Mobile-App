import { MMKVLoader } from 'react-native-mmkv-storage';

export const MMKV = new MMKVLoader().initialize();

export const STORAGE_KEYS = {
  USER_AUTH_DETAILS: 'USER_AUTH_DETAILS'
};