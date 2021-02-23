import React from "react"
import { Row, Col, Button } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const btnStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  fontSize: 14
}

const insuranceInfo = [
  {
    img: require('../images/insurance/thumbnail1.png'),
    name: '掌心保-小商铺公众安全责任险',
    desc: [
      '专为中小商铺定制',
      '累计享受50万元保障额度',
      '方案灵活随心选'
    ],
    price: 200
  },
  {
    img: require('../images/insurance/thumbnail2.png'),
    name: '掌心保-万全保小微企业综合险',
    desc: [
      '含财产综合险等三大险种',
      '累计享受100万元保障额度',
      '投保份数自由选，最多20份'
    ],
    price: 364.8
  },
  {
    img: require('../images/insurance/thumbnail3.png'),
    name: '掌心保-雇主责任险',
    desc: [
      '覆盖1-4类职业',
      '意外伤害及医疗均可获赔',
      '支持变更被保险人'
    ],
    price: 68
  },
  {
    img: require('../images/insurance/thumbnail4.png'),
    name: '掌心保-企业员工团队意外险',
    desc: [
      '线上投保方便快捷',
      '涵盖意外险，医疗及住院津贴',
      '理赔时效短，效率高'
    ],
    price: 75
  }
]

const InsurancePage = () => (
  <Layout>
    <SEO title="保险服务" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/insurance.png')})`}}>
      <div className='container'>
        <h1 className='slogan' style={{textAlign: 'center'}}>保险服务</h1>
      </div>
    </section>
    <section className='section insurance-info' style={{}}>
      <div className='bg-text'>Insurance</div>
      <div className='container'>
        <div style={{textAlign: 'left'}}>
          <h2>我们为客户</h2>
          <h2>提供的企业保险服务</h2>
        </div>
        <Row>
          {
            insuranceInfo.map((info, index) => (
              <Col xl={12} span={24} key={index}>
                <div className='info-panel'>
                  <div className='info-img'>
                    <img src={info.img} alt='img' />
                  </div>
                  <div className="info-text">
                    <h4>{info.name}</h4>
                    {
                      info.desc.map((desc, idx) => <p key={idx}>{desc}</p>)
                    }
                    <div style={{fontSize: 16, color: '#333', marginTop: 10}}><span style={{fontSize: 24, color: '#5b8dfd'}}>￥{info.price}</span>元/年起</div>
                    <Button type="primary" shape='round' href={`/insurancedetail?id=${index}`} style={btnStyle}>了解详情</Button>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    </section>
  </Layout>
)

export default InsurancePage
