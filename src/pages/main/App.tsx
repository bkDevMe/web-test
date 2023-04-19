import React, { useEffect, useRef, useState } from 'react';
import Home from './view/Home';
import { Button, Space } from 'antd';
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
          <Space>
            <span>ss</span>
          </Space>
        </h2>
        <Button onClick={onClick}>测试</Button>
      </ErrorBoundary>
    </>
  );
}

export default App;
