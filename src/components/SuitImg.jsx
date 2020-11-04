import React from 'react';
import batman1943 from '../img/batman-1943.jpg';
import batman1966 from '../img/batman-1966.jpg';
import batman1989 from '../img/batman-1989.jpg';
import batman1992 from '../img/batman-1992.jpg';
import batman1995 from '../img/batman-1995.jpg';
import batman1997 from '../img/batman-1997.jpg';
import batman2005 from '../img/batman-2005.jpg';
import batman2008 from '../img/batman-2008.jpg';
import batman2016 from '../img/batman-2016.jpg';
import batman2017 from '../img/batman-2017.jpg';
import batman2021 from '../img/batman-2021.png';

function SuitImg(props) {
  // console.log(`SuitImg: ${props.suitImgYear}`);
  // TODO: Tests
  // console.log(`SuitImg: ${props.suitImgYear}`);
  // console.log(`SuitImg: ${props.suitImgYear}`);
  return (
    <>
      <img
        style={{ display: props.suitImgYear === 1943 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1943}
        alt="1943 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 1966 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1966}
        alt="1966 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 1989 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1989}
        alt="1989 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 1992 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1992}
        alt="1992 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 1995 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1995}
        alt="1995 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 1997 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman1997}
        alt="1997 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 2005 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman2005}
        alt="2005 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 2008 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman2008}
        alt="2008-2012 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 2016 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman2016}
        alt="2016 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 2017 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman2017}
        alt="2017 batsuit"
      />
      <img
        style={{ display: props.suitImgYear === 2021 ? 'inherit' : 'none' }}
        className="batslider-img"
        src={batman2021}
        alt="2021 batsuit"
      />
    </>
  );
}

export default SuitImg;
