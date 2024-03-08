import { Layout, Select, Button, Space, Modal } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCrypto } from '../../context/crypto-context';
import CoinInfoModal from '../CoinInfoModal';

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
    const [select, setSelect] = useState(false)
    const [coin, setCoin] = useState(null)
    const [modal, setModal] = useState(false)

  
    useEffect(() => {
      const keypress = event => {
        if (event.key == '/') {
          setSelect(prev => !prev)
        }
      }
      document.addEventListener('keypress', keypress)
      return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handleSelect(value) {
      setCoin(crypto.find((c) => c.id === value))
      console.log(value)
      setModal(true)
    }
    
    return ( 
    <Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250,
    }}
    onSelect={handleSelect}
    onClick={() => setSelect(prev => !prev)}
    open={select}
    value="press / to open"
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
        <Modal  
        open={modal} 
        onCancel={() => setModal(false)}
        footer={null}
        >
          <CoinInfoModal coin={coin}/>
      </Modal>
    </Layout.Header>)
}