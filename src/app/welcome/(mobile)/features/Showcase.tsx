import animationData from 'public/lotties/Siri_like_animation.json';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import Lottie from 'react-lottie';
import 'src/styles/tailwind.css';

import Banner from '@/app/welcome/features/Banner';

const Showcase = memo(() => {
  const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flexbox align={'center'} justify={'center'} style={{ height: 'calc(50% - 30px)' }}>
      <Center gap={2}>
        <Banner mobile />
      </Center>
      {/*TODO: Temporarily hidden, to be added back once the template is complete*/}
      {/*<AgentTemplate width={width} />*/}
      <div
        aria-label="SceneGPT Animated Orb"
        className="fixed bottom-[70vh] right-[50px] transform -translate-y-[50%] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-revert shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
      >
        <Lottie height={30} options={defaultOptions} width={30} />
      </div>
    </Flexbox>
  );
});

export default Showcase;
