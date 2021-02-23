import React from "react"
import { Popover, Card, Row, Col, Button } from 'antd';
import axios from '../common/request';

import Layout from "../components/layout"
import SEO from "../components/seo"

const btnContent = [
  {
    icon: require('../images/package/fixedbtn/icon1.png'),
    content: <div className='popover-content'><img src={require('../images/QRcode.png')} alt='service' /><p>官方微信客服</p></div>
  },
  {
    icon: require('../images/package/fixedbtn/icon2.png'),
    content: <div className='popover-content'><img src={require('../images/QRcode.png')} alt='service' /><p>官方微信客服</p></div>
  },
  {
    icon: require('../images/package/fixedbtn/icon3.png'),
    content: <div className='popover-content'><h4 style={{color: '#5a8dfd'}}>400-8808890</h4><p>客服服务电话</p></div>
  }
]

const FixedBtnGroup = () => (
  <div style={{position: 'fixed', top: '50%', right: 10}}>
    {
      btnContent.map((btn, index) => (
        <Popover placement="left" trigger='hover' key={index} content={btn.content}>
          <div className='fixed-btn'>
            <img src={btn.icon} alt='btn-icon' />
          </div>
        </Popover>
      )) 
    }
  </div>
)

class PackagePage extends React.Component {
  state = {
    comboList: []
  };
  componentDidMount() {
    axios({
      url: '/operate/taocan/list',
      method: 'get'
    }).then(res => {
      this.setState({
        comboList: res.data
      })
    })
  }
  buyCombo() {
    window.location.href = 'https://api.winksign.com/#/combo'
  }
  render() {
    const { comboList } = this.state;
    return (
      <Layout>
        <SEO title="产品价格" />
        <section className='container' style={{paddingBottom: 50}}>
          <Row gutter={24} style={{paddingTop: 40}}>
          {
            comboList.map(item => (
              <Col md={{span: 12}} className="combo-panel" key={item.id}>
                {
                  item.giftState === 1 ?
                  <Card className="with-gift">
                    <Row>
                      <Col span={12} className="combo-info">
                        <div className="combo-name">{ item.name }</div>
                        <div className="combo-price">￥<span>{ item.price }</span>/{ `${item.validPeriod}${item.validUnitName}` }</div>
                        <div className="combo-rule"><span>{ `${item.serviceCopies}份${item.taoCanTypeName}` }</span></div>
                        <div><Button type="primary" onClick={this.buyCombo}>立即购买</Button></div>
                      </Col>
                      <Col span={12}>
                        <img className="gift-mark" src={require('../images/package/gift-mark.png')} alt="" />
                        <div className="gift-img">
                          {
                            item.giftImage && <img src={item.giftImage} alt="" />
                          }
                        </div>
                        <div className="gift-name">{ item.giftName }</div>
                        <div className="gift-price">￥<del>{ item.giftMarketPrice }</del></div>
                        {
                          item.giftFlag === 1 && <div className="gift-rule">此活动仅限首次购买</div>
                        }
                      </Col>
                    </Row>
                  </Card>
                  :
                  <Card>
                    <Row>
                      <Col span={12} offset={6} className="combo-info">
                        <div className="combo-name">{ item.name }</div>
                        <div className="combo-price">￥<span>{ item.price }</span>/{ `${item.validPeriod}${item.validUnitName}` }</div>
                        <div className="combo-rule"><span>{ `${item.serviceCopies}份${item.taoCanTypeName}` }</span></div>
                        <div><Button type="primary" onClick={this.buyCombo}>立即购买</Button></div>
                      </Col>
                    </Row>
                  </Card>
                }
              </Col>
            ))
          }
          </Row>
          <FixedBtnGroup />
        </section>
      </Layout>
    )
  }
}

export default PackagePage