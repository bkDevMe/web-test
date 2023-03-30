import React, { useEffect, useRef, useState } from 'react';
import Home from './view/Home';
import reactImg from '@/assets/imgs/react.png';
import { Button, Modal } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';

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
      <ErrorBoundary fallback={<div>发生错误了</div>}>
        <h2>
          <Home />
          <div>react-test</div>
          <img src={reactImg} />
        </h2>
        aaa
        <Button onClick={onClick}>测试</Button>
        <Modal title="测试" forceRender>
          <img src={reactImg} style={{ width: '300px' }} />
          <p>xxxxx</p>
        </Modal>
      </ErrorBoundary>
    </>
  );
}

export default App;
