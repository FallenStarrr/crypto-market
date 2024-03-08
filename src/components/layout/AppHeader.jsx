import { Layout, Select, Button } from 'antd';


const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const options = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];

export default function AppHeader() {
    return ( <Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250,
    }}
    
    
    onChange={handleChange}
    value="press / to open"
    optionLabelProp="label"
    options={options}
    optionRender={(option) => (
      <Space>
          <img/> bitcoin
      </Space>
    )}
  />
        <Button type='primary'>Add Asset</Button>
    </Layout.Header>)
}