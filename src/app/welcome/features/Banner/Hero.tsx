import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import 'src/styles/tailwind.css';

// Importing tailwind CSS
import { genSize } from './style';

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

  const { t } = useTranslation('welcome');

  const logoSrc = '/icons/sx-full-logo.png';

  return (
    <>
      <Flexbox
        className={`relative ${mobile ? 'mt-[calc(-1*size.logo/9)] mb-[calc(-1*size.logo/9)]' : 'mt-[calc(-1*size.logo/3)] mb-[calc(-1*size.logo/4)]'}`}
      >
        {isClient &&
          (mobile ? (
            <Image
              alt="Custom Logo"
              className="animate-pop"
              height={size.logo / 2}
              src={logoSrc}
              width={size.logo / 2}
            />
          ) : (
            <Image
              alt="Custom Logo Spline"
              className="max-w-[50%] max-h-[50%] animate-pop"
              layout="fill"
              objectFit="cover"
              src={logoSrc}
            />
          ))}
      </Flexbox>
      {/* The following divs are related to the "text-center" class that might be of interest for relocation or modification. 
      Consider moving or commenting them out as per the requirement in the Showcase.tsx or another relevant file. */}
      {/* <div className={`text-center ${mobile ? 'text-[calc(size.title*1.2)]' : 'text-[size.title]'} font-bold`}>
        {t('slogan.title')}
      </div>
      <div className={`text-center text-[size.desc]`}>
        {t('slogan.desc1')}
      </div> */}
    </>
  );
});

export default Hero;
