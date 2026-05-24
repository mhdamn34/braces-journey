export type AnalysisTone = 'teal' | 'blue' | 'pink';

export type PhotoLog = {
  id: string;
  month: string;
  capturedAt: string;
  note: string;
  status: string;
  analysisScore: number;
  tone: AnalysisTone;
};

export type AnalysisMetric = {
  label: string;
  value: number;
  detail: string;
  tone: AnalysisTone;
};

export type PhotoAnalysisSummary = {
  latestMonth: string;
  confidence: number;
  metrics: AnalysisMetric[];
};

export type CartoonMapPoint = {
  id: string;
  label: string;
  row: 'upper' | 'lower';
  toothIndex: number;
  value: number;
  tone: AnalysisTone;
};
