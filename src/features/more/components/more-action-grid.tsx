import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { MoreAction } from '@/features/more/types';

type MoreActionGridProps = {
  actions: MoreAction[];
};

const toneColors = {
  teal: BrandColors.teal,
  blue: BrandColors.blue,
  pink: BrandColors.pink,
  green: BrandColors.green,
} as const;

export function MoreActionGrid({ actions }: MoreActionGridProps) {
  return (
    <View style={styles.grid}>
      {actions.map((action) => {
        const color = toneColors[action.tone];

        return (
          <ThemedView key={action.id} type="backgroundElement" style={styles.card}>
            <View style={[styles.iconBlock, { backgroundColor: `${color}22` }]}>
              <View style={[styles.iconLine, { backgroundColor: color }]} />
              <View style={[styles.iconLineShort, { backgroundColor: color }]} />
            </View>
            <ThemedText type="smallBold">{action.label}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {action.description}
            </ThemedText>
          </ThemedView>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  card: {
    flexGrow: 1,
    flexBasis: 138,
    minHeight: 138,
    padding: Spacing.three,
    borderRadius: Spacing.two,
    gap: Spacing.two,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  iconBlock: {
    width: 44,
    height: 44,
    borderRadius: Spacing.two,
    justifyContent: 'center',
    paddingHorizontal: Spacing.two,
    gap: Spacing.one,
  },
  iconLine: {
    height: 5,
    borderRadius: 5,
  },
  iconLineShort: {
    width: '62%',
    height: 5,
    borderRadius: 5,
  },
});
