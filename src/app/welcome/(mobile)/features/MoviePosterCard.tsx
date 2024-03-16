import { SpotlightCardProps } from '@lobehub/ui';
import { memo } from 'react';
import 'src/styles/tailwind.css';

const MoviePosterCard = memo<SpotlightCardProps>(({ items, renderItem }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-5 w-full p-2.5 box-border overflow-hidden animate-scale">
      {items.map((item, index) => {
        const children = renderItem(item);
        return (
          <div
            className="relative w-[78px] h-[117px] rounded-xl shadow-[0_2px_11px_rgba(0,0,0,0.7)] filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer transform-preserve-3d transition-transform duration-300 hover:shadow-[0_0_5px_#999] hover:scale-110 hover:-translate-y-[1.5%] movie"
            key={index}
          >
            {children}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl transition-opacity duration-300 opacity-0 hover:opacity-100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-xl before:bg-gradient-to-r before:from-[rgba(255,255,255,0.1)] before:via-[rgba(255,255,255,0.305)] before:to-[rgba(128,186,232,0.1)] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-gradient-to-r after:from-[rgba(255,255,255,0.1)] after:via-[rgba(255,255,255,0.305)] after:to-[rgba(128,186,232,0.1)] after:opacity-0 hover:after:opacity-100"></div>
            <img
              alt={item.title}
              className="w-full h-auto rounded-xl object-cover transition-[width,height] duration-300"
              src={item.image}
            />
          </div>
        );
      })}
    </div>
  );
});

export default MoviePosterCard;
