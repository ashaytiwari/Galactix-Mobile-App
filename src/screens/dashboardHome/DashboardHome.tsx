import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useLogout } from '@hooks/queriesMutations/authentication';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';

function DashboardHome() {

  const logoutMutation = useLogout();

  function logout() {
    logoutMutation.mutate();
  }

  return (
    <BackgroundWallpaperWrapper>
      <Text>Dashboard Home</Text>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
    </BackgroundWallpaperWrapper>
  );

}

export default DashboardHome;