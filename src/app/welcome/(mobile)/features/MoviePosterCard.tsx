import { SpotlightCardProps } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css, token, isDarkMode }) => {
  const tokenWithBreakpoints = token as any;
  const maxWidth = tokenWithBreakpoints.breakpoints?.sm || 600;
  const mediaQuery = `@media (max-width: ${maxWidth}px)`;

  return {
    container: css`
      overflow: hidden;
      background: linear-gradient(to right, rgba(255, 165, 0, 5%) 0%, rgba(0, 128, 0, 5%) 100%);

      /* Removed CSS-in-JS border style */
      border-radius: ${token.borderRadiusLG}px;
    `,
    gridContainer: css`
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(3, 1fr);
      ${mediaQuery} {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
  };
});

const MoviePosterCard = memo<SpotlightCardProps>(({ items, renderItem }) => {
  const { styles } = useStyles();

  return (
    <div className={`${styles.gridContainer} animate-pop`}>
      {items.map((item, index) => {
        const children = renderItem(item);
        return (
          <div
            className={`${styles.container} w-[78px] h-[117px] rounded-xl shadow-lg cursor-pointer relative transform-preserve-3d transition-transform duration-300 hover:shadow-md hover:scale-110 hover:-translate-y-1.5 ${
              index === 0 ? 'border-2 border-transparent animate-borderGlow' : ''
            } border-red-500`} // Added Tailwind CSS class for red border
            key={index}
          >
            <div className="absolute inset-0 w-full h-full rounded-xl transition-opacity duration-300 bg-gradient-to-r from-white/10 via-white/30 to-[#80BAE8]/10 opacity-0 hover:opacity-100"></div>
            {children}
          </div>
        );
      })}
    </div>
  );
});

export default MoviePosterCard;
