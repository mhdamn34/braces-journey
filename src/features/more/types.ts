export type ProfileStat = {
  label: string;
  value: string;
};

export type ProfileSummary = {
  name: string;
  handle: string;
  clinic: string;
  treatmentStage: string;
  nextVisit: string;
  stats: ProfileStat[];
};

export type MoreAction = {
  id: string;
  label: string;
  description: string;
  tone: 'teal' | 'blue' | 'pink' | 'green';
};
