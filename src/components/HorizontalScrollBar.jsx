import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';

import 'react-horizontal-scrolling-menu/dist/styles.css';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyParts';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollPrev()} sx={{ cursor: 'pointer', mx: 1 }}>
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollNext()} sx={{ cursor: 'pointer', mx: 1 }}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        '& .react-horizontal-scrolling-menu--scroll-container': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
        '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 20px"
            sx={{ minWidth: '200px', display: 'flex', justifyContent: 'center' }}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
