import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
        {children}
        <footer>© 2024 Your Company. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
