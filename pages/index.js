import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
    function gotoTestB() {
        Router.push({
            pathname: '/test/b',
            query: {
                id: 2
            }
        })
    }

    return (
        <div>
            <Link href='/a?id=1'>
                <Button>Index</Button>
            </Link>
        <Button onClick={gotoTestB}>test</Button>
        </div> 
    )
}
