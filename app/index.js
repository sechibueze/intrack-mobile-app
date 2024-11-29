import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../constants/color.constant';

const Home = () => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../assets/splash-icon.png')}
          style={{ width: 100, height: 100 }}
        />

        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>InTrack</Text>
        <Text
          style={{ fontSize: 18, textAlign: 'center', fontWeight: 'medium' }}
        >
          A financial inflow and outflow management application for ambitious
          teams
        </Text>
      </View>

      <Link
        style={{
          padding: 12,
          backgroundColor: COLORS.primary,
          width: '70%',
          textAlign: 'center',
          color: COLORS.light,
          borderRadius: 4,
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 50,
        }}
        href={'./login'}
      >
        Login
      </Link>
    </View>
  );
};

export default Home;
