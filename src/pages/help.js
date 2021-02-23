import React from "react"
import { Tabs, Collapse, Icon } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import helpTxt from '../static/Q&A.js';
const { TabPane } = Tabs;
const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f3f3f3',
  borderRadius: 10,
  marginBottom: 20,
  border: 0,
  overflow: 'hidden',
};

const HelpPage = () => (
  <Layout>
    <SEO title="帮助中心" />
    <section className='banner' style={{backgroundImage: `url(${require('../images/banner/help.png')})`}}>
      <div className='container'>
        <h1 className='slogan' style={{textAlign: 'center'}}>帮助中心</h1>
      </div>
    </section>
    <section className='container' style={{padding: 10}}>
    <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab="帮助文档" key="1" style={{padding: 10}}>
          <h5>常见问题</h5>
          <Collapse
            bordered={false}
            accordion={true}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.common.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>账号问题</h5>
          <Collapse
            bordered={false}
            accordion={true}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.account.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>实名认证</h5>
          <Collapse
            bordered={false}
            accordion={true}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.identify.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>合同签署</h5>
          <Collapse
            accordion={true}
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.contract.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>文档管理</h5>
          <Collapse
            accordion={true}
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.files.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>法律问题</h5>
          <Collapse
            accordion={true}
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.law.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>产品定价</h5>
          <Collapse
            accordion={true}
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.product.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>接口问题</h5>
          <Collapse
            accordion={true}
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            {
              helpTxt.sdk.map((question, index) => (
                <Panel header={question.q} key={index} style={customPanelStyle}>
                  <p className='panel-answer' dangerouslySetInnerHTML={{__html: question.a}}></p>
                </Panel>
              ))
            }
          </Collapse>
          <h5>更多帮助方式</h5>
          <p>1、咨询专业客服</p>
          <p>2、关注我们的官方微信公众号“一线签电子合同”，可查看更多资讯和新闻动态。</p>
          <p>3、商业合作需求</p>
          <p>请您发送合作需求至support@winksign.com ，我们将在1-2个工作日内回复您</p>
        </TabPane>
      </Tabs>
    </section>
  </Layout>
)

export default HelpPage
