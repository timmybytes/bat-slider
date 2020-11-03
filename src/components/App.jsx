import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/index.css';
import Batsuits from '../batsuits.json';
import SuitImg from './SuitImg';
import Header from './Header';

// Styling for slider increment marks

const styles = {
  color: '#fdff00',
  fontWeight: '200',
  fontSize: '.85rem',
  background: '#242424',
  padding: '2px',
  transform: 'rotate(-50deg)',
  transformOrigin: 'left',
};

const marks = {
  1: {
    style: { ...styles },
    label: 1943,
  },
  2: {
    style: { ...styles },
    label: 1966,
  },
  3: {
    style: { ...styles },
    label: 1989,
  },
  4: {
    style: { ...styles },
    label: 1992,
  },
  5: {
    style: { ...styles },
    label: 1995,
  },
  6: {
    style: { ...styles },
    label: 1997,
  },
  7: {
    style: { ...styles },
    label: 2005,
  },
  8: {
    style: { ...styles },
    label: 2008,
  },
  9: {
    style: { ...styles },
    label: 2016,
  },
  10: {
    style: { ...styles },
    label: 2017,
  },
  11: {
    style: { ...styles },
    label: 2021,
  },
};

export default function App() {
  const [suitTitle, setSuitTitle] = useState(Batsuits.batsuits[0].title);
  const [suitDetail, setSuitDetail] = useState(Batsuits.batsuits[0].detail);
  const [suitYear, setSuityear] = useState(1943);

  function handleChange(e) {
    // console.log(Batsuits.batsuits[e - 1].title);
    setSuitTitle(Batsuits.batsuits[e - 1].title);
    // console.log(Batsuits.batsuits[e - 1].detail);
    setSuitDetail(Batsuits.batsuits[e - 1].detail);
    // console.log(Batsuits.batsuits[e - 1].year);
    setSuityear(Batsuits.batsuits[e - 1].year);

    // console.log(marks['1'].style);
    // console.log(marks['1'].label);
  }

  return (
    <div>
      <h1 className='batslider-title'>The Bat-Slider: Batsuits in Film</h1>
      <div className='batslider-container2'>
        <Slider
          style={{ maxWidth: '400px' }}
          className='batslider-slider'
          min={1}
          max={11}
          marks={marks}
          step={1}
          onChange={handleChange}
          defaultValue={1}
        />
      </div>
      <div className='batslider-container'>
        <SuitImg suitImgYear={suitYear} />
      </div>
      <Header suitTitle={suitTitle} suitYear={suitYear} />
      <p className='batslider-content'>{suitDetail}</p>
    </div>
  );
}
