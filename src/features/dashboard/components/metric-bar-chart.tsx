import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { ChartPoint } from '@/features/dashboard/types';

type MetricBarChartProps = {
  title: string;
  description: string;
  data: ChartPoint[];
};

export function MetricBarChart({ title, description, data }: MetricBarChartProps) {
  const maxValue = Math.max(...data.map((point) => point.value), 1);

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.header}>
        <ThemedText type="smallBold">{title}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {description}
        </ThemedText>
      </View>

      <View style={styles.chartRow}>
        {data.map((point, index) => (
          <View key={point.label} style={styles.barColumn}>
            <View style={styles.barTrack}>
              <View
                style={[
                  styles.barFill,
                  {
                    height: `${Math.max((point.value / maxValue) * 100, 8)}%`,
                    backgroundColor: index === data.length - 1 ? BrandColors.pink : BrandColors.blue,
                  },
                ]}
              />
            </View>
            <ThemedText type="small" themeColor="textSecondary" style={styles.barLabel}>
              {point.label}
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
  header: {
    gap: Spacing.one,
  },
  chartRow: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.two,
  },
  barTrack: {
    width: '100%',
    flex: 1,
    borderRadius: Spacing.two,
    backgroundColor: '#E3E9F4',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    borderRadius: Spacing.two,
  },
  barLabel: {
    textAlign: 'center',
  },
});
