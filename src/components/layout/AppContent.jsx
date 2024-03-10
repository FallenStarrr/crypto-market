import { Layout } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { useCrypto } from '../../context/crypto-context';
import AssetsTable from '../AssetsTable';
import PortfolioChart from '../PortfolioChart';



const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem',
  };
  


export default function AppContent() {
    const { assets, crypto } =  useCrypto()

    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})


    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title level={3}
                style={{textAlign: 'left', color: 'white'}}
            >
                        Portfolio: {assets.map(asset => asset.amount * cryptoPriceMap[asset.id]
                        )
                        .reduce((acc, v) => acc += v ,0)
                        .toFixed(2)}$
            </Typography.Title>
            <PortfolioChart/>
            <AssetsTable/>
        </Layout.Content>
    )
}