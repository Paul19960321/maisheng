import React from "react"
import { Link, navigate } from "gatsby"
import { Row, Col, Breadcrumb, Card, Result, Button, Skeleton } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getUrlQuery } from '../common/utils';

const { Meta } = Card;

const detail = [
    {
        thumbnail: require('../images/insurance/thumbnail1.png'),
        name: '掌心保-小商铺公众安全责任险',
        user: '中小型商铺的店主',
        term: '1年',
        price: 200,
        case: [ require('../images/insurance/detail1.png')],
        notice: [
            '1.	本产品由中国人民财产保险股份有限公司承保，目前该公司在北京、天津、河北、山西、内蒙古、辽宁、吉林、黑龙江、上海、江苏、浙江、安徽、福建、江西、山东、河南、湖北、湖南、广东、广西、海南、重庆市、四川、贵州、云南、西藏、陕西、甘肃、青海、宁夏、新疆、大连、青岛、厦门、宁波、深圳设有分支机构。本产品的销售区域为全国。客户从掌心保购买本保险产品，后续理赔等相关事务均可由掌心保协助您办理。',
            '2.	本保险产品默认采用电子保单并且不提供发票，若客户需要发票或电子保单请联系一线签客服处理，发票及纸质保单的递送方式默认EMS，快递费用由客户自行承担。',
            '3.	本保险产品生效日期最早可选为次日（以保单为准）； ',
            '4.	本保险产品保费扣除方式为投保时一次性扣费。',
            '5.	退保损失：本保险产品生效后默认不支持退保。',
            '6.	份数限制：1份',
            '7.	特别约定：',
            'a)	每次事故财产损失超过2000元时，本产品负责赔偿损失金额超过2000元的部分。',
            'b)	本产品专为小商铺定制，大型商场、酒店、游乐场等高风险场所，以及电梯、停车场不在本产品承保范围内。'
        ]
    },
    {
        thumbnail: require('../images/insurance/thumbnail2.png'),
        name: '掌心保-全保小微企业综合险',
        user: '小微企业主',
        term: '1年',
        price: 364.8,
        case: [ require('../images/insurance/detail2.png'), require('../images/insurance/detail3.png')],
        notice: [
            '1. 本产品销售地区为中国境内（不包括港澳台），本保险产品由史带财产保险股份有限公司承保，目前该公司在北京、上海、江苏、浙江、安徽、青岛、福建有分支机构，客户从一线签购买，后续变更与理赔事务均可由一线签协助您办理。',
            '2.	购买份数：投保人根据自身的实际财产额度及企业情况选择合适的保险计划进行叠加购买。出险理赔时，保险公司有权核查被保险企业的实际财产额度。若投保财产未达到实际财产金额的80%，本公司将对赔偿进行比例摊分处理。',
            '3.	本产品仅提供电子保单，将在保险合同生效的三个工作日内，将电子保单发送到客户指定预留的电子邮箱。',
            '4.	本产品无犹豫期、等待期。',
            '5.	本产品保单不涉及现金价值。',
            '6.	本产品最早生效期为自客户签署投保单并缴纳保费（以两者的后者为准开始计算）的第十日起。',
            '7.	本产品适用于总价值低于人民币1,000,000元以下的社区商业企业。',
            '8.	本产品所涵盖的零售店为社区饮料、百货、糖果、花店等普通货品之零售店，不包括珠宝饰品、古玩字画、手机等高价值产品的零售店。',
            '9.	本产品所涵盖的社区小微企业，不包括社区物流仓储点、配送中心、邮政/快递单位。',
            '10. 本产品所承保的被保险场所，须为钢筋混凝土结构的楼宇，且通过当地的消防安检，符合当地的法律法规，否则本公司对于财产综合险部分的保障不承担赔偿责任。',
            '11. 本产品绝对免赔额：',
            'a. 财产综合险绝对免赔额为每次事故人民币2,000元或核定损失的10%，以大者为准;',
            'b. 公众责任险针对第三者财产损失的绝对免赔额为每次事故人民币2,000或核定损失的10%，以大者为准；',
            'c. 针对第三者人身伤害的绝对免赔额为每次事故人民币200元。雇主责任险意外医疗费用绝对免赔额为人民币500元，扣除免赔额后按照100%的比例赔付。',
            '12. 在保险期间内，被保险人的雇员发生保险责任范围内的保险事故并符合《职工工伤与职业病致残等级分级GBT16180-2006》定残标准的，赔偿比例约定如下：1级100%，2级80%，3级70%，4级60%，5级40%，6级30%，7级20%，8级15%，9级10%，10级5%。',
            '13. 本保单为不记名保单，出险时，受伤雇员需与被保险人存在劳动合同关系。',
            '14. 在保险期限内，被保险人在雇主责任险部分的理赔次数不超过购买份数，且累计理赔次数不超过5次。',
            '15. 本产品 雇主责任险部分扩展24小时责任。但如果被保险人的雇员在非工作期间从事其他兼职、营利性活动或风险高于申报工种的行为，则该期间发生的意外事故不属于本保单的承保范围。'
        ]
    },
    {
        thumbnail: require('../images/insurance/thumbnail3.png'),
        name: '掌心保-雇主责任险',
        user: '16-65周岁（含）身体健康、能正常工作或生活者',
        term: '1年',
        price: 68,
        case: [ require('../images/insurance/detail4.png')],
        notice: [
            '1. 本保单全员记名投保，对于非投保人员清单中的人员不承担保险责任。',
            '2. 本保单医疗费赔付标准以当地社保相关规定为准。',
            '3. 本保单不承保以下人员：涉水、井下、地下、高空作业人员，船员，海外工作人员，易燃易爆及有毒作业人员。',
            '4. 限购份数：1份。',
            '5. 本保险产品投保人数不得少于5人，4类职业占比不得超过5%，且需投保企事业单位的在职员工100%投保。',
            '6. 如需修改员工名单，请联系掌心保客服4006-007-005。每月提供一次该公司人员清单（列明需要增加和删除的员工），保险责任拓展至该员工入职之日起。'
        ]
    },
    
    {
        thumbnail: require('../images/insurance/thumbnail4.png'),
        name: '掌心保-企业员工团体意外险',
        user: '18-60周岁（含）身体健康、能正常工作或生活者',
        term: '1年',
        price: 75,
        case: [ require('../images/insurance/detail5.png')],
        notice: [
            '1. 本产品由中国太平洋财产保险股份有限公司承保,目前该公司在北京、天津、河北、山西、内蒙古、辽宁、大连、吉林、黑龙江、上海、江苏、无锡、常州、浙江、温州、宁波、安徽、江西、福建、厦门、山东、青岛、苏州、河南、湖北、湖南、广东、东莞、深圳、海南、广西、四川、重庆、贵州、云南、陕西、甘肃、新疆、宁夏、青海、西藏有分支机构,本产品的销售区域为全国不含港澳台,客户从掌心保购买,后续理赔等相关事务均可由掌心保协助您办理。本保险产品采用电子保单。电子保单与纸质保单具有同等效力。',
            '2. 本保险产品支持提供发票，若有需要请联系客服处理。',
            '3. 本产品适用于年龄为16-60周岁的企业员工，但投保企业需保证全员投保，并提供具体的人员清单。若被保险人没有履行该约定，发生保险事故的，保险人按出险时申报的总人人数与实际雇员人数的比例计算赔偿。',
            '4. 投保职业类别限为1-3类，详见职业分类表。但每张保单的投保人数不得低于5人且三类人员总数不得超过总投保人数的30%。详见附件职业分类表',
            '5. 本产品仅适用于三证（营业执照，机构代码证，税务登记证）齐全的公司投保。',
            '6. 根据企业员工的流动，本产品支持被保险人的变更，发生人员变更时，投保人需通过指定邮箱发送变更清单至一线签客服邮箱support@winksign.com，批改申请后一线签客服会尽快帮您处理。',
            '7. 医疗费用仅限于中国大陆范围内合法经营的二级以上（含二级）公立医院发生的合理医疗费用，非社保用药不承保。',
            '8. 意外医疗：每次事故免赔 0元后按100％赔付；意外住院津贴：每次住院免赔0天，单次给付不超过90天，累计给付不超过180天。',
            '9. 本产品每一被保险人同一保险期间限投保一份，多投无效，保险公司不承担多投的保险责任。',
            '10. 本产品保障区域限于中国境内，不包括港澳台地区。',
            '11. 本产品不承保潜水、冲浪、滑雪、滑草、滑板、轮滑、蹦极、跳伞、滑翔、攀岩（包括攀登悬崖、楼宇外墙、人造悬崖、冰崖、冰山等）、高山速降等高风险运动。',
            '12. 本保单不承保由于高空（5米以上）作业工作人员坠落或在地下（如矿井）作业造成被保险人的任何身体伤害。',
            '13. 退保费用，按短期费率进行计算。'
        ]
    }
]


class DetailPage extends React.Component {
    state = {
        id: null,
        loading: true
    }
    componentDidMount() {
        this.setState({
            id: getUrlQuery().id || null,
            loading: false
        })
    }
    render() {
        const { id, loading } = this.state;
        return (
            <Layout>
                <SEO title="服务详情" />
                <section className='container' style={{paddingTop: 30}}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                        <span>首页</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/insurance">
                        <span>保险服务</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>服务详情</Breadcrumb.Item>
                    </Breadcrumb>
                </section>
                <section style={{padding: '40px 0'}}>
                    <div className='container'>
                        {
                            loading ? 
                            <Row gutter={10} style={{textAlign: 'left'}}>
                                <Col sm={8} span={24}>
                                    <Skeleton />
                                </Col>
                                <Col sm={16} span={24}>
                                    <Skeleton />
                                </Col>
                            </Row>
                            :
                            id && parseInt(id) >=0 && parseInt(id) < detail.length ?
                            <Row gutter={10} style={{textAlign: 'left'}}>
                                <Col sm={8} span={24}>
                                    <Card
                                        style={{ marginBottom: 10 }}
                                        cover={
                                        <img
                                            alt="thumbnail"
                                            src={detail[id].thumbnail}
                                        />
                                        }
                                    >
                                        <Meta
                                        title={detail[id].name}
                                        description={
                                            <>
                                            <p>承保人：{detail[id].user}</p>
                                            <p>保障期限：{detail[id].term}</p>
                                            <p><span style={{color: '#5b8dfd', fontSize: 20}}>￥{detail[id].price}</span> 元/年</p>
                                            </>
                                        }
                                        />
                                    </Card>
                                    <Card size="small" title="产品推荐" style={{ marginBottom: 10 }}>
                                        {
                                            detail.map((info, index) => (
                                                index === parseInt(id) ? '' : 
                                                <div style={{textAlign: 'center', maxWidth: 300, margin: '10px auto'}} key={index}>
                                                    <Link to={`/insurancedetail?id=${index}`} replace onClick={() => {this.setState({id: index.toString()})}} style={{position: 'relative', display: 'block'}}><img width="100%" src={info.thumbnail} alt="thumbnail" /><span style={{position: 'absolute', bottom: 0, width: '100%', left: 0, background: 'rgba(0,0,0,.6)', lineHeight: '2em', color: '#fff'}}>{info.name}</span></Link>
                                                    <span><span style={{color: '#5b8dfd', fontSize: 20}}>￥{info.price}</span> 元/年</span>
                                                </div>
                                            ))
                                        }
                                    </Card>
                                </Col>
                                <Col sm={16} span={24}>
                                    <Card size="small" title="保险方案" style={{ marginBottom: 10 }}>
                                        {
                                            detail[id].case.map((img, index) => (
                                                <p key={index}><img src={img} alt='case' /></p>
                                            ))
                                        }
                                    </Card>
                                    <Card size="small" title="投保须知" bodyStyle={{padding: '15px 20px'}}>
                                        {
                                            detail[id].notice.map((notice, index) => (
                                                <p key={index}>{notice}</p>
                                            ))
                                        }
                                    </Card>
                                </Col>
                            </Row>
                            :
                            <Result
                            status="404"
                            title="404"
                            subTitle="您所访问的页面不存在！"
                            extra={<Button type="primary" onClick={() => {navigate('./')}}>回到首页</Button>}
                            />
                        }
                    </div>
                </section>
            </Layout>
        )
    }
}

export default DetailPage
