import { Redirect, type Href } from 'expo-router';

export default function SettingsScreen() {
  return <Redirect href={'/more' as Href} />;
}
