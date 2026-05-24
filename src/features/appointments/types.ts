export type AppointmentStatus = 'Upcoming' | 'Completed' | 'Missed';

export type AppointmentDateOption = {
  id: string;
  day: string;
  date: string;
  month: string;
  label: string;
};

export type AppointmentTimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export type Appointment = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: AppointmentStatus;
};
