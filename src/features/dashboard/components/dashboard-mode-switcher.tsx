import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { DashboardMode, DashboardModeOption } from '@/features/dashboard/types';

type DashboardModeSwitcherProps = {
  modes: DashboardModeOption[];
  selectedMode: DashboardMode;
  onSelectMode: (mode: DashboardMode) => void;
};

export function DashboardModeSwitcher({
  modes,
  selectedMode,
  onSelectMode,
}: DashboardModeSwitcherProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      {modes.map((mode) => {
        const isSelected = selectedMode === mode.id;

        return (
          <Pressable
            key={mode.id}
            onPress={() => onSelectMode(mode.id)}
            style={[styles.option, isSelected && styles.selectedOption]}>
            <ThemedText
              type="smallBold"
              style={isSelected ? styles.selectedText : styles.defaultText}>
              {mode.label}
            </ThemedText>
            <ThemedText
              type="small"
              style={isSelected ? styles.selectedDescription : styles.defaultDescription}>
              {mode.description}
            </ThemedText>
          </Pressable>
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.one,
    borderRadius: Spacing.two,
    flexDirection: 'row',
    gap: Spacing.one,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  option: {
    flex: 1,
    minHeight: 58,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.half,
  },
  selectedOption: {
    backgroundColor: BrandColors.navy,
  },
  defaultText: {
    color: BrandColors.navy,
  },
  selectedText: {
    color: '#FFFFFF',
  },
  defaultDescription: {
    color: '#6E7784',
  },
  selectedDescription: {
    color: '#D7F4F8',
  },
});
