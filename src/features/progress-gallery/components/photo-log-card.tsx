import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BrandColors, Spacing } from '@/constants/theme';
import type { AnalysisTone, PhotoLog } from '@/features/progress-gallery/types';

type PhotoLogCardProps = {
  log: PhotoLog;
};

const toneColors: Record<AnalysisTone, string> = {
  teal: BrandColors.teal,
  blue: BrandColors.blue,
  pink: BrandColors.pink,
};

export function PhotoLogCard({ log }: PhotoLogCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={[styles.thumbnail, { borderColor: toneColors[log.tone] }]}>
        <View style={styles.thumbnailSmile}>
          <View style={[styles.thumbnailBracket, { backgroundColor: toneColors[log.tone] }]} />
          <View style={[styles.thumbnailBracket, { backgroundColor: BrandColors.blue }]} />
          <View style={[styles.thumbnailBracket, { backgroundColor: BrandColors.pink }]} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <ThemedText type="smallBold">{log.month} progress</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {log.capturedAt}
          </ThemedText>
        </View>
        <ThemedText type="small" themeColor="textSecondary">
          {log.note}
        </ThemedText>
        <View style={styles.footerRow}>
          <View style={styles.statusBadge}>
            <ThemedText
              type="smallBold"
              style={[styles.statusText, { color: toneColors[log.tone] }]}>
              {log.status}
            </ThemedText>
          </View>
          <ThemedText type="smallBold">{log.analysisScore}%</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
    flexDirection: 'row',
    gap: Spacing.three,
    shadowColor: '#0B2A5B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  thumbnail: {
    width: 82,
    height: 82,
    borderRadius: Spacing.two,
    borderWidth: 2,
    backgroundColor: '#F4FAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailSmile: {
    width: 58,
    height: 32,
    borderBottomWidth: 3,
    borderColor: BrandColors.teal,
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
  },
  thumbnailBracket: {
    width: 10,
    height: 10,
    borderRadius: 3,
  },
  content: {
    flex: 1,
    gap: Spacing.two,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  statusBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
    backgroundColor: '#F0F6FA',
  },
  statusText: {
    fontSize: 12,
  },
});
