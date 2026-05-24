import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { ChartPoint } from '@/features/dashboard/types';

type PainTrendCardProps = {
  data: ChartPoint[];
};

export function PainTrendCard({ data }: PainTrendCardProps) {
  const latest = data[data.length - 1]?.value ?? 0;

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <ThemedText type="smallBold">Pain trend</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Last 7 days
          </ThemedText>
        </View>
        <ThemedText type="subtitle" style={styles.latestValue}>
          {latest}/10
        </ThemedText>
      </View>

      <View style={styles.sparklineRow}>
        {data.map((point) => (
          <View key={point.label} style={styles.sparkColumn}>
            <View style={[styles.sparkBar, { height: `${Math.max(point.value * 9, 12)}%` }]} />
            <ThemedText type="small" themeColor="textSecondary" style={styles.sparkLabel}>
              {point.label.slice(0, 1)}
            </ThemedText>
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
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.three,
  },
  latestValue: {
    fontSize: 24,
    lineHeight: 30,
    color: BrandColors.teal,
  },
  sparklineRow: {
    height: 96,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
  },
  sparkColumn: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.two,
  },
  sparkBar: {
    width: '100%',
    borderRadius: Spacing.two,
    backgroundColor: BrandColors.pink,
  },
  sparkLabel: {
    textAlign: 'center',
  },
});
