import React from "react"
import { Link } from "gatsby"
import { Row, Col, Tabs } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
const { TabPane } = Tabs;
const list = [
  {
    img: require('../images/faq/thumbnail1.png'),
    title: '什么是电子合同？'
  },
  {
    img: require('../images/faq/thumbnail2.png'),
    title: '电子合同的法律效力。'
  },
  {
    img: require('../images/faq/thumbnail3.png'),
    title: '什么是区块链？怎么运用在电子合同上？'
  },
  {
    img: require('../images/faq/thumbnail4.png'),
    title: '目前有哪些行业已经使用了电子合同？'
  },
  {
    img: require('../images/faq/thumbnail5.png'),
    title: '李克强签署国务院令：明确电子签名的法律效力。'
  },
]

const QandAPage = () => (
  <Layout>
    <SEO title="电子合同知识库" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/faq.png')})`}}>
      <div className='container' style={{textAlign: 'center', color: '#fff'}}>
        <h1 className='slogan'>用知识驱动进步。</h1>
        <h3>聚焦电子签约，科普法律知识，跟踪行业资讯，专业解读政策</h3>
      </div>
    </section>
    <section className='container' style={{padding: 10}}>
    <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab="电子合同知识库" key="1">
          <Row>
            {
              list.map((item, index) => (
                <Col lg={8} sm={12} xs={24} key={index}>
                  <div className='question-box'>
                    <Link style={{display: 'block', height: '100%'}} to={`/doc?id=${index}`}>
                      <img src={item.img} alt={item.title} />
                      <p><span>{item.title}</span></p>
                    </Link>
                  </div>
                </Col>
              ))
            }
          </Row>
        </TabPane>
      </Tabs>
    </section>
  </Layout>
)

export default QandAPage
