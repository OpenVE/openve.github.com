import React from 'react';

type ContentFrameProps = {
  children: JSX.Element | JSX.Element[];
}

function ContentFrame({ children }: ContentFrameProps): JSX.Element {
  return (
    <main className="flex flex-wrap">
      <div className="w-0 sm:w-0 md:w-0 lg:w-0 xl:w-1/6 h-12"></div>
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-4/6 h-12">
        {children}
      </div>
      <div className="w-0 sm:w-0 md:w-0 lg:w-0 xl:w-1/6 h-12"></div>
    </main>
  );
}

export default ContentFrame;
