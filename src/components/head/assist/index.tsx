import React, { useState } from "react"
import { Menu, Dropdown } from "antd"

import "./index.less"
import AboutModal from "./AboutModal"

const AssistMenu: React.FC = () => {
  const [aboutModalState, setAboutModalState] = useState(false)

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span className="menu-item" onClick={() => setAboutModalState(true)}>
          关于
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <span className="head-bar-item" onClick={e => e.preventDefault()}>
          帮助
        </span>
      </Dropdown>

      <AboutModal modalState={aboutModalState} setModalState={setAboutModalState} />
    </>
  )
}

export default AssistMenu
