import React from "react"
import { Row, Col, Button, List, Icon, Card, Modal, Form, Input } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerImg from '../images/index/banner.png';
const { Meta } = Card;

const productImg = [
  {
    img: require('../images/index/product/icon1.png'),
    info: '合同签署'
  },
  {
    img: require('../images/index/product/icon2.png'),
    info: '智能审批'
  },
  {
    img: require('../images/index/product/icon3.png'),
    info: '文件管理'
  },
  {
    img: require('../images/index/product/icon4.png'),
    info: '印章管理'
  },
  {
    img: require('../images/index/product/icon5.png'),
    info: '区块链存证'
  },
  {
    img: require('../images/index/product/icon6.png'),
    info: '增值服务'
  }
]

const solutionImg = [
  {
    img: require('../images/index/solution/icon1.png'),
    info: '制造业'
  },
  {
    img: require('../images/index/solution/icon2.png'),
    info: '金融业'
  },
  {
    img: require('../images/index/solution/icon3.png'),
    info: '医药行业'
  },
  {
    img: require('../images/index/solution/icon4.png'),
    info: '增值服务'
  },
  {
    img: require('../images/index/solution/icon5.png'),
    info: '法律行业'
  },
  {
    img: require('../images/index/solution/icon6.png'),
    info: '政府机构'
  },
  {
    img: require('../images/index/solution/icon7.png'),
    info: '资产管理'
  },
  {
    img: require('../images/index/solution/icon8.png'),
    info: '保险行业'
  },
  {
    img: require('../images/index/solution/icon9.png'),
    info: '旅游行业'
  },
  {
    img: require('../images/index/solution/icon10.png'),
    info: '房地产业'
  },
  {
    img: require('../images/index/solution/icon11.png'),
    info: '教育行业'
  },
  {
    img: require('../images/index/solution/icon12.png'),
    info: '公益组织'
  }
];

const requireContext = require.context('../images/index/customer', true, /^\.\/.*\.png$/);
const customerImg = requireContext.keys().map(requireContext);
const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  height: '40vw',
  maxHeight: 600,
  minHeight: 350,
  marginTop: -64,
  paddingTop: 64,
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat'
}

const standardInfo = [
  {
    img: require('../images/index/standard/main_icon1.png'),
    title: '认证安全',
    info: [
      {
        name: '云认证',
        icon: require('../images/index/standard/icon1.png'),
        text: '工信部可信云认证'
      },
      {
        name: '系统保护',
        icon: require('../images/index/standard/icon2.png'),
        text: '工信部信息系统安全登记保护三级认证'
      }
    ]
  },
  {
    img: require('../images/index/standard/main_icon2.png'),
    title: '合规安全',
    info: [
      {
        name: 'CA机构',
        icon: require('../images/index/standard/icon3.png'),
        text: '多家权威CA机构合作支持'
      },
      {
        name: '全程存证',
        icon: require('../images/index/standard/icon4.png'),
        text: '全流程记录存证，全程可出证'
      },
      {
        name: '司法鉴定',
        icon: require('../images/index/standard/icon5.png'),
        text: '对接司法流程全系统司法鉴定'
      }
    ]
  },
  {
    img: require('../images/index/standard/main_icon3.png'),
    title: '运营安全',
    info: [
      {
        name: '高并发',
        icon: require('../images/index/standard/icon6.png'),
        text: '接入国内领先的区块链存证平台，为客户提供完整的电子合同证据链。'
      },
      {
        name: '高可用',
        icon: require('../images/index/standard/icon7.png'),
        text: '7X24小时不间断运维服务可用性99.99%'
      },
      {
        name: '高可靠',
        icon: require('../images/index/standard/icon8.png'),
        text: '同城双活，异地容灾'
      }
    ]
  },
  {
    img: require('../images/index/standard/main_icon4.png'),
    title: '使用安全',
    info: [
      {
        name: '数据加密',
        icon: require('../images/index/standard/icon9.png'),
        text: '领先的信息运维和多层加密机制，实现高强度数据安全'
      },
      {
        name: '区块链技术',
        icon: require('../images/index/standard/icon10.png'),
        text: '保证数据不可篡改,实时存证'
      }
    ]
  }
]

const processInfo = [
  [
    {
      title: '实名认证',
      icon: require('../images/index/process/icon1.png'),
      info: '支持人脸识别、营业执照、法人、银行等多种要素交叉验证。'
    },
    {
      title: '合同模板',
      icon: require('../images/index/process/icon2.png'),
      info: '400+合同模板，支持文件上传满足各类签署需求。'
    },
    {
      title: '智能审批',
      icon: require('../images/index/process/icon3.png'),
      info: '自定义合同审批流程，审批完成后自动发起签署。'
    }
  ],
  [
    {
      title: '意愿认证',
      icon: require('../images/index/process/icon4.png'),
      info: '人脸比对、签约密码、短信验证码等方式进行校验。'
    },
    {
      title: '合同签署',
      icon: require('../images/index/process/icon5.png'),
      info: 'CA数字签名，与国家授时中心同步的可信时间戳，区块链技术存证，极速签发，有效防篡改。'
    }
  ],
  [
    {
      title: '区块链存证',
      icon: require('../images/index/process/icon6.png'),
      info: '接入国内领先的区块链存证平台，为客户提供完整的电子合同证据链。'
    },
    {
      title: '文档管理',
      icon: require('../images/index/process/icon7.png'),
      info: '提供合同检索、归档、下载等多种功能。'
    },
    {
      title: '履约提醒',
      icon: require('../images/index/process/icon8.png'),
      info: '合同履约智能跟进，到期通知提醒等。'
    }
  ]
]

const processboxStyle = {
  width: 265,
  height: 450,
  padding: 10,
  backgroundImage: `url(${require('../images/index/process/box_bg1.png')})`,
  margin: '0 auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
};

const processDesc = [
  {
    img: require('../images/index/process/main_icon1.png'),
    title: '印章管理',
    desc: '提供系统印章样式，同时支持上传本地文件，可组织所有印章的授权和使用。'
  },
  {
    img: require('../images/index/process/main_icon2.png'),
    title: '法律服务',
    desc: '精英团队为您提供法律咨询、合同审核、解决方案等法律服务；保全完整证据链，支持出证，提供诉讼支援。'
  },
  {
    img: require('../images/index/process/main_icon3.png'),
    title: '银行贷款',
    desc: '对接五大行，按照客户资质和需求，精选多款贷款产品。'
  },
  {
    img: require('../images/index/process/main_icon4.png'),
    title: '保险服务',
    desc: '提供重疾险,意外险等多种优质保险解决方案，满足企业和个人全方位的保险需求。'
  },
  {
    img: require('../images/index/process/main_icon5.png'),
    title: '统一管理',
    desc: '授权后，可通过扫描存量纸质合同，上传其电子版，实现统一管理。'
  }
]

const ContactForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="预约演示"
          okText="提交"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" labelCol={{span: 4}} wrapperCol={{span: 20}}>
            <Form.Item>请留下您的联系方式，稍后会有专人为您服务</Form.Item>
            <Form.Item label="您的称呼">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入您的姓名!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入您的手机号码!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="公司名称">
              {getFieldDecorator('company', {
                rules: [{ required: true, message: '请输入您的公司名称!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="您的职位">
              {getFieldDecorator('role', {
                rules: [{ required: true, message: '请输入您的职位!' }],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class IndexPage extends React.Component {
  state = {
    contactFormVisible: false
  }
  showModal = () => {
    this.setState({ contactFormVisible: true });
  };

  handleCancel = () => {
    this.setState({ contactFormVisible: false });
  };
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ contactFormVisible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <Layout>
        <SEO title="首页" />
        <ContactForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.contactFormVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <section style={bannerStyle}>
          <div className="container" style={{height: '100%'}}>
            <div style={{color: '#fff', height: '100%', display: 'table'}}>
              <div className="index-slogan">
                <h1>一线签电子合同</h1>
                <h3>全生态电子合同服务平台</h3>
                <h4>电子签章 | 电子合同 | 智能审批 | 印章管理 | 区块链存证</h4>
                <Button shape="round" onClick={this.showModal}>
                  预约演示
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className='section product-info'>
          <div className='container'>
            <h2 className='section-title'>产品介绍</h2>
            <h4 className='section-subtitle'>联合产业链上下游，双向赋能，打造富有生命力的电子合同服务生态体系</h4>
            <Row>
              {
                productImg.map((item, index) => (
                  <Col lg={4} md={8} sm={12} xs={12} key={index}>
                    <div className='info-box'>
                      <img src={item.img} alt='product' />
                      <p>{item.info}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </section>
        <section className='section process-info' style={{background: '#f7f9ff'}}>
          <div className='container'>
            <h2 className='section-title'>签署全流程精准服务</h2>
            <h4 className='section-subtitle'>每个签署环节为您提供安全、便捷的服务，保障签署全程的合法权益</h4>
            <Row type='flex' align='middle'>
              {
                processInfo.map((list, index) => (
                  <React.Fragment key={index}>
                  <Col lg={6} span={24} key={index}>
                    <div style={index === 1 ? Object.assign({}, processboxStyle, {backgroundImage: `url(${require('../images/index/process/box_bg2.png')})`}) : processboxStyle}>
                      <h4 style={{color: index === 1 ? '#fff' : '#5a8dfd'}}>{index === 0 ? '签署前' : index === 1 ? '签署中' : index === 2 ? '签署后' : ''}</h4>
                      <List
                        style={{textAlign: 'left', padding: 10}}
                        itemLayout="vertical"
                        dataSource={list}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              title={<><img style={{width: 20, height:20, marginRight: 5, marginBottom: 5}} alt='icon' src={item.icon} />{item.title}</>}
                              description={item.info}
                            />
                          </List.Item>
                        )}
                      />
                    </div>
                  </Col>
                  {
                    index !== 2 ? <Col lg={3} span={24} style={{fontSize: 20}}><Icon className='arrow-icon' type="double-right" /></Col> : ''
                  }
                  </React.Fragment>
                ))
              }
              <div style={{height: 1, clear: "both", lineHeight: 0}}></div>
            </Row>
            <div style={{background: '#fff', borderRadius: 20, overflow: 'hidden', marginTop: 40}}>
              <h4 style={{background: '#5a8dfd', color: '#fff', padding: 10}}>签署全程</h4>
              <Row type='flex' justify='space-around'>
                {
                  processDesc.map((item, index) => (
                    <Col md={12} lg={{span: 4, offset: index === 0 ? 0 : 1}} span={24} key={index}>
                      <Card
                        bordered={false}
                        cover={<img style={{width: 88, height: 88, margin: '0 auto'}} alt="ico" src={item.img} />}
                      >
                        <Meta title={item.title} description={item.desc} />
                      </Card>
                    </Col>
                  ))
                }
                <div style={{height: 1, clear: "both", lineHeight: 0}}></div>
              </Row>
            </div>
          </div>
        </section>
        <section className='section standard-info'>
          <div className='container'>
            <h2 className='section-title'>安全合规，保障签署权益</h2>
            <h4 className='section-subtitle'>国家权威机构认证，符合文件签署相关法律规范，合法保障签署权益；区块链存证，安全可靠</h4>
            <Row>
              {
                standardInfo.map((item, index) => (
                  <Col lg={12} span={24} key={index} style={{padding: 20}}>
                    <div style={{background: '#f1f6ff', textAlign: 'left', padding: '10px 40px', minHeight: 280, marginBottom: 20}}>
                      <img style={{position: 'relative', height: 100, width: 100, top: -40}} src={item.img} alt='icon' />
                      <h3 style={{paddingLeft: 20, verticalAlign: 'top', display: 'inline-block'}}>{item.title}</h3>
                      <Row gutter={{md: 30, sm: 20, xs: 10}}>
                        {
                          item.info.map((info, idx) => (
                            <Col sm={8} xs={24} key={idx}>
                              <h4 style={{color: '#5a8dfd', padding: '10px 0', marginBottom: 10, borderBottom: '1px dashed rgba(90,141,253,.5)', whiteSpace: 'nowrap'}}><img style={{width: 20, height:20, marginBottom: 5, marginRight: 5}} src={info.icon} alt='icon' />{info.name}</h4>
                              <p>{info.text}</p>
                            </Col>
                          ))
                        }
                      </Row>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </section>
        <section className='section solution-info'>
          <div className='container'>
            <h2 className='section-title'>行业解决方案</h2>
            <h4 className='section-subtitle'>针对不同行业痛点，提供差异化的文件签署解决方案</h4>
            <Row>
              {
                solutionImg.map((item, index) => (
                  <Col lg={4} sm={8} xs={8} key={index}>
                    <div className='info-box'>
                      <img src={item.img} alt='process' />
                      <p>{item.info}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </section>
        <section className='section customer-info'>
          <div className='container'>
          <h2 className='section-title'>合作客户</h2>
          <h4 className='section-subtitle'>精诚合作，力求为每位客户提供优质服务</h4>
            <Row>
              {
                customerImg.map((img, index) => (
                  <Col lg={6} sm={8} xs={12} key={index}>
                    <div className='info-box'>
                      <img src={img} alt='customer' style={{boxShadow: '0 0 10px rgba(0,0,0,.05)', margin: 0, height: '100%', width: '100%'}} />
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </section>
        <section className='section experience-info'>
          <h2>开始签署您的第一份电子合同</h2>
          <Button type="default" shape="round" href='//yxq.winksign.com'>
              立即体验
          </Button>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
