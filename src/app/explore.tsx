import { Redirect, type Href } from 'expo-router';

export default function ExploreScreen() {
  return <Redirect href={'/journey-timeline' as Href} />;
}
