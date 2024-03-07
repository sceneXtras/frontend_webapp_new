import { SpotlightCardProps } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css, token, isDarkMode }) => {
  // Assume token has a breakpoints property
  const tokenWithBreakpoints = token as any;  // Still a quick fix, you should ideally define a proper type for 'token'
  const maxWidth = tokenWithBreakpoints.breakpoints?.sm || 600; // Calculate maxWidth outside CSS

  // Construct the entire media query as a string beforehand
  const mediaQuery = `@media (max-width: ${maxWidth}px)`;

  return {
    gridContainer: css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      ${mediaQuery} { /* Use the pre-constructed media query */
        grid-template-columns: repeat(2, 1fr);
      }
    `,
    container: css`
      overflow: hidden;
      background: linear-gradient(to right, rgba(255, 165, 0, 0.05) 0%, rgba(0, 128, 0, 0.05) 100%);
      border: 1px solid ${isDarkMode ? token.colorFillTertiary : token.colorFillSecondary};
      border-radius: ${token.borderRadiusLG}px;
    `,
  };
});

const MoviePosterCard = memo<SpotlightCardProps>(({ items, renderItem }) => {
  const { styles } = useStyles();

  return (
    <div className={styles.gridContainer}>
      {items.map((item, index) => {
        const children = renderItem(item);
        return (
          <div className={styles.container} key={index}>
            {children}
          </div>
        );
      })}
    </div>
  );
});

export default MoviePosterCard;