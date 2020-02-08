import React from "react";
import "antd/dist/antd.css";
import "./style/common.scss";
import { Layout } from "antd";
import NavLeft from "./components/navLeft";
const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends React.Component {
  render() {
    return (
      <Layout className="container">
        <Sider className="navLeft">
          <NavLeft></NavLeft>
        </Sider>
        <Layout>
          <Header className="header">Header</Header>
          <Content className="content">{this.props.children}</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
