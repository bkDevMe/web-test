import React from 'react';
import style from './index.module.less';

console.log('xl ~ file: index.tsx:3 ~ style:', style);

const CssModule = () => {
  return (
    <div className={style['css-module']}>
      CssModule
      <div className="text-color-green">green</div>
    </div>
  );
};

export default CssModule;
