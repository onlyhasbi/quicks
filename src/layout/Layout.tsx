import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="grid grid-cols-[17.8rem_1fr] bg-[#333333] min-h-screen">
      <Sidebar />
      <div className="relative">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default Layout;
