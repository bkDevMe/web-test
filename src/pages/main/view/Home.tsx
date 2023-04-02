import React, { useEffect, useState } from 'react';
import { CssModule, NotCssModule, MirrorButton } from '../components';
import './Home.less';

console.log('xl ~ file: Home.tsx:3 ~ MirrorButton:', MirrorButton);

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
      <MirrorButton />
    </div>
  );
};

export default Home;
