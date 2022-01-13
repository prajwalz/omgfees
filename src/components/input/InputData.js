import React from 'react'
import { Card, Input, Form, Button, Checkbox } from 'antd';
import { Select } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import bitcoin from '../../assets/bitcoin.svg'
import ethereum from '../../assets/ethereum.svg'
import tron from '../../assets/tron.svg'
import bitcoin_logo from '../../assets/bitcoin.svg'
import ethereum_logo from '../../assets/ethereum.svg'
import tron_logo from '../../assets/tron.svg'


const { Option } = Select;



export default function InputData({fetch}) {





    const onFinish = (values) => {
        fetch(values)
      };
    
      const styles = {
        input: {
            width: "40%",
            height: "50vh",
            margin: "2rem auto",
            background: "transparent",
            border: "none",
            textAlign: "center"
        },

        address: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            borderBottom: "0.1rem solid #AEAEAE",
            color: "#FFFFFF"

        },
        

        avatar: {
            width: "1.2rem",
            height: "auto",
            padding: "0.1rem",
            background: "transparent",
            marginRight: "0.4rem",
          
        },

        gradientBtn: {
            border: "0.1rem solid rgb(129,70,255)",
            background: "linear-gradient(144deg, rgba(129,70,255,1) 0%, rgba(255,68,158,1) 100%)",
            '&:hover': {
                border: "1rem solid rgb(129,70,255)",
            }
          }
    }
      
    return (
        <>
        <Card style={styles.input}>
            <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
                <Form.Item
                    name="address"
                    
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input style={styles.address} placeholder="Enter Address" />
                </Form.Item>

                <Form.Item
                    name="chain"
                    rules={[{ required: true, message: 'Please select chain!' }]}
                >
         
                    <Select  showSearch optionFilterProp="children" placeholder="select chain">
                    <Select.Option  value="bitcoin"><Avatar style={styles.avatar} shape="square" size="small" icon={<img src={bitcoin} />} />Bitcoin</Select.Option>
                    <Select.Option value="ethereum"><Avatar style={styles.avatar} shape="square" size="small" icon={<img src={ethereum} />} />Ethereum</Select.Option>
                    <Select.Option value="tron"><Avatar style={styles.avatar} shape="square" size="small" icon={<img src={tron} />} />Tron</Select.Option>
                    </Select>
                    
                </Form.Item>

                <Form.Item>
                    <Button type="primary"  size="large" style={styles.gradientBtn}  htmlType="submit">
                    Check
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </>
    )
}
