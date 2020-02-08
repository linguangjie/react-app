import React from "react";
import { Card, Button, Radio } from "antd";
import "./ui.scss";
export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: "default"
  };
  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };
  handleRadioChange = e => {
    this.setState({
      size: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">按钮</Button>
          <Button>按钮</Button>
          <Button type="danger">按钮</Button>
          <Button type="dashed">按钮</Button>
          <Button disabled>按钮</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button
            type="primary"
            shape="circle"
            loading={this.state.loading}
          ></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">
              返回
            </Button>
            <Button type="primary" icon="right">
              前进
            </Button>
          </Button.Group>
        </Card>
        <Card title="基础按钮">
          <Radio.Group
            value={this.state.size}
            onChange={this.handleRadioChange}
          >
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            按钮
          </Button>
          <Button type="default" size={this.state.size}>
            按钮
          </Button>
          <Button type="danger" size={this.state.size}>
            按钮
          </Button>
          <Button type="dashed" size={this.state.size}>
            按钮
          </Button>
        </Card>
      </div>
    );
  }
}
