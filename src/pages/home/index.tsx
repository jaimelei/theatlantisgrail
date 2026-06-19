import Hero from './components/Hero';
import SeriesPitch from './components/SeriesPitch';
import BookShowcase from './components/BookShowcase';
import WritingProgress from './components/WritingProgress';
import LatestNews from './components/LatestNews';
import CommunityConstellation from './components/CommunityConstellation';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SeriesPitch />
      <BookShowcase />
      <WritingProgress />
      <LatestNews />
      <CommunityConstellation />
    </div>
  );
}
