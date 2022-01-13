import React from 'react'
import { Card, Input, Form, Button, Checkbox, Typography, Divider, Space } from 'antd';
import { Select } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import bitcoin from '../../assets/bitcoin.svg'
import ethereum from '../../assets/ethereum.svg'
import tron from '../../assets/tron.svg'
import bitcoin_logo from '../../assets/bitcoin.svg'
import ethereum_logo from '../../assets/ethereum.svg'
import tron_logo from '../../assets/tron.svg'
import 'antd/dist/antd.dark.css';
import { Footer } from 'antd/lib/layout/layout';
const QRCode = require('qrcode.react');

const { Text, Link } = Typography;

export default function DisplayData({reset, logo, chain, fees, efees, pricet, pricee}) {



    const styles = {
        input: {
            width: "50%",
            height: "100%",
            margin: "2rem auto",    
            background: "transparent",
            border: "none",
            textAlign: "center"
        },
        text: {
            display: "block",
            fontSize: "1.2rem",
            color: "#FFFFFF",
            letterSpacing: "0.1rem"
        },
        avatar: {
            width: "1.2rem",
            height: "auto",
            background: "transparent",
            margin: "0 0.4rem",
            filter: "drop-shadow(0.1rem 0.1rem 0.3rem #FFFFFF)"
        },
        gradientBtn: {
            border: "0.1rem solid rgb(129,70,255)",
            background: "linear-gradient(144deg, rgba(129,70,255,1) 0%, rgba(255,68,158,1) 100%)"

          }
    }

    return (
        <>
            <Card style={styles.input}>
                <Space size="large" direction="vertical">
                <Text  style={styles.text} type="secondary">you have spent <Avatar style={styles.avatar} shape="square" size="small" icon={<img src={logo} />} />{fees} {chain} on fees in total</Text>
                <Text  style={styles.text} type="secondary">which is worth ${pricet} now!</Text>
                <Text  style={styles.text} type="secondary">and  spent <Avatar style={styles.avatar} shape="square" size="small" icon={<img src={logo} />} />{efees} {chain} on fees for failed transactions</Text>
                <Text  style={styles.text} type="secondary">which is worth ${pricee} now!</Text>
                <Button onClick={reset} style={styles.gradientBtn} size="large" type="primary">Check another</Button>
                </Space>
            </Card>
        </>
    )
}
