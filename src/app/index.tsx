import { useState } from 'react';

import {
  CardList,
  InfoCard,
  MainScreen,
  SectionHeading,
  StatCard,
  StatGrid,
} from '@/components/main-screen';
import { DashboardFocusCard } from '@/features/dashboard/components/dashboard-focus-card';
import { DashboardHeaderCard } from '@/features/dashboard/components/dashboard-header-card';
import { DashboardModeSwitcher } from '@/features/dashboard/components/dashboard-mode-switcher';
import { MetricBarChart } from '@/features/dashboard/components/metric-bar-chart';
import { PainTrendCard } from '@/features/dashboard/components/pain-trend-card';
import {
  alignmentProgress,
  dashboardFocusPanels,
  dashboardMetrics,
  dashboardModes,
  painTrend,
  paymentProgress,
  todayTasks,
  treatmentSummary,
} from '@/features/dashboard/data/dashboard';
import type { DashboardMode } from '@/features/dashboard/types';

export default function DashboardScreen() {
  const [selectedMode, setSelectedMode] = useState<DashboardMode>('overview');
  const selectedPanel = dashboardFocusPanels[selectedMode];

  return (
    <MainScreen
      title="Dashboard"
      subtitle="Track appointments, progress photos, braces colors, notes, and payments in one place."
      hideHeader>
      <DashboardHeaderCard summary={treatmentSummary} />

      <DashboardModeSwitcher
        modes={dashboardModes}
        selectedMode={selectedMode}
        onSelectMode={setSelectedMode}
      />

      <DashboardFocusCard panel={selectedPanel} />

      <StatGrid>
        {dashboardMetrics.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} helper={stat.helper} />
        ))}
      </StatGrid>

      {selectedMode === 'comfort' ? (
        <PainTrendCard data={painTrend} />
      ) : (
        <MetricBarChart
          title={selectedMode === 'money' ? 'Payment pace' : 'Alignment progress'}
          description={
            selectedMode === 'money' ? 'Paid treatment balance' : 'Monthly movement score'
          }
          data={selectedMode === 'money' ? paymentProgress : alignmentProgress}
        />
      )}

      <SectionHeading>Today</SectionHeading>
      <CardList>
        {todayTasks.map((item) => (
          <InfoCard key={item.title} title={item.title} description={item.description} />
        ))}
      </CardList>

      <InfoCard
        title="Reminder"
        description="Add a progress photo after each appointment so your gallery stays easy to compare month by month."
      />
    </MainScreen>
  );
}
