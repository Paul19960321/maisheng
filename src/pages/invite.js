import React from "react"
import { Form, Input, Row, Col, Button, message, Skeleton } from 'antd';

import Context from '../context/Context';
import SEO from "../components/seo"
import { getVCode, inviteInfo, inviteApply } from '../api/index';
import { getUrlQuery } from '../common/utils';

class InviteForm extends React.Component {
    state = {
        countDown: 0,
        postLoading: false
    };
    timer = null
    getMobileVcode = () => {
        const mobile = this.props.form.getFieldValue('mobile');
        var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
        if (!reg.test(mobile)) {
            message.warning('无效的手机号');
            return false;
        }
        getVCode({
            Mobil: mobile,
            NationCode: '86'
        }).then(() => {
            this.setState({
                countDown: 60
            })
            this.timer = setInterval(() => {
                if (this.state.countDown === 0) {
                    clearInterval(this.timer);
                } else {
                    this.setState({
                        countDown: this.state.countDown - 1
                    })
                }
            }, 1000);
        })
    };
    applyInvite = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    postLoading: true
                })
                const pageQuery = getUrlQuery();
                inviteApply({
                    TeamId: pageQuery.TeamId,
                    Mobil: values.mobile,
                    AuthCode: values.vcode,
                    Name: values.name,
                    UserId: pageQuery.UserId
                })
                    .then(() => {
                        this.setState({
                            postLoading: false
                        })
                        message.success('申请成功');
                    })
                    .catch(() => {
                        this.setState({
                            postLoading: false
                        })
                    })
            }
        });
    };
    render() {
        const { countDown, postLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.applyInvite}>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请填写真实姓名!' }],
                    })(<Input placeholder='填写真实姓名' allowClear />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: '请填写手机号码!' },
                        {pattern: /^[1][3,4,5,6,7,8][0-9]{9}$/, message: '请输入正确的手机号码!'}],
                    })(<Input placeholder='填写手机号码' allowClear />)}
                </Form.Item>
                <Form.Item>
                    <Row gutter={5}>
                        <Col span={15}>
                            {getFieldDecorator('vcode', {
                                rules: [{ required: true, message: '请输入收到的验证码!' }],
                            })(<Input placeholder='请输入收到的验证码' allowClear />)}
                        </Col>
                        <Col span={9}>
                            <Button disabled={countDown > 0} onClick={this.getMobileVcode}>{ countDown ? `重新获取(${countDown}s)` : '获取验证码' }</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" loading={postLoading} onClick={this.applyInvite} htmlType="submit" size='large' block>
                        提交申请
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedInviteForm = Form.create({ name: 'invite' })(InviteForm);

class InvitePage extends React.Component {
    state = {
        teamName: null
    };
    componentDidMount() {
        const pageQuery = getUrlQuery();
        inviteInfo({
            UserId: pageQuery.userId,
            TeamId: pageQuery.teamId
        }).then(res => {
            this.setState({
                teamName: res.Data.TeamName
            });
        })
    }
    render() {
        const { teamName } = this.state;
        return (
            <Context.Consumer>
                {
                    state => (
                        <main style={{background: '#f0f1f6', padding: '20px 10px', minHeight: '100vh'}}>
                            <SEO title="邀请您加入" />
                            <div style={{background: '#fff', maxWidth: 320, margin: '0 auto', padding: '40px 15px 30px 15px', boxShadow: '0 1px 5px rgba(0,0,0,.2)'}}>
                            {
                                teamName ? 
                                <>
                                <h3 style={{textAlign: 'center', color: '#101010'}}>{ teamName }</h3>
                                <h6 style={{textAlign: 'center', color: '#b0b0b0'}}>使用一线签快速签署合同,尽快加入</h6>
                                <WrappedInviteForm />
                                </>
                                :
                                <Skeleton />
                            }
                            </div> 
                            <div style={{textAlign: 'center', color: '#b0b0b0', fontSize: 12, marginTop: 20}}>
                                <img width={100} height={37.5} src={require('../images/logo_d.png')} alt="logo"/>
                                <span>一线签电子合同办公软件</span>
                            </div>
                        </main>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default InvitePage;