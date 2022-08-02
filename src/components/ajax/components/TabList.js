import { Card } from 'antd';
import React, { useState } from 'react';


const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const TabListComp = () => {
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default TabListComp;