import { Outlet, Link } from "react-router-dom";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const LayoutComponent = () => {
  return (
    <>
      <Layout>
        <Sider>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/first">First Component</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
          </ul>
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
