import type {
  ChartPoint,
  DashboardFocusPanel,
  DashboardMode,
  DashboardModeOption,
  DashboardTask,
  TreatmentSummary,
} from '@/features/dashboard/types';
import { formatCurrency } from '@/utils/format-currency';

export const treatmentSummary: TreatmentSummary = {
  patientName: 'Amin',
  currentStage: 'Alignment phase',
  progressPercent: 68,
  monthsCompleted: 12,
  monthsTotal: 18,
  nextAppointment: 'May 29, 10:00 AM',
};

export const dashboardMetrics = [
  { label: 'Treatment', value: `${treatmentSummary.progressPercent}%`, helper: 'complete' },
  { label: 'Photos', value: '5', helper: 'monthly logs' },
  { label: 'Next bill', value: formatCurrency(72, { showCents: false }), helper: 'due Jun 10' },
  { label: 'Pain', value: '2/10', helper: 'today' },
];

export const dashboardModes: DashboardModeOption[] = [
  { id: 'overview', label: 'Overview', description: 'Progress' },
  { id: 'comfort', label: 'Comfort', description: 'Pain' },
  { id: 'money', label: 'Money', description: 'Payments' },
];

export const dashboardFocusPanels: Record<DashboardMode, DashboardFocusPanel> = {
  overview: {
    title: 'Treatment pace',
    value: '68%',
    helper: 'Alignment is ahead of the planned monthly pace.',
    badge: 'On track',
    tone: 'teal',
    facts: ['5 photo logs', '3 appointments booked', 'Blue ligatures'],
  },
  comfort: {
    title: 'Comfort score',
    value: '2/10',
    helper: 'Pain trend is improving after the last adjustment.',
    badge: 'Stable',
    tone: 'blue',
    facts: ['Mild soreness', 'Elastics routine active', 'No urgent notes'],
  },
  money: {
    title: 'Next payment',
    value: formatCurrency(72, { showCents: false }),
    helper: 'Monthly treatment payment due on Jun 10.',
    badge: 'Due soon',
    tone: 'pink',
    facts: ['RM 1,120 paid', 'RM 480 remaining', 'QRPay ready'],
  },
};

export const alignmentProgress: ChartPoint[] = [
  { label: 'Feb', value: 18 },
  { label: 'Mar', value: 30 },
  { label: 'Apr', value: 44 },
  { label: 'May', value: 58 },
  { label: 'Jun', value: 68 },
];

export const paymentProgress: ChartPoint[] = [
  { label: 'Feb', value: 18 },
  { label: 'Mar', value: 32 },
  { label: 'Apr', value: 48 },
  { label: 'May', value: 62 },
  { label: 'Jun', value: 70 },
];

export const painTrend: ChartPoint[] = [
  { label: 'Mon', value: 5 },
  { label: 'Tue', value: 4 },
  { label: 'Wed', value: 4 },
  { label: 'Thu', value: 3 },
  { label: 'Fri', value: 2 },
  { label: 'Sat', value: 2 },
  { label: 'Sun', value: 2 },
];

export const todayTasks: DashboardTask[] = [
  {
    title: 'Next appointment',
    description: `Wire adjustment on ${treatmentSummary.nextAppointment}.`,
  },
  {
    title: 'Current braces color',
    description: 'Silver brackets with blue ligatures.',
  },
  {
    title: 'Comfort note',
    description: 'Mild soreness after elastics. Keep tracking pain level nightly.',
  },
];
