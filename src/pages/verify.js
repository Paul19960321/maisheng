import React from "react"
import { Row, Col, Radio, Upload, Icon, message } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class VerifyPage extends React.Component {
  state = {
    mode: 'a'
  };
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({
      mode
    })
  }
  render() {
    const { mode } = this.state;
    return (
      <Layout>
        <SEO title="合同查验" />
        <section className='banner' style={{backgroundImage: `url(${require('../images/banner/verify.png')})`}}>
          <div className='container' style={{textAlign: 'center', color: '#fff'}}>
            <h1 className='slogan' style={{marginBottom: 10}}>验证合同有效性</h1>
            <h4>支持电子版和纸质版的合同查验</h4>
          </div>
        </section>
        <section className='container' style={{textAlign: 'center', marginTop: 50}}>
          <Radio.Group size='large' onChange={this.handleModeChange} buttonStyle='solid' value={mode}>
            <Radio.Button value="a" style={{width: '9em'}}>上传文件查验</Radio.Button>
            <Radio.Button value="b" style={{width: '9em'}}>合同二维码查验</Radio.Button>
          </Radio.Group>
          <h5 style={{marginTop: 15}}>合同查验目前仅支持通过一线签平台完成签署的文件。</h5>
        </section>
        <section className='container' style={{paddingBottom: 50}}>
          <Row>
              {
                mode === 'a' ? 
                <>
                  <Col md={{span: 20, offset: 2}} span={24}>
                    <Dragger {...props} style={{background: '#eef3ff'}}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">点击上传合同文件</p>
                      <p className="ant-upload-hint">(支持上传.doc/.jpg/.jpeg/.pdf文件格式)</p>
                    </Dragger>
                  </Col>
                  <Col md={{span: 12, offset: 6}} span={24} style={{paddingTop: 30}}>
                    <h4>电子合同查验步骤</h4>
                    <p>1、获取在”一线签”平台签署的电子合同文件；</p>
                    <p>2、进入“一线签”官网，找到“合同查验”并上传电子合同文件；</p>
                    <p><img alt='graphic' src={require('../images/verify/graphic1.png')} /></p>
                    <p>3、点击查验，查看电子合同签署的验证结果和证书信息。</p>
                    <p><img alt='graphic' src={require('../images/verify/graphic2.png')} /></p>
                    <p><img alt='graphic' src={require('../images/verify/graphic3.png')} /></p>
                  </Col>
                </>
                 : 
                <Col md={{span: 12, offset: 6}} span={24} style={{paddingTop: 30}}>
                  <h4>二维码查验步骤</h4>
                  <p>1、在一线签平台下载需要查验的文档，并打印；</p>
                  <p>2、找到附有“签署摘要”的尾页，简单记录合同文件名称、签署人、签署时间等信息；</p>
                  <p><img alt='graphic' src={require('../images/verify/graphic4.png')} /></p>
                  <p>3、扫描尾页右上角的二维码，可直接查看其电子档、签署日志及防伪码信息；</p>
                  <p><img alt='graphic' src={require('../images/verify/graphic5.png')} /></p>
                  <p>4、将电子档文件与纸质档进行比对，查看有无篡改。</p>
                  <p><img alt='graphic' src={require('../images/verify/graphic6.png')} /></p>
                </Col>
              }
          </Row>
        </section>
      </Layout>
    )
  }
}

export default VerifyPage
