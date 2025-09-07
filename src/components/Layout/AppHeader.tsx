import React from "react";
import { Button, Layout, Modal, Drawer } from "antd";
import { useState } from "react";
import { AppModal } from "./AppModal";
import "@ant-design/v5-patch-for-react-19";
import { AppNotes } from "./AppNotes";
import { noteBook } from "../../tasks-file";
import { Link } from "@tanstack/react-router";
import { Book } from "./AppTaskDetails";
const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#363636ff",
};

type Props = {
  showButtons?: boolean;
};

export function AppHeader({ showButtons }: Props) {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Header style={headerStyle}>
        {showButtons && (
          <Button
            style={{ float: "left", marginTop: "1rem" }}
            onClick={() => setModal(true)}
          >
            New Tasks
          </Button>
        )}
        <Modal
          title="Add TaskBook"
          open={modal}
          footer={null}
          onCancel={() => setModal(false)}
        >
          {showButtons && <AppModal />}
        </Modal>

        <Link to="/" className="mr-2">
          <Button type="dashed" style={{ marginRight: "1rem" }}>
            TaskPage
          </Button>
        </Link>
        <Link to="/about" className="mr-2">
          <Button type="dashed">About</Button>
        </Link>
        <Link to="/todos" className="mr-2">
          <Button type="dashed" style={{ marginLeft: "1rem" }}>
            Todos
          </Button>
        </Link>
        {showButtons && (
          <Button
            style={{ float: "right", marginTop: "1rem" }}
            onClick={() => setDrawer(true)}
          >
            Notes
          </Button>
        )}

        <Drawer
          width={600}
          destroyOnHidden
          title="Notes"
          onClose={() => setDrawer(false)}
          open={drawer}
        >
          <AppNotes />
        </Drawer>
      </Header>
    </>
  );
}
