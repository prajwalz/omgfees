import React from 'react'
import { Avatar, Layout,  } from 'antd';
import 'antd/dist/antd.css';
import logosrc from '../../assets/logo.svg'

export default function Nav() {

    const styles = {
        logo: {
            width: "10rem",
            height: "auto",
            margin: "2rem auto",
            display: "flex"
        }
    }

    return (
        <>
            <Avatar style={styles.logo} shape="square" src={logosrc} />
        </>
    )
}
