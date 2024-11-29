import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='login'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='(tabs)' options={{}} />
    </Stack>
  );
};

export default Layout;
