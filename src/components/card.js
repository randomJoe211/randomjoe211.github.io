import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;
const App = () => (
  <Card
    hoverable={true}
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    bordered={true}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
  </Card>
);
export default App;