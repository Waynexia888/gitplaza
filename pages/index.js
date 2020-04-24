import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
    function gotoTestB() {
        Router.push('/test/b')
    }

    return (
        <div>
            <Link href='/a'>
                <Button>Index</Button>
            </Link>
        <Button onClick={gotoTestB}>test</Button>
        </div> 
    )
}
