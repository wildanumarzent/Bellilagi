import React from 'react';

import type { PagePropsWithChildren } from '@/types/pages';

const Fullscreen = ({ children }: PagePropsWithChildren) => {
  return <div className="w-full min-h-screen">{children}</div>;
};

export default Fullscreen;
