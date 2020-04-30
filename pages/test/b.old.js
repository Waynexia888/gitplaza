import React, {
    useState,
    useReducer,
    useEffect,
    useLayoutEffect,
    useContext,
    useRef
} from 'react'

import MyContext from '../../lib/my-context'

// class MyCount extends React.Component {
//     constructor() {
//         super()
//         this.ref = React.createRef()
//         state = {
//             count: 0
//         }
//     }
    

//     componentDidMount() {
//         // this.ref.current
//         this.interval = setInterval(() => {
//             this.setState({ count: this.state.count + 1})
//         }, 1000)
//     }

//     componentWillUnmount() {
//         if (this.interval) {
//             clearInterval(this.interval)
//         }
//     }

//     render() {
//         return <span ref={this.ref}>{this.state.count}</span>
//     }
// }
// export default MyCount

function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}

function MyCountFunc() {
    // const [count, setCount] = useState(0) //[a, b]

    const [ count, dispatchCount ] = useReducer(countReducer, 0)
    const [name, setName] = useState('jocky')

    const context = useContext(MyContext)

    const inputRef = useRef()
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setCount(c => c + 1)
    //         dispatchCount({ type: 'minus' })
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])

    useEffect(() => {
        console.log(inputRef)
        return () => console.log('effect detected ')
    }, [name])

    // useLayoutEffect(() => {
    //     console.log('layout effect invoked')
    //     return () => console.log('layout effect detected ')
    // }, [])

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatchCount({ type: 'add' })}>{count}</button>
            <p>{context}</p>
        </div>
    )
}

export default MyCountFunc