import React, { createContext, useEffect } from 'react';

import { useMMKVStorage } from 'react-native-mmkv-storage';
import { io } from 'socket.io-client';

import { IChildrenProps } from '@interfaces/uiInterfaces/generic';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { APP_CONFIG } from '../config';

export const SocketContext = createContext<any>(null);

export const SocketProvider: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const socket = io(APP_CONFIG.API_BASE_URL, {
    auth: {
      userId: userAuthDetails._id
    }
  });

  useEffect(() => {
    // Connect to the server when the provider is mounted
    socket.connect();

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};