import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { DashboardFocusPanel } from '@/features/dashboard/types';

type DashboardFocusCardProps = {
  panel: DashboardFocusPanel;
};

const toneColors = {
  teal: BrandColors.teal,
  blue: BrandColors.blue,
  pink: BrandColors.pink,
} as const;

export function DashboardFocusCard({ panel }: DashboardFocusCardProps) {
  const accentColor = toneColors[panel.tone];

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.titleBlock}>
          <ThemedText type="small" themeColor="textSecondary">
            Focus
          </ThemedText>
          <ThemedText type="subtitle" style={styles.title}>
            {panel.title}
          </ThemedText>
        </View>
        <View style={[styles.badge, { backgroundColor: `${accentColor}22` }]}>
          <ThemedText type="smallBold" style={{ color: accentColor }}>
            {panel.badge}
          </ThemedText>
        </View>
      </View>

      <View style={styles.valueRow}>
        <ThemedText type="title" style={[styles.value, { color: accentColor }]}>
          {panel.value}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={styles.helper}>
          {panel.helper}
        </ThemedText>
      </View>

      <View style={styles.factGrid}>
        {panel.facts.map((fact) => (
          <View key={fact} style={styles.factPill}>
            <ThemedText type="smallBold" style={styles.factText}>
              {fact}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
  },
  badge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
  },
  valueRow: {
    gap: Spacing.two,
  },
  value: {
    fontSize: 42,
    lineHeight: 46,
  },
  helper: {
    maxWidth: 280,
  },
  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  factPill: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
    backgroundColor: '#F0F6FA',
  },
  factText: {
    color: BrandColors.navy,
  },
});
