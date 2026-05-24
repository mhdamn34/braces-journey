import { Image } from 'expo-image';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

type BrandLogoProps = {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export function BrandLogo({ size = 56, style }: BrandLogoProps) {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size * 0.22 }, style]}>
      <Image
        source={require('@/assets/images/braces-journey-logo.png')}
        style={styles.image}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
