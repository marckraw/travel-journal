import Head from 'next/head'
import Layout from '../components/layout'

export default function Home(props): JSX.Element {
    return (
        <Layout home>
            <Head>
                <title>Travel Journal - Home</title>
            </Head>
            <section>
                Travel Journal Project
            </section>
        </Layout>
    )
}