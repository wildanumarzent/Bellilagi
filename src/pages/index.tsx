import Home from '@/components/PageGroups/Home';
import { getLayout } from '@/layouts';
// import { Analytics } from '@vercel/analytics/react';

const Homepage = () => {
  return <Home />
};

Homepage.getLayout = getLayout;

export default Homepage;
