import {
  CardList,
  InfoCard,
  MainScreen,
  SectionHeading,
  StatCard,
  StatGrid,
} from '@/components/main-screen';
import { ThemedText } from '@/components/themed-text';

const appointmentStats = [
  { label: 'Scheduled', value: '3' },
  { label: 'Completed', value: '8' },
  { label: 'Missed', value: '0' },
];

const appointments = [
  {
    title: 'Wire adjustment',
    when: 'May 29 - 10:00 AM',
    location: 'Ortho Care Clinic',
    status: 'Upcoming',
  },
  {
    title: 'Bracket check',
    when: 'Jun 26 - 9:30 AM',
    location: 'Ortho Care Clinic',
    status: 'Upcoming',
  },
  {
    title: 'Elastic review',
    when: 'Apr 5 - 9:00 AM',
    location: 'Ortho Care Clinic',
    status: 'Completed',
  },
];

export default function AppointmentsScreen() {
  return (
    <MainScreen
      title="Appointments"
      subtitle="Keep your orthodontist visits, adjustment notes, and follow-up reminders organized.">
      <StatGrid>
        {appointmentStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </StatGrid>

      <SectionHeading>Schedule</SectionHeading>
      <CardList>
        {appointments.map((appointment) => (
          <InfoCard
            key={`${appointment.title}-${appointment.when}`}
            title={appointment.title}
            meta={appointment.when}
            description={appointment.location}>
            <ThemedText
              type="smallBold"
              themeColor={appointment.status === 'Upcoming' ? 'text' : 'textSecondary'}>
              {appointment.status}
            </ThemedText>
          </InfoCard>
        ))}
      </CardList>

      <InfoCard
        title="Appointment prep"
        description="Bring your elastics, note any poking wire spots, and choose your next braces color before the visit."
      />
    </MainScreen>
  );
}
