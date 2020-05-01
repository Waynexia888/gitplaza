import { withRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
// import moment from 'moment'
import dynamic from 'next/dynamic'    //异步加载组件

const color = 'orange'

const Comp = dynamic(import('../components/comp'))

const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`
const A = ({ router, name, time }) => (
    <>
        <Title>This is Title {time}</Title>
        <Comp />
        < Link href = "#aaa">
            <a className="link">
                A {router.query.id} {name}
            </a>
        </Link>
        <style jsx>{`
            a {
                color: blue;
            }
            .link {
                color: ${color};
            }
        `}</style>
        <style jsx global>{`
            a {
                color: yellow
            }
        `}
        </style>
    
    </>
)



A.getInitialProps = async () => {
    const moment = await import('moment')

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'jokcy',
                time: moment.default(Date.now() - 60 * 1000).fromNow()
            })
        }, 2000)
    })
    return await promise
}



export default withRouter(A)