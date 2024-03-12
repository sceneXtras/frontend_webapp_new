import { SpotlightCardProps } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css, token, isDarkMode }) => {
  const tokenWithBreakpoints = token as any;
  const maxWidth = tokenWithBreakpoints.breakpoints?.sm || 600;
  const mediaQuery = `@media (max-width: ${maxWidth}px)`;

  return {
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
          <div className={styles.gridContainer} key={index}>
            {' '}
            {/* Corrected from styles.container to styles.gridContainer */}
            {children}
          </div>
        );
      })}
    </div>
  );
});

export default MoviePosterCard;
