import React from "react"
import { Row, Col } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IoanPage = () => (
  <Layout>
    <SEO title="银行贷款" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/loan.png')})`}}>
      <div className='container'>
          <h1 className='slogan' style={{textAlign: 'center'}}>银行贷款</h1>
      </div>
    </section>
    <section className='section loan-info'>
      <div className='bg-block'></div>
      <div className='bg-text'>Bank Ioan</div>
      <div className="container">
          <Row style={{textAlign: 'center'}}>
            <Col md={12} span={24}>
              <div style={{display: 'inline-block', textAlign: 'left'}}>
                  <h2>我们为客户</h2>
                  <h2>提供的银行贷款服务</h2>
              </div>
            </Col>
            <Col md={12} span={24}>
              <div style={{background: '#fff', boxShadow: '5px 5px 5px rgba(0,0,0,.05)', padding: '30px 25px', borderRadius: 20,  maxWidth: 360, minWidth: 280, textAlign: 'left', width: '50%', margin: '0 auto'}}>
                  <h4 style={{marginBottom: '10px', fontSize: '18px'}}>
                    <a href="/console/#/login" style={{color: '#4c656b'}}>了解详情</a>
                    <img src={require('../images/loan.png')} alt='loan' style={{height: 50, width: 50, marginBottom: 0, float: 'right', marginTop: -25}} />
                  </h4>
                  <p style={{marginBottom: 0, color: '#868686', fontSize: 14}}>对接五大行，按照客户资质和需求，精选多款贷款产品。</p>
              </div>
            </Col>
          </Row>
      </div>
    </section>
  </Layout>
)

export default IoanPage
