import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type {
  AppointmentDateOption,
  AppointmentTimeSlot,
} from '@/features/appointments/types';

type AppointmentPickerCardProps = {
  dates: AppointmentDateOption[];
  times: AppointmentTimeSlot[];
  selectedDateId: string;
  selectedTimeId: string;
  onSelectDate: (dateId: string) => void;
  onSelectTime: (timeId: string) => void;
};

export function AppointmentPickerCard({
  dates,
  times,
  selectedDateId,
  selectedTimeId,
  onSelectDate,
  onSelectTime,
}: AppointmentPickerCardProps) {
  const selectedDate = dates.find((date) => date.id === selectedDateId);
  const selectedTime = times.find((time) => time.id === selectedTimeId);

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.header}>
        <ThemedText type="smallBold">Book appointment</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {selectedDate?.label} at {selectedTime?.time}
        </ThemedText>
      </View>

      <View style={styles.dateRow}>
        {dates.map((date) => {
          const isSelected = date.id === selectedDateId;

          return (
            <Pressable
              key={date.id}
              onPress={() => onSelectDate(date.id)}
              style={[styles.dateButton, isSelected && styles.selectedDateButton]}>
              <ThemedText
                type="small"
                style={isSelected ? styles.selectedText : styles.mutedText}>
                {date.day}
              </ThemedText>
              <ThemedText
                type="subtitle"
                style={isSelected ? styles.selectedDateText : styles.dateText}>
                {date.date}
              </ThemedText>
              <ThemedText
                type="small"
                style={isSelected ? styles.selectedText : styles.mutedText}>
                {date.month}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.timeGrid}>
        {times.map((time) => {
          const isSelected = time.id === selectedTimeId;

          return (
            <Pressable
              key={time.id}
              disabled={!time.available}
              onPress={() => onSelectTime(time.id)}
              style={[
                styles.timeButton,
                isSelected && styles.selectedTimeButton,
                !time.available && styles.disabledTimeButton,
              ]}>
              <ThemedText
                type="smallBold"
                style={isSelected ? styles.selectedTimeText : styles.timeText}>
                {time.time}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
    gap: Spacing.three,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  header: {
    gap: Spacing.one,
  },
  dateRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  dateButton: {
    flex: 1,
    minHeight: 92,
    borderRadius: Spacing.two,
    borderWidth: 1,
    borderColor: '#DCE6F2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.half,
    backgroundColor: '#F7FBFF',
  },
  selectedDateButton: {
    backgroundColor: BrandColors.navy,
    borderColor: BrandColors.navy,
  },
  dateText: {
    fontSize: 24,
    lineHeight: 28,
    color: BrandColors.navy,
  },
  selectedDateText: {
    fontSize: 24,
    lineHeight: 28,
    color: '#FFFFFF',
  },
  mutedText: {
    color: '#778290',
  },
  selectedText: {
    color: '#D7F4F8',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  timeButton: {
    flexGrow: 1,
    flexBasis: '45%',
    minHeight: 42,
    borderRadius: Spacing.two,
    borderWidth: 1,
    borderColor: '#DCE6F2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedTimeButton: {
    borderColor: BrandColors.teal,
    backgroundColor: '#E7F8FA',
  },
  disabledTimeButton: {
    opacity: 0.4,
  },
  timeText: {
    color: BrandColors.navy,
  },
  selectedTimeText: {
    color: BrandColors.teal,
  },
});
