export type PaymentMethodId = 'cash' | 'qrpay' | 'credit-card';

export type PaymentMethod = {
  id: PaymentMethodId;
  label: string;
  shortLabel: string;
  description: string;
};
