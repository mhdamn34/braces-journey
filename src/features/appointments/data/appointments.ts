import type {
  Appointment,
  AppointmentDateOption,
  AppointmentTimeSlot,
} from '@/features/appointments/types';

export const appointmentStats = [
  { label: 'Scheduled', value: '3' },
  { label: 'Completed', value: '8' },
  { label: 'Missed', value: '0' },
];

export const appointmentDateOptions: AppointmentDateOption[] = [
  { id: 'may-29', day: 'Fri', date: '29', month: 'May', label: 'May 29' },
  { id: 'jun-05', day: 'Fri', date: '05', month: 'Jun', label: 'Jun 5' },
  { id: 'jun-12', day: 'Fri', date: '12', month: 'Jun', label: 'Jun 12' },
  { id: 'jun-26', day: 'Fri', date: '26', month: 'Jun', label: 'Jun 26' },
];

export const appointmentTimeSlots: AppointmentTimeSlot[] = [
  { id: '0900', time: '9:00 AM', available: true },
  { id: '1000', time: '10:00 AM', available: true },
  { id: '1130', time: '11:30 AM', available: false },
  { id: '1430', time: '2:30 PM', available: true },
];

export const appointments: Appointment[] = [
  {
    id: 'wire-adjustment',
    title: 'Wire adjustment',
    date: 'May 29',
    time: '10:00 AM',
    location: 'Ortho Care Clinic',
    status: 'Upcoming',
  },
  {
    id: 'bracket-check',
    title: 'Bracket check',
    date: 'Jun 26',
    time: '9:30 AM',
    location: 'Ortho Care Clinic',
    status: 'Upcoming',
  },
  {
    id: 'elastic-review',
    title: 'Elastic review',
    date: 'Apr 5',
    time: '9:00 AM',
    location: 'Ortho Care Clinic',
    status: 'Completed',
  },
];
