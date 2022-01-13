import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Nav from './components/header/Nav';
import Body from './components/content/Body';
import 'antd/dist/antd.dark.css';

const { SubMenu } = Menu;


function App() {

  const styles = {
    bk: {
        width: "100%",
        height: "100%",
        background: "#313131",  
    }
}

  return (
      <>
        <Layout style={styles.bk}>
          <Nav />
          <Body />
        </Layout>
      </>
  );
}

export default App;
