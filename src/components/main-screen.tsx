import type { PropsWithChildren, ReactNode } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing, TopTabInset } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainScreenProps = PropsWithChildren<{
  title: string;
  subtitle: string;
  hideHeader?: boolean;
}>;

type CardProps = PropsWithChildren<{
  title: string;
  description?: string;
  meta?: string;
  style?: StyleProp<ViewStyle>;
}>;

export function MainScreen({ title, subtitle, hideHeader = false, children }: MainScreenProps) {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {hideHeader ? null : (
            <View style={styles.header}>
              <ThemedText type="title">{title}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary" style={styles.subtitle}>
                {subtitle}
              </ThemedText>
            </View>
          )}

          {children}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return (
    <ThemedText type="subtitle" style={styles.sectionHeading}>
      {children}
    </ThemedText>
  );
}

export function InfoCard({ title, description, meta, style, children }: CardProps) {
  return (
    <ThemedView type="backgroundElement" style={[styles.card, style]}>
      {meta ? (
        <ThemedText type="small" themeColor="textSecondary">
          {meta}
        </ThemedText>
      ) : null}
      <ThemedText type="smallBold">{title}</ThemedText>
      {description ? (
        <ThemedText type="small" themeColor="textSecondary">
          {description}
        </ThemedText>
      ) : null}
      {children}
    </ThemedView>
  );
}

export function CardList({ children }: { children: ReactNode }) {
  return <View style={styles.cardList}>{children}</View>;
}

export function StatGrid({ children }: { children: ReactNode }) {
  return <View style={styles.statGrid}>{children}</View>;
}

export function StatCard({ label, value, helper }: { label: string; value: string; helper?: string }) {
  return (
    <ThemedView type="backgroundElement" style={styles.statCard}>
      <ThemedText type="smallBold">{value}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
      {helper ? (
        <ThemedText type="small" themeColor="textSecondary">
          {helper}
        </ThemedText>
      ) : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four + TopTabInset,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.four,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    gap: Spacing.two,
  },
  subtitle: {
    maxWidth: 600,
  },
  sectionHeading: {
    marginTop: Spacing.two,
  },
  card: {
    padding: Spacing.four,
    borderRadius: Spacing.two,
    gap: Spacing.two,
  },
  cardList: {
    gap: Spacing.three,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  statCard: {
    flexGrow: 1,
    flexBasis: 138,
    padding: Spacing.three,
    borderRadius: Spacing.two,
    minWidth: 120,
    gap: Spacing.half,
  },
});
