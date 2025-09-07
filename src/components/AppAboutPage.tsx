import { Layout, Typography } from "antd";

export function AppAboutPage() {
  return (
    <Layout style={{ background: "#fff" }}>
      <div
        style={{
          background: "#ffffffff",
          width: "100%",
          height: "50rem",
        }}
      >
        <img
          src="/static/icons8-book.gif"
          alt="book"
          style={{ width: "10%", height: "20%", marginLeft: "45%" }}
        ></img>
        <div style={{ display: "flex", background: "#dfdfdfff" }}>
          <div style={{ width: "50%", height: "20rem" }}>
            <Typography style={{ marginLeft: "30%" }}>
              <h1>• TaskBook</h1>
              <h1>• Notes</h1>
            </Typography>
          </div>
          <div style={{ width: "50%", height: "20rem" }}>
            <Typography style={{ marginLeft: "30%" }}>
              <h1>Problem books and notes</h1>
            </Typography>
          </div>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <Typography style={{ marginLeft: "10%", marginTop: "5%" }}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              iste cumque voluptatibus. Odio quasi incidunt quo consequuntur rem
              delectus perspiciatis repellendus vitae doloremque error totam,
              distinctio libero expedita aperiam dolorum?
            </h1>
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
