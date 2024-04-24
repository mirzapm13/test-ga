import store from "@store/index";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{/* <GoogleAnalytics trackPageViews gaMeasurementId={"G-1WRECJS7QP"} /> */}
			<Script
				strategy="lazyOnload"
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-1WRECJS7QP"
			></Script>
			<Script id="gtag-script" strategy="lazyOnload">
				{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1WRECJS7QP');`}
			</Script>
			<ToastContainer autoClose={3000} position="bottom-left" limit={3} />
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
};

export default App;
