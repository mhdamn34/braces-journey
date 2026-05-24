import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { Appointment, AppointmentStatus } from '@/features/appointments/types';

type AppointmentCardProps = {
  appointment: Appointment;
};

const statusColors: Record<AppointmentStatus, { background: string; text: string }> = {
  Upcoming: { background: '#E7F8FA', text: BrandColors.teal },
  Completed: { background: '#EAF7EF', text: BrandColors.green },
  Missed: { background: '#FCE8F6', text: BrandColors.pink },
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const statusColor = statusColors[appointment.status];

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.content}>
        <ThemedText type="smallBold">{appointment.title}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {appointment.date} - {appointment.time}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {appointment.location}
        </ThemedText>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: statusColor.background }]}>
        <ThemedText type="smallBold" style={{ color: statusColor.text }}>
          {appointment.status}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  content: {
    flex: 1,
    gap: Spacing.half,
  },
  statusBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
  },
});
