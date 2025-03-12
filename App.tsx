import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-bold text-blue-500">
          EasePlan 시작 🎉
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
