import { useState } from 'react';

import {
  CardList,
  InfoCard,
  MainScreen,
  SectionHeading,
  StatCard,
  StatGrid,
} from '@/components/main-screen';
import { AppointmentCard } from '@/features/appointments/components/appointment-card';
import { AppointmentPickerCard } from '@/features/appointments/components/appointment-picker-card';
import {
  appointmentDateOptions,
  appointments,
  appointmentStats,
  appointmentTimeSlots,
} from '@/features/appointments/data/appointments';

export default function AppointmentsScreen() {
  const [selectedDateId, setSelectedDateId] = useState(appointmentDateOptions[0].id);
  const [selectedTimeId, setSelectedTimeId] = useState(appointmentTimeSlots[1].id);

  return (
    <MainScreen
      title="Appointments"
      subtitle="Choose a visit date and time, then keep each appointment status easy to scan.">
      <StatGrid>
        {appointmentStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </StatGrid>

      <AppointmentPickerCard
        dates={appointmentDateOptions}
        times={appointmentTimeSlots}
        selectedDateId={selectedDateId}
        selectedTimeId={selectedTimeId}
        onSelectDate={setSelectedDateId}
        onSelectTime={setSelectedTimeId}
      />

      <SectionHeading>Schedule</SectionHeading>
      <CardList>
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </CardList>

      <InfoCard
        title="Appointment prep"
        description="Bring your elastics, note any poking wire spots, and choose your next braces color before the visit."
      />
    </MainScreen>
  );
}
