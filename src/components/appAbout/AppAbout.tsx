import { memo } from "react";
import { Layout, Typography } from "antd";

const AppAbout = memo(() => {
  return (
    <Layout>
      <div className=" w-full h-200">
        <div className="content-custom w-full h-50  ">
          <img
            src="/static/icons8-book.gif"
            alt="book"
            className="w-[13%] h-[100%]  ml-[43%] rounded-2xl mt-2"
          ></img>
        </div>
        <div style={{ display: "flex" }} className="content-abpa-point">
          <div style={{ width: "50%", height: "20rem" }}>
            <Typography style={{ marginLeft: "30%" }}>
              <h1 className="content-abpa-point">• TaskBook</h1>
              <h1 className="content-abpa-point">• Notes</h1>
            </Typography>
          </div>
          <div style={{ width: "50%", height: "20rem" }}>
            <Typography style={{ marginLeft: "30%" }}>
              <h1 className="content-abpa-point">Problem books and notes</h1>
            </Typography>
          </div>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <Typography style={{ marginLeft: "10%", marginTop: "5%" }}>
            <h1 className="content-custom">
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
});

export default AppAbout;
