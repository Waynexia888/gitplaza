import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'
import Head from 'next/head'
import styled from 'styled-components'

const color = 'orange'

const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`
const A = ({ router, name }) => (
    <>
        <Title>This is Title</Title>
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
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'jokcy'
            })
        }, 2000)
    })
    return await promise
}

export default withRouter(A)