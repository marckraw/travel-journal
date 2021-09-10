import Head from 'next/head'
import Layout from '../components/layout'

export default function Info(props): JSX.Element {
    return (
        <Layout home>
            <Head>
                <title>Travel Journal - Info</title>
            </Head>
            <section>
                Travel Journal Project - Info
            </section>
        </Layout>
    )
}
