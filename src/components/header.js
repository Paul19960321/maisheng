import { Link } from "gatsby"
import React from "react"
import { Layout, Dropdown, Icon, Menu, Button, Drawer } from 'antd'
import logo from '../images/logo.png'
import logoDark from '../images/logo_d.png'

const { Header } = Layout;
const { SubMenu } = Menu;

const menuStyle = {
  minWidth: '8em',
  textAlign: 'center'
}

const linkStyle =  {
  margin: 0
}

class PageHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      reverse: true,
      visible: false
    };
  }
  scrollSpy = () => {
    if (window.pageYOffset > 100) {
      this.setState({
        reverse: true
      });
    } else {
      this.setState({
        reverse: false
      });
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    if (window.location.pathname === '/') {
      this.setState({
        reverse: false
      });
      window.addEventListener('scroll', this.scrollSpy);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollSpy);
  }
  render() {
    const { reverse } = this.state;
    return (
      <Header className={['header', reverse ? 'reverse': '']}>
        <div className='container' style={{padding: 0}}>
          <Link to='/' className="logo">
            {
              reverse ?
              <img src={logoDark} alt='logo' /> :
              <img src={logo} alt='logo' />
            }
          </Link>
          <nav className='navbar'>
            <Link to='/'>首页</Link>
            <Dropdown placement='bottomCenter' overlay={<Menu style={menuStyle}>
              <Menu.Item>
                <Link to='/product' style={linkStyle}>产品功能</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/package' style={linkStyle}>产品价格</Link>
              </Menu.Item>
            </Menu>}>
              <Button type="link">产品<Icon type="caret-down" /></Button>
            </Dropdown>
            <Link to='/solution'>方案</Link>
            <Dropdown placement='bottomCenter' overlay={<Menu style={menuStyle}>
              <Menu.Item>
                <Link to='/loan' style={linkStyle}>银行贷款</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/insurance' style={linkStyle}>保险服务</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/faq' style={linkStyle}>电子合同知识库</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/help' style={linkStyle}>帮助中心</Link>
              </Menu.Item>
            </Menu>}>
              <Button type="link">服务<Icon type="caret-down" /></Button>
            </Dropdown>
            <Dropdown placement='bottomCenter' overlay={<Menu style={menuStyle}>
              <Menu.Item>
                <Link to='/about' style={linkStyle}>公司介绍</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/joinus' style={linkStyle}>加入我们</Link>
              </Menu.Item>
              <Menu.Item>
                <a href="#contact" style={linkStyle}>联系我们</a>
              </Menu.Item>
            </Menu>}>
              <Button type="link">我们<Icon type="caret-down" /></Button>
            </Dropdown>
          </nav>
          <nav className='navbar' style={{float: 'right'}}>
            <Link to='/verify'>合同查验</Link>
            <Link to='/app'>下载</Link>
            <a href='//yxq.winksign.com/#/login'>登录</a>
            <a href='//yxq.winksign.com/#/register'>注册</a>
          </nav>
          <Button className='bar-btn' onClick={this.showDrawer} ghost type="link" shape="circle" icon="bars" />
        </div>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{padding: 0}}
        >
          <Menu
            mode="inline"
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
          >
            <Menu.Item>
              <Link to='/' style={{color: 'inherit'}}>
              <Icon type="home" />
              首页</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>产品</span>
                </span>
              }
            >
              <Menu.Item key="1"><Link to='/product' style={linkStyle}>产品功能</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/package' style={linkStyle}>产品价格</Link></Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Link to='/solution' style={{color: 'inherit'}}>
              <Icon type="solution" />方案</Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="safety" />
                  <span>服务</span>
                </span>
              }
            >
              <Menu.Item key="5"><Link to='/loan' style={linkStyle}>银行贷款</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/insurance' style={linkStyle}>保险服务</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/qanda' style={linkStyle}>电子合同知识库</Link></Menu.Item>
              <Menu.Item key="8"><Link to='/help' style={linkStyle}>帮助中心</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="team" />
                  <span>我们</span>
                </span>
              }
            >
              <Menu.Item key="9"><Link to='/about' style={linkStyle}>公司介绍</Link></Menu.Item>
              <Menu.Item key="10"><Link to='/joinus' style={linkStyle}>加入我们</Link></Menu.Item>
              <Menu.Item key="11"><a href="#contact" style={linkStyle}>联系我们</a></Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Link to='/verify' style={{color: 'inherit'}}>
              <Icon type="file-protect" />合同查验</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/app' style={{color: 'inherit'}}>
              <Icon type="download" />下载</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    )
  }
}

export default PageHeader;