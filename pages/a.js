import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'


// const A = ({ router }) => <Link href="#aaa"><a>A {router.query.id}</a></Link>
const A = ({ router, name }) => <Comp>A {router.query.id} {name}</Comp>

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