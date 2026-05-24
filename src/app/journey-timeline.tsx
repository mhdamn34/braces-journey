import { StyleSheet, View } from 'react-native';

import { CardList, InfoCard, MainScreen, SectionHeading } from '@/components/main-screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const timelineItems = [
  {
    date: 'May 24',
    title: 'Soreness improving',
    description: 'Pain level dropped from 4 to 2 after the last adjustment.',
    tag: 'Pain note',
  },
  {
    date: 'May 12',
    title: 'Blue ligatures selected',
    description: 'Color change logged with the monthly progress photo.',
    tag: 'Color',
  },
  {
    date: 'Apr 5',
    title: 'Elastic routine updated',
    description: 'Orthodontist recommended wearing elastics during the day and overnight.',
    tag: 'Treatment',
  },
];

const colorHistory = ['Blue', 'Silver', 'Green', 'Pink'];

export default function JourneyTimelineScreen() {
  return (
    <MainScreen
      title="Journey Timeline"
      subtitle="Review color changes, pain notes, treatment updates, and visible progress over time.">
      <SectionHeading>Recent updates</SectionHeading>
      <CardList>
        {timelineItems.map((item) => (
          <InfoCard
            key={`${item.date}-${item.title}`}
            title={item.title}
            meta={item.date}
            description={item.description}>
            <ThemedText type="smallBold" themeColor="textSecondary">
              {item.tag}
            </ThemedText>
          </InfoCard>
        ))}
      </CardList>

      <SectionHeading>Color history</SectionHeading>
      <View style={styles.colorRow}>
        {colorHistory.map((color) => (
          <ThemedView key={color} type="backgroundElement" style={styles.colorPill}>
            <ThemedText type="smallBold">{color}</ThemedText>
          </ThemedView>
        ))}
      </View>

      <InfoCard
        title="Monthly check-in"
        description="Log your comfort level and take a photo from the same angle after each adjustment."
      />
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  colorPill: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.two,
  },
});
