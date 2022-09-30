import { PagePropsWithChildren } from "@/types/pages";

const DefaultPageWrapper = ({ children }: PagePropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 p-4">
      {children}
    </div>
  );
};

export default DefaultPageWrapper;
