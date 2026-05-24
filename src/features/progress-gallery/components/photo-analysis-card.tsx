import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { AnalysisTone, PhotoAnalysisSummary } from '@/features/progress-gallery/types';

type PhotoAnalysisCardProps = {
  summary: PhotoAnalysisSummary;
};

const toneColors: Record<AnalysisTone, string> = {
  teal: BrandColors.teal,
  blue: BrandColors.blue,
  pink: BrandColors.pink,
};

export function PhotoAnalysisCard({ summary }: PhotoAnalysisCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <ThemedText type="small" themeColor="textSecondary">
            Latest photo
          </ThemedText>
          <ThemedText type="subtitle" style={styles.title}>
            {summary.latestMonth} analysis
          </ThemedText>
        </View>
        <View style={styles.confidenceBadge}>
          <ThemedText type="smallBold" style={styles.confidenceText}>
            {summary.confidence}%
          </ThemedText>
        </View>
      </View>

      <View style={styles.metricList}>
        {summary.metrics.map((metric) => (
          <View key={metric.label} style={styles.metricBlock}>
            <View style={styles.metricHeader}>
              <ThemedText type="smallBold">{metric.label}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {metric.value}%
              </ThemedText>
            </View>
            <View style={styles.track}>
              <View
                style={[
                  styles.fill,
                  { width: `${metric.value}%`, backgroundColor: toneColors[metric.tone] },
                ]}
              />
            </View>
            <ThemedText type="small" themeColor="textSecondary">
              {metric.detail}
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
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
  },
  confidenceBadge: {
    minWidth: 58,
    height: 40,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9F7F8',
  },
  confidenceText: {
    color: BrandColors.teal,
  },
  metricList: {
    gap: Spacing.three,
  },
  metricBlock: {
    gap: Spacing.two,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  track: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#E2EAF6',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 8,
  },
});
