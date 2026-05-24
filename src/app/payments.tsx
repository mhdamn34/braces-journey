import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  CardList,
  InfoCard,
  MainScreen,
  SectionHeading,
  StatCard,
  StatGrid,
} from '@/components/main-screen';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { PaymentMethodSelector } from '@/features/payments/components/payment-method-selector';
import {
  paymentMethods,
  paymentStats,
  paymentSummary,
  payments,
} from '@/features/payments/data/payments';
import type { PaymentMethodId } from '@/features/payments/types';
import { formatCurrency } from '@/utils/format-currency';

export default function PaymentsScreen() {
  const [selectedMethodId, setSelectedMethodId] = useState<PaymentMethodId>('qrpay');
  const paidPercent = Math.round((paymentSummary.paid / paymentSummary.total) * 100);
  const selectedMethod = paymentMethods.find((method) => method.id === selectedMethodId);

  return (
    <MainScreen
      title="Payments"
      subtitle="Track treatment payments, upcoming balances, and paid orthodontic expenses.">
      <StatGrid>
        {paymentStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </StatGrid>

      <InfoCard
        title="Treatment plan progress"
        description={`${formatCurrency(paymentSummary.paid, {
          showCents: false,
        })} paid out of ${formatCurrency(paymentSummary.total, { showCents: false })}.`}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${paidPercent}%` }]} />
        </View>
      </InfoCard>

      <PaymentMethodSelector
        methods={paymentMethods}
        selectedMethodId={selectedMethodId}
        onSelectMethod={setSelectedMethodId}
      />

      <InfoCard
        title="Selected method"
        description={`${selectedMethod?.label} - ${selectedMethod?.description}`}
      />

      <SectionHeading>Payment timeline</SectionHeading>
      <CardList>
        {payments.map((payment) => (
          <InfoCard
            key={`${payment.title}-${payment.due}`}
            title={payment.title}
            meta={payment.due}>
            <View style={styles.paymentRow}>
              <ThemedText type="default">{formatCurrency(payment.amount)}</ThemedText>
              <ThemedText
                type="smallBold"
                themeColor={payment.status === 'Paid' ? 'textSecondary' : 'text'}>
                {payment.status}
              </ThemedText>
            </View>
          </InfoCard>
        ))}
      </CardList>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  progressTrack: {
    height: Spacing.two,
    borderRadius: Spacing.two,
    overflow: 'hidden',
    backgroundColor: '#DDE7E3',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#208A6B',
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
});
