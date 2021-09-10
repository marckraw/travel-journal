import {GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import {
    ExampleBarChartStackedBySign,
    ExampleBrushBar,
    ExampleLineChart
} from '../components/ChartExample'
import useToggle from '../hooks/useToggle'

interface ComponentTestsProps {
    allPostsData: any
}

export default function ComponentTests({allPostsData}: ComponentTestsProps): JSX.Element {
    const [isShown, toggle] = useToggle()

    return (
        <Layout home>
            <Head>
                <title>Travel Journal - Component Tests</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h2>Charts: </h2>
                <div style={{height: '400px'}}>
                    <ExampleLineChart />
                </div>
                <div style={{height: '400px'}}>
                    <ExampleBrushBar />
                </div>
                <div style={{height: '400px'}}>
                    <ExampleBarChartStackedBySign />
                </div>
            </section>
            <section className={utilStyles.headingMd}>…</section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                {title}
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1>Test useToggle hook</h1>
                <button onClick={toggle}>{isShown ? 'Hide' : 'Show'}</button>
                {
                    isShown && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa distinctio eius error est illum in laboriosam nihil qui quos? Assumenda exercitationem fugiat hic laborum modi quibusdam reiciendis, rerum voluptatibus.</p>
                }
            </section>
        </Layout>
    )
}



export const getStaticProps: GetStaticProps =  async () => {
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            allPostsData: []
        }
    }
}
