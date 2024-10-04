import LooqBoxLogo from "../../../assets/logo.png"
import "./styles.css"

import { Layout } from "antd"
const { Header } = Layout; 


const HeaderComponent: React.FC = () => {

  return (
    <Header style={{paddingInline: "10rem"}} className="header-container">
      <img width={120} height={36} src={LooqBoxLogo} />
    </Header>
  )
}

export default HeaderComponent;