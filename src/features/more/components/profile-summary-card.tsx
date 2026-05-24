import { StyleSheet, View } from 'react-native';

import { BrandLogo } from '@/components/brand-logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { ProfileSummary } from '@/features/more/types';

type ProfileSummaryCardProps = {
  profile: ProfileSummary;
};

export function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.profileRow}>
        <BrandLogo size={68} />
        <View style={styles.profileText}>
          <ThemedText type="subtitle" style={styles.name}>
            {profile.name}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {profile.handle}
          </ThemedText>
          <ThemedText type="smallBold" style={styles.stage}>
            {profile.treatmentStage}
          </ThemedText>
        </View>
      </View>

      <View style={styles.metaCard}>
        <ThemedText type="smallBold">{profile.clinic}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Next visit: {profile.nextVisit}
        </ThemedText>
      </View>

      <View style={styles.statsRow}>
        {profile.stats.map((stat) => (
          <View key={stat.label} style={styles.statItem}>
            <ThemedText type="smallBold" style={styles.statValue}>
              {stat.value}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {stat.label}
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
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 4,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  profileText: {
    flex: 1,
    gap: Spacing.half,
  },
  name: {
    fontSize: 26,
    lineHeight: 32,
  },
  stage: {
    color: BrandColors.teal,
  },
  metaCard: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
    gap: Spacing.half,
    backgroundColor: '#F4FAFF',
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  statItem: {
    flex: 1,
    minHeight: 64,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F6FA',
  },
  statValue: {
    color: BrandColors.navy,
  },
});
