import React from "react"
import { Row, Col, Carousel, Button, Card, Icon, Timeline } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const { Meta } = Card;

const banner = [
  {
    img: require('../images/banner/product1.png'),
    slogan: '千里合同一线签，智能签署新体验'
  },
  {
    img: require('../images/banner/product2.png'),
    slogan: '区块链上防篡改，合同生态全覆盖'
  }
]

const featureImg = [
  {
    img: require('../images/product/feature/icon1.png'),
    info: '实名认证'
  },
  {
    img: require('../images/index/product/icon1.png'),
    info: '在线签署'
  },
  {
    img: require('../images/index/product/icon2.png'),
    info: '合同审批'
  },
  {
    img: require('../images/index/product/icon4.png'),
    info: '印章管理'
  },
  {
    img: require('../images/index/product/icon3.png'),
    info: '文件管理'
  },
  {
    img: require('../images/product/feature/icon2.png'),
    info: '智能提醒'
  },
  {
    img: require('../images/index/product/icon5.png'),
    info: '区块链存证'
  },
  {
    img: require('../images/product/feature/icon3.png'),
    info: '增值服务'
  },
]

const titleIconStyle = {
  height: 24,
  width: 24,
  marginRight: 5,
  marginBottom: 5
}

const identifyInfo = [
  {
    img: require('../images/product/identify/graphic1.png'),
    title: '个人认证',
    info: '支持银行三/四要素对比、人脸识别等多种认证方式。'
  },
  {
    img: require('../images/product/identify/graphic2.png'),
    title: '企业认证',
    info: '营业执照对比、法人个人认证等多种方式交叉验证。'
  },
]

const sectionStyle = {
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  textAlign: 'left'
}

const echoStystemImg = [
  {
    img: require('../images/product/ecosystem/icon1.png'),
    info: '司法诉讼'
  },
  {
    img: require('../images/product/ecosystem/icon2.png'),
    info: '律师服务'
  },
  {
    img: require('../images/product/ecosystem/icon3.png'),
    info: '保险赔付'
  },
  {
    img: require('../images/product/ecosystem/icon4.png'),
    info: '在线贷款'
  },
  {
    img: require('../images/product/ecosystem/icon5.png'),
    info: '投资对接'
  }
]

const signProcess = [
  {
    type: '发起方',
    icon: 'user',
    process: ['实名认证', '上传合同', '预签署', '发起合同', '合同审批、合同签署', '文件管理']
  },
  {
    type: '签署方',
    icon: 'solution',
    process: ['实名认证', '合同审批', '在线签署', '文件管理']
  },
  {
    type: '保障服务',
    icon: 'smile-o',
    process: ['存证保全', '诉讼支援', '保险赔付']
  }
]

const ProductPage = () => (
  <Layout>
    <SEO title="产品功能" />
    <section>
      <Carousel autoplay>
        {
          banner.map((banner, index) => (
            <div key={index}>
              <div className='banner' style={{backgroundImage: `url(${banner.img})`}}>
                <div className='container'>
                  <h2 className='slogan' style={{textAlign: 'center', color: '#fff'}}>{banner.slogan}</h2>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
    <section className='section'>
      <div className='container'>
        <h3>产品功能介绍</h3>
        <Row style={{paddingTop: 20}}>
          {
            featureImg.map((item, index) => (
              <Col lg={3} md={6} sm={12} xs={12} key={index}>
                <div>
                  <img src={item.img} alt='feature' />
                  <p>{item.info}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    </section>
    <section className='section' style={{background: '#fafafa', textAlign: 'left'}}>
      <div className='container'>
        <h4 style={{color: '#5a8dfd'}}><img style={titleIconStyle} src={require('../images/index/standard/icon8.png')} alt='title-icon' />实名认证</h4>
        <h5>只有通过实名认证后签署的电子合同才具备法律效力。</h5>
        <h6>一线签平台通过连接工商局、公安部、运营商和银联对用户提交的企业或个人信息进行联机校验，验证签约方真实身份和真实意愿。通过实名认证后，可发起合同签署和申请公证等。</h6>
        <Row>
          {
            identifyInfo.map((item, index) => (
              <Col md={12} span={24} key={index}>
                <Card
                  bordered={false}
                  style={{ width: '100%', padding: 20, background: 'transparent', maxWidth: 440, margin: '0 auto', color: '#000' }}
                  cover={<img alt="graphic" src={item.img} />}
                >
                  <Meta style={{padding: 10, background: '#bfddff'}} title={item.title} description={item.info} />
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {color: '#fff', backgroundImage: `url(${require('../images/product/section_bg1.png')})`})}>
      <div className='container'>
        <h4><img style={titleIconStyle} src={require('../images/product/title_icon1.png')} alt='title-icon' />在线签署</h4>
        <h5>400+合同模板，支持文件上传，满足各类签署需求。</h5>
        <h6>一线签平台使用领先的数字签名、时间戳和区块链存证技术，对合同文件进行签名和存证，确保电子合同的不可篡改、不可抵赖，满足《中华人民共和国电子签名法》对可靠电子签名的要求，确保电子合同的法律效力。</h6>
        <Row>
          <Col span={24}>
            <img alt='graphic' src={require('../images/product/graphic1.png')} />
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {backgroundImage: `url(${require('../images/product/section_bg2.png')})`})}>
      <div className='container'>
        <h4 style={{color: '#5a8dfd'}}><img style={titleIconStyle} src={require('../images/index/standard/icon4.png')} alt='title-icon' />合同审批</h4>
        <h5>可自定义合同审批流程和规范印章位置。</h5>
        <h6>支持顺序签署、无序签署和单独签署等多种签署方式。</h6>
        <Row>
          <Col md={15} span={24}>
            <img alt='graphic' src={require('../images/product/graphic2.png')} />
          </Col>
          <Col md={9} span={24} style={{paddingLeft: 40, paddingTop: 20}}>
            <h5 className='section-info-title'>自定义合同审批流程</h5>
            <p>签署人根据用章权限，对合同用章通过企业通讯录的组织架构进行用章审批。</p>
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={{textAlign: 'left'}}>
      <div className='container'>
        <Row>
          <Col span={24}>
            <img alt='graphic' src={require('../images/product/graphic3.png')} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{paddingTop: 30}}>
            <h5 className='section-info-title'>设置印章签署位置</h5>
            <p>发起人对签署方需要签署的印章进行位置设定，签署方同意签署后印章会自动出现在设定位置，保证签署效率和美观。</p>
          </Col>
        </Row>
        <Row>
          <Col md={9} span={24} style={{paddingRight: 40, paddingTop: 20}}>
            <h5 className='section-info-title'>自定义合同审批流程</h5>
            <p>签署人根据用章权限，对合同用章通过企业通讯录的组织架构进行用章审批。</p>
          </Col>
          <Col md={15} span={24}>
            <img alt='graphic' src={require('../images/product/graphic4.png')} />
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {color: '#fff', backgroundImage: `url(${require('../images/product/section_bg3.png')})`, backgroundSize: '100% 85%'})}>
      <div className='container'>
        <h4><img style={titleIconStyle} src={require('../images/product/title_icon2.png')} alt='title-icon' />印章管理</h4>
        <h5>可提供系统印章样式，同时支持上传本地文件，可组织所有印章的授权和使用。</h5>
        <Row>
          <Col span={24}>
            <img alt='graphic' src={require('../images/product/graphic5.png')} />
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={{textAlign: 'left', paddingTop: 0}}>
      <div className='container'>
        <h4 style={{color: '#5a8dfd'}}><img style={titleIconStyle} src={require('../images/product/title_icon3.png')} alt='title-icon' />文件管理</h4>
        <h5>可提供系统印章样式，同时支持上传本地文件，可组织所有印章的授权和使用；授权后，还可通过扫描存量纸质合同，上传其电子版，实现统一管理。</h5>
        <Row>
          <Col span={24}>
            <img alt='graphic' src={require('../images/product/graphic6.png')} />
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {backgroundImage: `url(${require('../images/product/section_bg4.png')})`})}>
      <div className='container'>
        <h4 style={{color: '#5a8dfd'}}><img style={titleIconStyle} src={require('../images/product/title_icon4.png')} alt='title-icon' />智能提醒</h4>
        <h5>合同履约智能跟进，合同到期提醒、付款日期提醒、自定义内容提醒等。</h5>
        <Row>
          <Col span={24}>
            <img alt='graphic' src={require('../images/product/graphic7.png')} />
          </Col>
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {backgroundSize: 'cover', color: '#fff', backgroundImage: `url(${require('../images/product/section_bg5.png')})`})}>
      <div className='container'>
        <h4><img style={titleIconStyle} src={require('../images/product/title_icon5.png')} alt='title-icon' />区块链存证</h4>
        <h5>接入蚂蚁区块链、腾讯云区块链TBaaS、金链盟等国内领先的区块链存证平台，用于电子合同去中心化存证。合同签署生效后，由一线签平台把签署过程形成的完整证据链保存至区块链。</h5>
        <Row style={{textAlign: 'center', marginBottom: 40}}>
          <Col md={8} span={24}>
            <img alt='blockchain' style={{marginBottom: '1rem'}} src={require('../images/product/myjf.png')} />
          </Col>
          <Col md={8} span={24}>
            <img alt='blockchain' style={{marginBottom: '1rem'}} src={require('../images/product/txy.png')} />
          </Col>
          <Col md={8} span={24}>
            <img alt='blockchain' src={require('../images/product/jlm.png')} />
          </Col>
        </Row>
        <h4><img style={titleIconStyle} src={require('../images/product/title_icon6.png')} alt='title-icon' />合同生态</h4>
        <h5>整合司法诉讼、律师服务、保险赔付、在线贷款、投资对接等增值服务。</h5>
        <Row>
          {
            echoStystemImg.map((item, index) => (
              <Col md={{span: 4, offset: index === 0 ? 0 : 1}} span={12} key={index}>
                <div style={{textAlign: 'center', lineHeight: 2.5, paddingTop: 20}}>
                  <img src={item.img} alt='echoStystem' />
                  <p>{item.info}</p>
                </div>
              </Col>
            ))
          }
          <div style={{height: 1, clear: "both", lineHeight: 0}}></div>
        </Row>
      </div>
    </section>
    <section className='section' style={Object.assign({}, sectionStyle, {backgroundSize: 'cover', textAlign: 'center', backgroundImage: `url(${require('../images/product/section_bg6.png')})`})}>
      <div className='container'>
        <h3>合同签署流程</h3>
        <Row gutter={20}>
          {
            signProcess.map((item, index) => (
              <Col sm={8} span={24} key={index}>
                <Card headStyle={{background: '#5a8dfd', color: '#fff'}} title={<><Icon type={item.icon} /> {item.type}</>} bordered={false} style={{ height: 350, maxWidth: 300, margin: '20px auto' }}>
                  <Timeline mode="alternate">
                    {
                      item.process.map((process, idx) => <Timeline.Item key={idx}>{process}</Timeline.Item>)
                    }
                  </Timeline>
                </Card>
              </Col>
            ))
          }
          <div style={{height: 1, clear: "both", lineHeight: 0}}></div>
        </Row>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <h3>产品形态</h3>
        <h4>SaaS服务：支持PC、H5、APP、微信等多终端签署，满足客户的多样化需求。</h4>
        <Row>
          <Col md={15} span={24}>
            <img alt='graphic' src={require('../images/product/graphic8.png')} />
          </Col>
          <Col md={{span: 5, offset: 2}} sm={{span: 12, offset: 6}} xs={{span: 18, offset: 3}}>
            <img alt='logo' width={240} height={94} src={require('../images/logo_d.png')} />
            <h5>支持多终端签署，随时随地、高效便捷地满足您的签署需求</h5>
          </Col>
        </Row>
      </div>
    </section>
    <section className='section experience-info'>
      <h2>开始签署您的第一份电子合同</h2>
      <Button type="default" shape="round" href='/console'>
          立即体验
      </Button>
    </section>
  </Layout>
)

export default ProductPage
