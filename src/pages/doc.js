import React from "react"
import { Skeleton, PageHeader, Typography, Breadcrumb } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import docs from '../static/doc';
import { getUrlQuery } from '../common/utils';
const { Paragraph } = Typography;

class DocPage extends React.Component {
    state = {
        id: null
    }
    componentDidMount() {
        this.setState({
            id: getUrlQuery().id || null
        })
    }
    render() {
        const { id } = this.state;
        return (
        <Layout>
            <SEO title="文章详情" />
            <section className='container' style={{padding: '16px 24px'}}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                    <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/faq">
                    <span>电子合同知识库</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>文章详情</Breadcrumb.Item>
                </Breadcrumb>
            </section>
            <section className='container'>
                {
                    id && parseInt(id) >= 0 && parseInt(id) < docs.length ? 
                    <PageHeader title={docs[id].title}>
                        <div className="wrap">
                            <div className="content">
                                <Paragraph>{docs[id].date}</Paragraph>
                                <Paragraph style={{lineHeight: 2}}>{docs[id].content}</Paragraph>
                            </div>
                        </div>
                    </PageHeader>
                    :
                    <Skeleton paragraph={{ rows: 4 }} />
                }
            </section>
        </Layout>
        )
    }
}

export default DocPage;