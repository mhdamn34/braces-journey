export type DashboardMetric = {
  label: string;
  value: string;
  helper: string;
};

export type ChartPoint = {
  label: string;
  value: number;
};

export type DashboardTask = {
  title: string;
  description: string;
};

export type TreatmentSummary = {
  patientName: string;
  currentStage: string;
  progressPercent: number;
  monthsCompleted: number;
  monthsTotal: number;
  nextAppointment: string;
};
