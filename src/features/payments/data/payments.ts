import type { PaymentMethod } from '@/features/payments/types';
import { formatCurrency } from '@/utils/format-currency';

export const paymentSummary = {
  paid: 1120,
  remaining: 480,
  nextDue: 72,
  total: 1600,
};

export const paymentStats = [
  { label: 'Paid', value: formatCurrency(paymentSummary.paid, { showCents: false }) },
  { label: 'Remaining', value: formatCurrency(paymentSummary.remaining, { showCents: false }) },
  { label: 'Next due', value: formatCurrency(paymentSummary.nextDue, { showCents: false }) },
];

export const payments = [
  {
    title: 'Monthly treatment payment',
    due: 'Jun 10',
    amount: 72,
    status: 'Due soon',
  },
  {
    title: 'Elastics and supplies',
    due: 'May 10',
    amount: 24,
    status: 'Paid',
  },
  {
    title: 'Adjustment visit',
    due: 'Apr 5',
    amount: 96,
    status: 'Paid',
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'cash',
    label: 'Cash',
    shortLabel: 'RM',
    description: 'Pay at clinic counter',
  },
  {
    id: 'qrpay',
    label: 'QRPay',
    shortLabel: 'QR',
    description: 'Scan and pay instantly',
  },
  {
    id: 'credit-card',
    label: 'Credit Card',
    shortLabel: 'CC',
    description: 'Visa or Mastercard',
  },
];
