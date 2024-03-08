import { Layout, Select, Button, Space } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

 
export default function AppHeader() {
    const { crypto } = useCrypto()
    return ( <Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250,
    }}
    
    

    value="press / to open"
    optionLabelProp="label"
    options={crypto.map((coin) => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon
    }))}
    optionRender={(option) => (
      <Space>
          <img 
          style={{width: 20}}
          src={option.data.icon} 
          alt={option.data.label}/> 
          {option.data.label}
      </Space>
    )}
  />
        <Button type='primary'>Add Asset</Button>
    </Layout.Header>)
}