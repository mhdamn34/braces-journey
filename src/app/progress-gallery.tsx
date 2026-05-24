import { CardList, InfoCard, MainScreen, SectionHeading } from '@/components/main-screen';
import { CartoonSmileMap } from '@/features/progress-gallery/components/cartoon-smile-map';
import { PhotoAnalysisCard } from '@/features/progress-gallery/components/photo-analysis-card';
import { PhotoLogCard } from '@/features/progress-gallery/components/photo-log-card';
import {
  cartoonMapPoints,
  latestPhotoAnalysis,
  photoLogs,
} from '@/features/progress-gallery/data/progress-gallery';

export default function ProgressGalleryScreen() {
  return (
    <MainScreen
      title="Progress Gallery"
      subtitle="Compare monthly braces photos, review analysis, and translate progress into a cartoon smile map.">
      <PhotoAnalysisCard summary={latestPhotoAnalysis} />

      <CartoonSmileMap points={cartoonMapPoints} />

      <SectionHeading>Photo log</SectionHeading>
      <CardList>
        {photoLogs.map((log) => (
          <PhotoLogCard key={log.id} log={log} />
        ))}
      </CardList>

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
