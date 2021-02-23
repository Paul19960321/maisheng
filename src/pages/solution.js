import React from "react"
import { Tabs, Card } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const { TabPane } = Tabs;
const { Meta } = Card;
const list = [
  {
    img: require('../images/solution/industry1.png'),
    title: '医疗行业',
    question: [
      '数据存放在医院存储设备，数据容易被篡改，医院很难自证清白。',
      '司法程序费时耗力，医患关系紧张。'
    ],
    solution: [
      '医疗电子数据存储在区块链上，有效防止数据篡改，轻松保存完整证据链。',
      '在线申请司法鉴定，证据链梳理，出证报告，加速推进批量案件处理进度。'
    ]
  },
  {
    img: require('../images/solution/industry2.png'),
    title: '人力资源',
    question: [
      '合同量大，管理繁琐，操作易失误，易丢失，企业人员流动性大。',
      '异地签署效率低，周期长，快递成本高。',
      '求职者身份难核实，毁约风险高；合同易被篡改。'
    ],
    solution: [
      '异地合同在线签署，实名认证确保员工真实身份。',
      '云端存储，一键检索省时省力；文档管理，企业员工动态实时掌握。',
      '电子合同保存完整证据链，杜绝合同代签、篡改等安全隐患。'
    ]
  },
  {
    img: require('../images/solution/industry3.png'),
    title: '汽车服务',
    question: [
      '汽车产业链环节多，层级多，部门多，文件多，流转效率低，管理繁琐。',
      '高频交易，线下签约周期长、成本高、安全性差。',
      '线下签署，身份核实难，后期纠纷，取证难度大。'
    ],
    solution: [
      '实现线上线下文件流转与签署闭环，提升线上线下服务水平，实现线上线下综合管理。',
      '打通上下游供应链，实现安全高效管理。',
      '真实身份认证，提升业务安全控制能力，有效降低风险。'
    ]
  },
  {
    img: require('../images/solution/industry4.png'),
    title: '物流行业',
    question: [
      '人员多，网点多，订单分散，业务组织性低，内部管理效率低。',
      '“纸上物流”异地签约身份认证难，易发生纠纷。',
      '信息流转滞后，涉及多方协作，易扯皮、难追责。'
    ],
    solution: [
      '运输全程可视，信息透明，实现及时有效沟通，追责有据。',
      '建立结构化管理和智慧物流模式，协调仓储调度，撮合物流交易。',
      '权威身份认证，确保签署人的真实身份。'
    ]
  },
  {
    img: require('../images/solution/industry5.png'),
    title: '教育培训',
    question: [
      '客户来源广，传统签署，流程繁琐，效率低，易丢失冲动型消费客户；',
      '点击确认方式无法律效力，存在较大的法律风险；'
    ],
    solution: [
      '优化合同签署流程，减少人工错误，降低人力投入，提高工作效率，减少时间消耗。',
      '电子合同确保法律效力，加速成单周期。'
    ]
  },
  {
    img: require('../images/solution/industry6.png'),
    title: 'O2O',
    question: [
      '入驻商家分散，行业跨度大，合同处理繁琐，快递成本高；',
      '跟不上多元化的用户需求，用户体验差。'
    ],
    solution: [
      '线上处理审批 、商家入驻等流程，提升响应速度及处理效率；',
      '电子化办理用户线上业务，为用户提供便捷、及时的服务。'
    ]
  }
];

class Tab extends React.Component {
  state = {
    loading: false,
    mobile: false,
    activeKey: {
      0: true
    }
  };
  componentDidMount() {
    this.setState({
      mobile: window.innerWidth <= 768 ? true : false
    })
    window.addEventListener('resize', this.handleResize);
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    this.setState({
      mobile: window.innerWidth <= 768 ? true : false
    })
  }
  onChange = (activeKey) => {
    if (!this.state.activeKey[activeKey]) {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ 
          loading: false,
          activeKey: Object.assign(this.state.activeKey, {[activeKey]: true})
        });     
      }, 300);
    }
  };
  render() {
    const { loading, mobile } = this.state;
    return (
      <Tabs defaultActiveKey="0" tabPosition={mobile ? 'top' : 'left'} size='large' onChange={this.onChange}>
        {list.map((item, index) => (
          <TabPane tab={item.title} key={index}>
            <Card style={{ textAlign: 'left' }} loading={loading}>
              <Meta
                avatar={
                  mobile ? '' : <img src={item.img} alt='industry' />
                }
                title={<p style={{fontSize: 18, marginBottom: 10}}>{item.title}</p>}
                description={
                  <>
                    <p>行业痛点：</p>
                    {item.question.map((question, index) => (
                        <p key={index}>{`${index}）${question}`}</p>
                    ))}
                    <p>解决方案：</p>
                    {item.solution.map((solution, index) => (
                        <p key={index}>{`${index}）${solution}`}</p>
                    ))}
                  </>
                }
              />
            </Card>
          </TabPane>
        ))}
      </Tabs>
    )
  }
}

const SolutionPage = () => (
  <Layout>
    <SEO title="方案" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/solution.png')})`}}>
      <div className='container'>
        <h1 className='slogan' style={{maxWidth: 900, margin: '0 auto'}}>各行业高效解决方案</h1>
        <h1 className='slogan' style={{textAlign: 'center'}}>助力企业快速发展</h1>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <Tab />
      </div>
    </section>
  </Layout>
)

export default SolutionPage
