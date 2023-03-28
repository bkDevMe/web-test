import React from 'react';
import { CssModule, NotCssModule } from '../components';
import './Home.less';

const Home = () => {
  return (
    <div>
      Home
      <CssModule />
      <NotCssModule />
    </div>
  );
};

export default Home;
