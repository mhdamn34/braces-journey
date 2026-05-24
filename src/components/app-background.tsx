import { StyleSheet, View } from 'react-native';

import { BrandColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function AppBackground() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={[styles.baseWash, { backgroundColor: isDark ? '#080A0E' : '#F6FAFF' }]} />
      <View style={[styles.topPanel, { backgroundColor: isDark ? '#101B2D' : '#E7F8FA' }]} />
      <View style={[styles.angledPanel, { backgroundColor: isDark ? '#1B1830' : '#FCE8F6' }]} />
      <View style={[styles.coolPanel, { backgroundColor: isDark ? '#102A33' : '#E6F1FF' }]} />
      <View style={styles.accentRail}>
        <View style={[styles.accentSegment, { backgroundColor: BrandColors.teal }]} />
        <View style={[styles.accentSegment, { backgroundColor: BrandColors.blue }]} />
        <View style={[styles.accentSegment, { backgroundColor: BrandColors.pink }]} />
      </View>
      <View style={[styles.lowerBand, { backgroundColor: isDark ? '#111720' : '#FFFFFF' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  baseWash: {
    ...StyleSheet.absoluteFill,
  },
  topPanel: {
    position: 'absolute',
    top: -72,
    left: 0,
    right: 0,
    height: 230,
  },
  angledPanel: {
    position: 'absolute',
    top: 96,
    right: -64,
    width: '88%',
    height: 170,
    transform: [{ rotate: '-10deg' }],
  },
  coolPanel: {
    position: 'absolute',
    top: 250,
    left: -96,
    width: '76%',
    height: 170,
    transform: [{ rotate: '8deg' }],
  },
  accentRail: {
    position: 'absolute',
    top: 52,
    left: 24,
    right: 24,
    height: 4,
    flexDirection: 'row',
    gap: 8,
  },
  accentSegment: {
    flex: 1,
    borderRadius: 4,
  },
  lowerBand: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 170,
    opacity: 0.5,
  },
});
