import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useLogout } from '@hooks/queriesMutations/authentication';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import CoinsInstructionsModal from '@components/coinsInstructionsModal/CoinsInstructionsModal';

function DashboardHome() {

  const [showInstructions, setShowInstructions] = useState(false);

  const logoutMutation = useLogout();

  function logout() {
    logoutMutation.mutate();
  }

  function toggleCoinsInstructions() {
    setShowInstructions((_show) => !_show);
  }

  const coinsInstructionsModalAttributes = {
    open: showInstructions,
    onClose: toggleCoinsInstructions
  };

  return (
    <BackgroundWallpaperWrapper>
      <Text>Dashboard Home</Text>
      <TouchableOpacity onPress={toggleCoinsInstructions}><Text>Show Instructions</Text></TouchableOpacity>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
      <CoinsInstructionsModal {...coinsInstructionsModalAttributes} />
    </BackgroundWallpaperWrapper>
  );

}

export default DashboardHome;