import React from "react"
import { Result, Button } from 'antd';
import { navigate } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Result
      status="404"
      title="404"
      subTitle="您所访问的页面不存在！"
      extra={<Button type="primary" onClick={() => {navigate('./')}}>回到首页</Button>}
    />
  </Layout>
)

export default NotFoundPage
