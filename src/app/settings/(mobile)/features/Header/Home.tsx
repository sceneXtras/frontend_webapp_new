import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

const Header = memo(() => {
  // This is where the logo is shown
  return <MobileNavBar center={<Logo type={'undefined'} />} />;
});

export default Header;
