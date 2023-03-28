import React, { useEffect, useRef, useState } from 'react';
import Home from './view/Home';
import reactImg from '../assets/imgs/react.png';
import xx from '../assets/imgs/090600113377_02.png';
import { Button, Modal } from 'antd';

function App() {
  const [visible, setVisible] = useState(false);
  console.log('🚀 ~ file: App.tsx:9 ~ App ~ visible', visible);

  const curRef = useRef<boolean>(false);

  useEffect(() => {
    console.log('ref-更新');
  }, [curRef.current]);

  const onClick = () => {
    setVisible(true);
    curRef.current = true;
  };

  return (
    <>
      <h2>
        <Home />
        <div>react-test</div>
        <img src={reactImg} />
      </h2>
      <Button onClick={onClick}>测试</Button>
      <Modal title="测试" forceRender>
        <img src={xx} style={{ width: '300px' }} />
        <p>xxxxx</p>
      </Modal>
    </>
  );
}

export default App;
