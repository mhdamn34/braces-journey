import { StyleSheet, View } from 'react-native';

import { CardList, InfoCard, MainScreen, SectionHeading } from '@/components/main-screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const galleryItems = [
  { month: 'May', note: 'After wire adjustment' },
  { month: 'Apr', note: 'Elastic routine started' },
  { month: 'Mar', note: 'Initial alignment check' },
  { month: 'Feb', note: 'Braces fitted' },
];

export default function ProgressGalleryScreen() {
  return (
    <MainScreen
      title="Progress Gallery"
      subtitle="Compare monthly braces photos and keep each image tied to appointment notes.">
      <SectionHeading>Monthly photos</SectionHeading>
      <View style={styles.galleryGrid}>
        {galleryItems.map((item, index) => (
          <ThemedView key={item.month} type="backgroundElement" style={styles.photoCard}>
            <View style={[styles.photoPlaceholder, index === 0 && styles.currentPhoto]}>
              <ThemedText type="smallBold">{item.month}</ThemedText>
            </View>
            <ThemedText type="smallBold">{item.month} progress</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {item.note}
            </ThemedText>
          </ThemedView>
        ))}
      </View>

      <SectionHeading>Capture checklist</SectionHeading>
      <CardList>
        <InfoCard
          title="Same angle"
          description="Use the same lighting, distance, and smile position for easier comparisons."
        />
        <InfoCard
          title="After appointments"
          description="Add a new photo after each adjustment so progress lines up with treatment changes."
        />
      </CardList>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  photoCard: {
    flexGrow: 1,
    flexBasis: 220,
    padding: Spacing.three,
    borderRadius: Spacing.two,
    gap: Spacing.two,
  },
  photoPlaceholder: {
    aspectRatio: 4 / 3,
    borderRadius: Spacing.two,
    backgroundColor: '#E4EEF8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentPhoto: {
    backgroundColor: '#DCEDE7',
  },
});
