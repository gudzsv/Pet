import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation';

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
