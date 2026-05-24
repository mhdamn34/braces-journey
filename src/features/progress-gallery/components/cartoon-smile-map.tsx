import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { AnalysisTone, CartoonMapPoint } from '@/features/progress-gallery/types';

type CartoonSmileMapProps = {
  points: CartoonMapPoint[];
};

const toneColors: Record<AnalysisTone, string> = {
  teal: BrandColors.teal,
  blue: BrandColors.blue,
  pink: BrandColors.pink,
};

const toothIndexes = [0, 1, 2, 3, 4, 5, 6];

function getPointForTooth(points: CartoonMapPoint[], row: CartoonMapPoint['row'], toothIndex: number) {
  return points.find((point) => point.row === row && point.toothIndex === toothIndex);
}

export function CartoonSmileMap({ points }: CartoonSmileMapProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.header}>
        <ThemedText type="smallBold">Cartoon map</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Braces movement mapped from the latest photo log
        </ThemedText>
      </View>

      <View style={styles.mouthFrame}>
        <View style={styles.teethRow}>
          {toothIndexes.map((toothIndex) => {
            const point = getPointForTooth(points, 'upper', toothIndex);

            return (
              <View key={`upper-${toothIndex}`} style={styles.tooth}>
                <View
                  style={[
                    styles.bracket,
                    point && {
                      backgroundColor: toneColors[point.tone],
                      transform: [{ scale: 1.18 }],
                    },
                  ]}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.wire} />

        <View style={styles.teethRow}>
          {toothIndexes.map((toothIndex) => {
            const point = getPointForTooth(points, 'lower', toothIndex);

            return (
              <View key={`lower-${toothIndex}`} style={[styles.tooth, styles.lowerTooth]}>
                <View
                  style={[
                    styles.bracket,
                    point && {
                      backgroundColor: toneColors[point.tone],
                      transform: [{ scale: 1.18 }],
                    },
                  ]}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.smileCurve} />
      </View>

      <View style={styles.pointList}>
        {points.map((point) => (
          <View key={point.id} style={styles.pointRow}>
            <View style={[styles.pointDot, { backgroundColor: toneColors[point.tone] }]} />
            <ThemedText type="small" style={styles.pointText}>
              {point.label}
            </ThemedText>
            <ThemedText type="smallBold">{point.value}%</ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
    gap: Spacing.three,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  header: {
    gap: Spacing.one,
  },
  mouthFrame: {
    minHeight: 188,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.two,
    backgroundColor: '#F4FAFF',
    overflow: 'hidden',
    gap: Spacing.one,
  },
  teethRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.one,
  },
  tooth: {
    width: 30,
    height: 42,
    borderRadius: Spacing.two,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9E5F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerTooth: {
    height: 36,
  },
  bracket: {
    width: 14,
    height: 12,
    borderRadius: 4,
    backgroundColor: '#BCC9D8',
  },
  wire: {
    height: 3,
    marginHorizontal: Spacing.two,
    borderRadius: 3,
    backgroundColor: BrandColors.blue,
  },
  smileCurve: {
    alignSelf: 'center',
    width: 140,
    height: 34,
    borderBottomWidth: 4,
    borderColor: BrandColors.pink,
    borderRadius: 70,
    marginTop: Spacing.two,
  },
  pointList: {
    gap: Spacing.two,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  pointDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  pointText: {
    flex: 1,
  },
});
