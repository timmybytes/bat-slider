import React from 'react';

function SuitImg(props) {
  console.log(`SuitImg: ${props.suitImgYear}`);
  return (
    <>
      <img
        style={{ display: props.suitImgYear === 1943 ? 'inherit' : 'none' }}
        // style={{ display: 'inline' }}
        className='batslider-img'
        src={require('../img/batman-1943.jpg')}
        alt='1943 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 1966 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-1966.jpg')}
        alt='1966 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 1989 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-1989.jpg')}
        alt='1989 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 1992 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-1992.jpg')}
        alt='1992 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 1995 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-1995.jpg')}
        alt='1995 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 1997 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-1997.jpg')}
        alt='1997 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 2005 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-2005.jpg')}
        alt='2005 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 2008 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-2008.jpg')}
        alt='2008-2012 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 2016 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-2016.jpg')}
        alt='2016 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 2017 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-2017.jpg')}
        alt='2017 batsuit'
      />
      <img
        style={{ display: props.suitImgYear === 2021 ? 'inherit' : 'none' }}
        className='batslider-img'
        src={require('../img/batman-2021.png')}
        alt='2021 batsuit'
      />
    </>
  );
}

export default SuitImg;
