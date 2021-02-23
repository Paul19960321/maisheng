import React from "react"
import { Row, Col, Button } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppPage = () => (
  <Layout>
    <SEO title="app下载" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/download.png')})`}}>
      <div className='container'>
        <div style={{maxWidth: 900, margin: '0 auto'}}>
          <h1 className='slogan'>千里合同一线签</h1>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <Row>
          <Col md={14} span={24}>
            <img src={require('../images/download/graphic.png')} alt='graphic' style={{position: 'relative', top: -100}} />
          </Col>
          <Col md={10} span={24}>
            <h2>一线签电子合同</h2>
            <h4>全生态电子合同服务平台</h4>
            <p><img style={{border: '1px solid #ccc'}} height={150} width={150} src={require('../images/download_QRcode.png')} alt='app-download' /><br/><span>扫码下载“一线签”App</span></p>
            <Row gutter={10} style={{marginTop: 20}}>
              <Col md={12} span={24}>
                <Button target='_blank' href='https://apps.apple.com/cn/app/%E4%B8%80%E7%BA%BF%E7%AD%BE/id1466745941' type="primary" icon="apple" size='large' style={{width: '10em', marginBottom: 10}}>
                  ios应用下载
                </Button>
              </Col>
              <Col md={12} span={24}>
                <Button type="primary" icon="android" size='large' style={{width: '10em'}}>
                  安卓应用下载
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  </Layout>
)

export default AppPage
