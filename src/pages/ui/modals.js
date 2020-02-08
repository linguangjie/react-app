import React from "react";
import { Card, Button, Modal } from "antd";
import "./ui.scss";
export default class Modals extends React.Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };
  handleOpen = type => {
    this.setState({
      [type]: true
    });
  };
  handleConfirm = type => {
    Modal[type]({
      title: "确认？",
      content: "欢迎欢迎欢迎"
    });
  };
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen("modal1")}>
            open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("modal2")}>
            自定义头部
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("modal3")}>
            顶部20px
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("modal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            warning
          </Button>
        </Card>
        <Modal
          title="react"
          visible={this.state.modal1}
          onCancel={() => {
            this.setState({
              modal1: false
            });
          }}
        >
          欢迎欢迎
        </Modal>
        <Modal
          title="react"
          cancelText="关闭"
          okText="确定"
          visible={this.state.modal2}
          onCancel={() => {
            this.setState({
              modal2: false
            });
          }}
        >
          欢迎欢迎欢迎欢迎
        </Modal>
        <Modal
          title="react"
          visible={this.state.modal3}
          onCancel={() => {
            this.setState({
              modal3: false
            });
          }}
        >
          欢迎欢迎
        </Modal>
        <Modal
          title="react"
          visible={this.state.modal4}
          onCancel={() => {
            this.setState({
              modal4: false
            });
          }}
        >
          欢迎欢迎
        </Modal>
      </div>
    );
  }
}
