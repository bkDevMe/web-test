import React, { useEffect, useState } from 'react';
import { CssModule, NotCssModule } from '../components';
import './Home.less';

const Home = () => {
  const [current, setCur] = useState(false);
  console.log('xl ~ file: Home.tsx:7 ~ Home ~ current:', current);
  useEffect(() => {
    console.log('home---------');
    try {
      throw new Error();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    // throw new Error('zzzzzzzzzzz');
  }, []);

  return (
    <div>
      Home
      <CssModule />
      <NotCssModule />
      <button
        onClick={() => {
          setCur(true);
          throw new Error();
        }}
      >
        点击
      </button>
    </div>
  );
};

export default Home;
