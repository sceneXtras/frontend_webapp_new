import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<Logo type={undefined} />} right={<ShareAgentButton mobile />} />;
});

export default Header;
