import React from "react";
import { Card, Button, Spin, Icon, Alert } from "antd";
import "./ui.scss";
export default class Loading extends React.Component {
  render() {
    const icon = <Icon type="loading"></Icon>;
    return (
      <div>
        <Card title="spin用法">
          <Spin size="small"></Spin>
          <Spin></Spin>
          <Spin size="large"></Spin>
          <Spin indicator={icon}></Spin>
        </Card>
        <Card title="内容遮罩">
          <Spin>
            <Alert message="react" description="欢迎欢迎" type="info"></Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="react"
              description="欢迎欢迎"
              type="success"
            ></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}
