/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Layout } from 'antd'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./index.less"

const { Content } = Layout;

export default ({ children }) => (
  <Layout style={{background: 'transparent', display: 'block'}}>
    <Header />
    <Content className="main-content">
      {children}
    </Content>
    <Footer />
  </Layout>
)