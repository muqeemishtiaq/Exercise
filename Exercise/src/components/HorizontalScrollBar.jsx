import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyParts';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Left Arrow component
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollPrev()}
      sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};

// Right Arrow component
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollNext()}
      sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
    >
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item} 
        title={item.id || item}
        m="0 40px"
        sx={{ display: 'flex', justifyContent: 'center' }} // Center the content
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
