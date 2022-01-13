import React, { useEffect, useState } from 'react'
import { Typography, Space } from 'antd';
import InputData from '../input/InputData';
import DisplayData from '../display/DisplayData';
import axios from 'axios';
import bitcoin_logo from '../../assets/bitcoin.svg'
import ethereum_logo from '../../assets/ethereum.svg'
import tron_logo from '../../assets/tron.svg'
import { Layout, Menu, Breadcrumb, Popover, Button, Row, Col } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const { Footer } = Layout;
const QRCode = require('qrcode.react');

const { Text, Link } = Typography;

export default function Body() {

    const chains = [
        {
            chain: "ethereum",
            logo: ethereum_logo,
            symbol: "ETH",
        },
        {
            chain: "bitcoin",
            logo: bitcoin_logo,
            symbol: "BTC",
        },
        {
            chain: "tron",
            logo: tron_logo,
            symbol: "TRX",
        },
        
    ]

    const [fees , setFees] = useState(0)
    const [efees , setEfees] = useState(0)
    const [priceT , setPriceT] = useState(0)
    const [priceE , setPriceE] = useState(0)
    const [chain , setChain] = useState()
    const [logo , setLogo] = useState()
    const [donate_a , setDonate] = useState()

    const fetch = async (value) => {
        let totalFees = 0
        let errorFees = 0
        const res = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${value.address}`)
        res.data.result.map(info => {
           totalFees += Number(((info.gasPrice/1000000000)*(info.gasUsed))/1000000000)
           if(info.isError === "1"){
                errorFees += Number(((info.gasPrice/1000000000)*(info.gasUsed))/1000000000)
           }
        })
        const ress = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${value.chain}&vs_currencies=usd`)
        const price = ress.data.ethereum.usd
        chains.map(info => {
            if(info.chain === value.chain){
            setChain(info.symbol)
            setLogo(info.logo)
            setDonate(info.donate_address)
            }
        })
        setPriceT(Math.floor(totalFees* price))
        setPriceE(Math.floor(errorFees* price))
        setEfees(errorFees.toFixed(8))
        setFees(totalFees.toFixed(8))
        

        }
    

    const reset = () => {
        setPriceT()
        setPriceE()
        setFees()
        setEfees()
        setChain()
    }

    useEffect(() => {
    }, [fees])
 
    const styles = {
        text: {
            margin: "1rem auto",
            display: "flex",
            fontSize: "1rem",
            color: "#AEAEAE",
        },
        avatar: {
            width: "1.2rem",
            height: "auto",
            background: "transparent",
            margin: "0 0.4rem",
            filter: "drop-shadow(0.1rem 0.1rem 0.3rem #FFFFFF)"
        },
        row: {
            alignItems: "center",
            textAlign: 'center',
            color: '#FFFFFF',
            margin: "0 auto"
        }
    }
    
    return (
        <>
        
        <Text  style={styles.text} type="secondary">check how much you spent for fees!</Text>
        {
            fees ?
            <DisplayData reset={reset} fees={fees} efees={efees} pricet={priceT} chain={chain} logo={logo} pricee={priceE}/>
            :
            <InputData fetch={fetch}/> 
            
        }
        </>
    )
}
