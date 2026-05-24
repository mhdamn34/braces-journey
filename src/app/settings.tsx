import { CardList, InfoCard, MainScreen, SectionHeading } from '@/components/main-screen';

const reminderSettings = [
  {
    title: 'Appointment reminders',
    description: 'Notify 24 hours before each orthodontist visit.',
  },
  {
    title: 'Monthly progress photo',
    description: 'Prompt on the first Sunday after an appointment.',
  },
  {
    title: 'Payment reminders',
    description: 'Alert 3 days before each due date.',
  },
];

const accountSettings = [
  {
    title: 'Treatment profile',
    description: 'Braces fitted in February with an estimated 6 months remaining.',
  },
  {
    title: 'Storage',
    description: 'Photos are stored locally during development.',
  },
];

export default function SettingsScreen() {
  return (
    <MainScreen
      title="Settings"
      subtitle="Manage reminders, treatment details, storage preferences, and app defaults.">
      <SectionHeading>Reminders</SectionHeading>
      <CardList>
        {reminderSettings.map((setting) => (
          <InfoCard key={setting.title} title={setting.title} description={setting.description} />
        ))}
      </CardList>

      <SectionHeading>Account</SectionHeading>
      <CardList>
        {accountSettings.map((setting) => (
          <InfoCard key={setting.title} title={setting.title} description={setting.description} />
        ))}
      </CardList>
    </MainScreen>
  );
}
