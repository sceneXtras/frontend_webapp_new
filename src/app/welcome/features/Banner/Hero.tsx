import { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { genSize, useStyles } from './style';

const Hero = memo<{ mobile?: boolean; width: number }>(({ width, mobile }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const size: any = {
    base: genSize(width / 3.5, 240),
    desc: genSize(width / 50, 14),
    logo: genSize(width / 2.5, 180),
    title: genSize(width / 20, 32),
  };

  size.marginTop = mobile ? -size.logo / 9 : -size.logo / 3;
  size.marginBottom = mobile ? -size.logo / 9 : -size.logo / 4;

  const { styles } = useStyles(size.base);

  const { t } = useTranslation('welcome');

  const logoSrc = '/icons/sx-full-logo.png';
  
  return (
    <>
      <Flexbox
        style={{
          height: size.logo / 8, // Adjusted the height to be half the size of the logo
          marginBottom: size.marginBottom,
          marginTop: size.marginTop,
          position: 'relative',
        }}
      >
        {isClient && (
          mobile ? 
            <Image src={logoSrc} alt="Custom Logo" width={size.logo / 2} height={size.logo / 2} /> : 
            <Image src={logoSrc} alt="Custom Logo Spline" layout="fill" objectFit="cover" style={{maxWidth: '50%', maxHeight: '50%'}} />
        )}
      </Flexbox>
      <div className={styles.title} style={{ fontSize: size.title }}>
        <strong style={mobile ? { fontSize: '1.2em' } : {}}></strong>
        {mobile ? <br /> : ' '}
        {t('slogan.title')}
      </div>
      <div className={styles.desc} style={{ fontSize: size.desc }}>
        {t('slogan.desc1')}
      </div>
    </>
  );
});

export default Hero;