import React from 'react'
import { Layout, Row, Col } from 'antd';
import { Link } from 'gatsby';

const { Footer } = Layout;

const iconStyle = {
    marginRight: 10,
    marginBottom: 3,
    height: 16,
    width: 16
}

export default () => {
    return (
        <Footer className='footer'>
            <div className='container' style={{height: 'auto'}}>
                <Row style={{padding: '40px 0'}} id='contact'>
                    <Col lg={4} sm={6} xs={12}>
                        <h4>公司</h4>
                        <ul>
                            <li><Link to='/about'>公司介绍</Link></li>
                            <li><Link to='/joinus'>加入我们</Link></li>
                        </ul>
                    </Col>
                    <Col lg={4} sm={6} xs={12}>
                        <h4>支持</h4>
                        <ul>
                            <li><Link to='/help'>帮助中心</Link></li>
                            <li><Link to='/protocol/privacy'>用户协议</Link></li>
                        </ul>
                    </Col>
                    <Col lg={8} sm={12} xs={24}>
                        <h4>官方二维码</h4>
                        <div className='qrcode-wrap'>
                            <img src={require('../images/download_QRcode.png')} alt="app下载链接" />
                            <p>下载“一线签”app</p>
                        </div>
                        <div className='qrcode-wrap'>
                            <img src={require('../images/QRcode.png')} alt="官方微信公众号"/>
                            <p>关注官方公众号</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} xs={24}>
                        <h4>联系我们</h4>
                        <ul>
                            <li><img style={iconStyle} src={require('../images/footer/icon1.png')} alt="tel" />400-89768800</li>
                            <li><img style={iconStyle} src={require('../images/footer/icon2.png')} alt="email" />support@winksign.com</li>
                            <li><img style={iconStyle} src={require('../images/footer/icon3.png')} alt="address" />深圳市南山区南头科技园中三路1号-国人通信大厦A栋202</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div style={{textAlign: 'center', fontSize: 12, padding: 8, background: '#222'}}>
                <span>Copyright &copy; 2019-2020 麦昇科技（深圳）有限公司 
                <a href="//beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">【粤ICP备19057216号-1】</a>
                </span>
            </div>
        </Footer>
    )
}