import React from "react";
import { Menu } from "antd";
import menuConfig from "../../config/menuConfig";
import { NavLink } from "react-router-dom";
import "./index.css";
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  render() {
    return <Menu className="menu">{this.renderMenu(menuConfig)}</Menu>;
  }
}
