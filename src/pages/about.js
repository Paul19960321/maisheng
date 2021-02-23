import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="关于我们" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/about.png')})`}}>
      <div className='container'>
        <div style={{maxWidth: 900, margin: '0 auto'}}>
          <h1 className='slogan' style={{marginBottom: 30}}>电子签署，只是一个开始。</h1>
          <Link to='/joinus' className='link-btn'>加入我们</Link>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <h2 className='section-title'>公司介绍</h2>
        <div className='text-field'>麦昇科技（深圳）有限公司（www.winksign.com）是一家专注于区块链电子签署、区块链电子合同存验的第三方电子合同服务平台，主要为金融、保险、房地产、人力资源、医疗、教育、物流、供应链、汽车、O2O交易平台等行业以及政府机构提供实名认证、在线签署、合同审批、文档管理、区块链存证等基础服务，同时整合提供司法诉讼、律师服务、保险赔付、在线贷款等增值服务，联动产业链上下游，双向赋能，建立富有生命力的电子合同服务生态体系。自创立以来，公司紧跟国家普及和推行数字签名、电子合同的政策脚步，并与税务局等政府机构展开友好合作，致力于区块链技术及产品的创新，数字签名的研究与落地应用，共同构建可信的区块链时代契约精神。</div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
