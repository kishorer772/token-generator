import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: window.innerWidth < 768 ? '90vw' : '60vw',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
}
