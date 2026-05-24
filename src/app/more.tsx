import { CardList, InfoCard, MainScreen, SectionHeading } from '@/components/main-screen';
import { MoreActionGrid } from '@/features/more/components/more-action-grid';
import { ProfileSummaryCard } from '@/features/more/components/profile-summary-card';
import { moreActions, profileSummary } from '@/features/more/data/more';

export default function MoreScreen() {
  return (
    <MainScreen
      title="More"
      subtitle="Profile, reminders, braces colors, storage, and app preferences.">
      <ProfileSummaryCard profile={profileSummary} />

      <SectionHeading>Shortcuts</SectionHeading>
      <MoreActionGrid actions={moreActions} />

      <SectionHeading>Settings</SectionHeading>
      <CardList>
        <InfoCard
          title="Appointment reminders"
          description="Notify 24 hours before each orthodontist visit."
        />
        <InfoCard
          title="Monthly progress photo"
          description="Prompt on the first Sunday after an appointment."
        />
        <InfoCard title="Payment reminders" description="Alert 3 days before each due date." />
      </CardList>
    </MainScreen>
  );
}
