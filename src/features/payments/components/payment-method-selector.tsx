import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { PaymentMethod, PaymentMethodId } from '@/features/payments/types';

type PaymentMethodSelectorProps = {
  methods: PaymentMethod[];
  selectedMethodId: PaymentMethodId;
  onSelectMethod: (methodId: PaymentMethodId) => void;
};

export function PaymentMethodSelector({
  methods,
  selectedMethodId,
  onSelectMethod,
}: PaymentMethodSelectorProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.header}>
        <ThemedText type="smallBold">Payment method</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Choose how you want to pay the next bill
        </ThemedText>
      </View>

      <View style={styles.methodGrid}>
        {methods.map((method) => {
          const isSelected = method.id === selectedMethodId;

          return (
            <Pressable
              key={method.id}
              onPress={() => onSelectMethod(method.id)}
              style={[styles.methodCard, isSelected && styles.selectedMethodCard]}>
              <View style={[styles.methodIcon, isSelected && styles.selectedMethodIcon]}>
                <ThemedText
                  type="smallBold"
                  style={isSelected ? styles.selectedIconText : styles.iconText}>
                  {method.shortLabel}
                </ThemedText>
              </View>
              <ThemedText
                type="smallBold"
                style={isSelected ? styles.selectedMethodText : styles.methodText}>
                {method.label}
              </ThemedText>
              <ThemedText
                type="small"
                style={isSelected ? styles.selectedDescription : styles.description}>
                {method.description}
              </ThemedText>
            </Pressable>
          );
        })}
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
  methodGrid: {
    gap: Spacing.two,
  },
  methodCard: {
    minHeight: 82,
    borderRadius: Spacing.two,
    borderWidth: 1,
    borderColor: '#DCE6F2',
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    backgroundColor: '#FFFFFF',
  },
  selectedMethodCard: {
    borderColor: BrandColors.teal,
    backgroundColor: '#E7F8FA',
  },
  methodIcon: {
    width: 44,
    height: 44,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF4FA',
  },
  selectedMethodIcon: {
    backgroundColor: BrandColors.teal,
  },
  iconText: {
    color: BrandColors.navy,
  },
  selectedIconText: {
    color: '#FFFFFF',
  },
  methodText: {
    width: 86,
    color: BrandColors.navy,
  },
  selectedMethodText: {
    width: 86,
    color: BrandColors.teal,
  },
  description: {
    flex: 1,
    color: '#6E7784',
  },
  selectedDescription: {
    flex: 1,
    color: '#287E86',
  },
});
