import '../styles/globals.css'


import {Provider} from 'react-redux'
import reducer from '@/store/reducer'
import {createStore} from 'redux'
const store=createStore(reducer)

export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider> 
}
