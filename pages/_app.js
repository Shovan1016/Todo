import '../styles/globals.css'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import { UserProvider } from '@auth0/nextjs-auth0';
import {Provider} from 'react-redux';
import store from '../redux/store';
import { wrapper } from '../redux/store';


function MyApp({ Component, pageProps }) 
{
  return <Provider store={store}><UserProvider><Component {...pageProps} /></UserProvider></Provider>
}

export default wrapper.withRedux(MyApp);
