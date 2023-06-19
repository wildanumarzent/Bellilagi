// Component
import Header from '@/components/Header/HeaderDefault';
// Type
import type { PagePropsWithChildren } from '@/types/pages';

export const Main = ({ children }: PagePropsWithChildren) => {
  return (
    <div className="flex-1">
      <Header />
      <div className="pt-[5rem] lg:pt-[10rem] w-full" style={{ minHeight: '100vh' }}>
        <div className="px-5 lg:px-20">{children}</div>
      </div>
    </div>
  );
};

export default Main;
