import type {
  CartoonMapPoint,
  PhotoAnalysisSummary,
  PhotoLog,
} from '@/features/progress-gallery/types';

export const photoLogs: PhotoLog[] = [
  {
    id: 'may-2026',
    month: 'May',
    capturedAt: 'May 24',
    note: 'After wire adjustment',
    status: 'Cartoon mapped',
    analysisScore: 82,
    tone: 'pink',
  },
  {
    id: 'apr-2026',
    month: 'Apr',
    capturedAt: 'Apr 5',
    note: 'Elastic routine started',
    status: 'Analyzed',
    analysisScore: 74,
    tone: 'blue',
  },
  {
    id: 'mar-2026',
    month: 'Mar',
    capturedAt: 'Mar 2',
    note: 'Initial alignment check',
    status: 'Analyzed',
    analysisScore: 61,
    tone: 'teal',
  },
  {
    id: 'feb-2026',
    month: 'Feb',
    capturedAt: 'Feb 1',
    note: 'Braces fitted',
    status: 'Baseline',
    analysisScore: 42,
    tone: 'blue',
  },
];

export const latestPhotoAnalysis: PhotoAnalysisSummary = {
  latestMonth: 'May',
  confidence: 82,
  metrics: [
    {
      label: 'Alignment',
      value: 68,
      detail: 'Upper front teeth moving into line',
      tone: 'teal',
    },
    {
      label: 'Spacing',
      value: 54,
      detail: 'Lower right gap closing steadily',
      tone: 'blue',
    },
    {
      label: 'Smile arc',
      value: 72,
      detail: 'Curve is more balanced than baseline',
      tone: 'pink',
    },
  ],
};

export const cartoonMapPoints: CartoonMapPoint[] = [
  {
    id: 'upper-left-crowding',
    label: 'Upper left crowding',
    row: 'upper',
    toothIndex: 1,
    value: 68,
    tone: 'teal',
  },
  {
    id: 'midline',
    label: 'Midline tracking',
    row: 'upper',
    toothIndex: 3,
    value: 54,
    tone: 'blue',
  },
  {
    id: 'lower-right-spacing',
    label: 'Lower right spacing',
    row: 'lower',
    toothIndex: 5,
    value: 72,
    tone: 'pink',
  },
];
