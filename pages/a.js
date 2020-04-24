import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'


// const A = ({ router }) => <Link href="#aaa"><a>A {router.query.id}</a></Link>
const A = ({ router }) => <Comp>A {router.query.id}</Comp>

export default withRouter(A)