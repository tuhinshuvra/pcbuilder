// /styles/globals.css (unchanged)
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    // Load Bootstrap JavaScript on the client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return getLayout(<Component {...pageProps} />)
}