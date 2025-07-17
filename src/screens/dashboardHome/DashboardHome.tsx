import { useLogout } from '@hooks/queriesMutations/authentication';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function DashboardHome() {

  const logoutMutation = useLogout();

  function logout() {
    logoutMutation.mutate();
  }

  return (
    <View>
      <Text>Dashboard Home</Text>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
    </View>
  );

}

export default DashboardHome;