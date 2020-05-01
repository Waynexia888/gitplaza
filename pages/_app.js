import App, { Container } from "next/app"
import { Provider } from 'react-redux'
import store from '../store/store'

import 'antd/dist/antd.css'

import Layout from "../components/Layout"

import MyContext from "../lib/my-context"
import { Button } from "antd"

import testHoc from "../lib/test-hoc"

class MyApp extends App {
    state = {
        context: 'value'
    }

    static async getInitialProps({ Component, ctx }) {
        console.log('app init')
        let pageProps
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps
        }
    }
    render() {
        const { Component, pageProps } = this.props
        console.log(Component)
        return (
           <Container>
               <Layout>
                   <Provider store={store}>
                        <MyContext.Provider value={this.state.context}>
                        <Component {...pageProps} />
                        <button onClick={() => this.setState({ context: `${this.state.context}111`})}>update context</button>
                    </MyContext.Provider>
                   </Provider>
                    
               </Layout>
           </Container>
        )
    }
}

export default testHoc(MyApp)