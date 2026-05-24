import { StyleSheet, View } from 'react-native';

import { BrandLogo } from '@/components/brand-logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { TreatmentSummary } from '@/features/dashboard/types';

type DashboardHeaderCardProps = {
  summary: TreatmentSummary;
};

export function DashboardHeaderCard({ summary }: DashboardHeaderCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.topRow}>
        <BrandLogo size={64} />
        <View style={styles.titleBlock}>
          <ThemedText type="small" themeColor="textSecondary">
            Welcome back, {summary.patientName}
          </ThemedText>
          <ThemedText type="subtitle" style={styles.title}>
            BracesJourney
          </ThemedText>
        </View>
      </View>

      <View style={styles.progressHeader}>
        <View>
          <ThemedText type="smallBold">{summary.currentStage}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {summary.monthsCompleted} of {summary.monthsTotal} months tracked
          </ThemedText>
        </View>
        <ThemedText type="subtitle" style={styles.progressValue}>
          {summary.progressPercent}%
        </ThemedText>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${summary.progressPercent}%` }]} />
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
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: Spacing.three,
  },
  progressValue: {
    fontSize: 28,
    lineHeight: 34,
    color: BrandColors.blue,
  },
  progressTrack: {
    height: 10,
    borderRadius: 10,
    backgroundColor: '#DCE5F2',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: BrandColors.teal,
  },
});
