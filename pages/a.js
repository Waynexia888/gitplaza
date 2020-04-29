import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'
import Head from 'next/head'

const color = 'orange'


// const A = ({ router }) => <Link href="#aaa"><a>A {router.query.id}</a></Link>
const A = ({ router, name }) => (
    <>
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
        <style jax global>{`
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