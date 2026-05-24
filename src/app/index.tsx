import {
  CardList,
  InfoCard,
  MainScreen,
  SectionHeading,
  StatCard,
  StatGrid,
} from '@/components/main-screen';
import { DashboardHeaderCard } from '@/features/dashboard/components/dashboard-header-card';
import { MetricBarChart } from '@/features/dashboard/components/metric-bar-chart';
import { PainTrendCard } from '@/features/dashboard/components/pain-trend-card';
import {
  alignmentProgress,
  dashboardMetrics,
  painTrend,
  todayTasks,
  treatmentSummary,
} from '@/features/dashboard/data/dashboard';

export default function DashboardScreen() {
  return (
    <MainScreen
      title="Dashboard"
      subtitle="Track appointments, progress photos, braces colors, notes, and payments in one place."
      hideHeader>
      <DashboardHeaderCard summary={treatmentSummary} />

      <StatGrid>
        {dashboardMetrics.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} helper={stat.helper} />
        ))}
      </StatGrid>

      <MetricBarChart
        title="Alignment progress"
        description="Monthly movement score"
        data={alignmentProgress}
      />

      <PainTrendCard data={painTrend} />

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
