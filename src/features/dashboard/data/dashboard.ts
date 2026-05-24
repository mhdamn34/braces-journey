import type { ChartPoint, DashboardTask, TreatmentSummary } from '@/features/dashboard/types';
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

export const alignmentProgress: ChartPoint[] = [
  { label: 'Feb', value: 18 },
  { label: 'Mar', value: 30 },
  { label: 'Apr', value: 44 },
  { label: 'May', value: 58 },
  { label: 'Jun', value: 68 },
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
