import { Select, Space, Typography, Flex, Divider,  Form, Input, InputNumber, Button, DatePicker } from "antd"
import { useState } from "react"
import { useCrypto } from "../context/crypto-context"

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: '${label} is not valid number',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  }
}


export default function AddAssetForm() {
  const [form] = Form.useForm()
  const [coin , setCoin ] = useState(null)
  const {crypto}= useCrypto()
  if (!coin) {
    return (
      <Select
      style={{width: '100%'}}
      onSelect={(v) => setCoin(crypto.find((c) => c.id == v))}
      placeholder="Select coin"
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
    )
  }
  
 function onFinish(values) {
    console.log(values)
 }

 function handleAmount(val) {
   const price = form.getFieldValue('price')
    form.setFieldsValue({
      total: +(val * price).toFixed(2),
    })
 }

 function handlePrice(val) {
  const amount = form.getFieldValue('amount')
  form.setFieldsValue({
    total: +(amount * val).toFixed(2),
  })
}

  return (
  <Form
    form={form}
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
        price: +coin.price.toFixed(2),
    }}
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
       <Flex align='center'>
        <img
         src={coin.icon} 
         alt={coin.name}
          style={{ width: 40, marginRight: 10}}
         />
        <Typography.Title level={2} style={{margin: 0}}>
           {coin.name}
        </Typography.Title>
  </Flex>
  <Divider/>

  
    <Form.Item
      label="Amount"
      name="amount"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
         
        },
      ]}
    >
      <InputNumber 
      placeholder="Enter coin amount" 
      onChange={handleAmount}
      style={{width: '100%'}}/>
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"   
    >
     <InputNumber 
     disabled 
     style={{width: '100%'}}
     onChange={handlePrice}
     />
    </Form.Item>

    <Form.Item
      label="Date & Time"
      name="date"   
    >
     <DatePicker showTime/>
    </Form.Item>

    <Form.Item
      label="Total"
      name="total"   
    >
     <InputNumber disabled style={{width: '100%'}}/>
    </Form.Item>

    

    <Form.Item>
      <Button type="primary" htmlType="submit">
             Add Asset
      </Button>
    </Form.Item>
  </Form>
  
  )
}