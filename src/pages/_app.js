import Framework7 from "framework7/lite-bundle";
import Framework7React, { App, Panel, View } from "framework7-react";
import { useRouter } from "next/router";

import { routes } from '../routes';

import "framework7/framework7-bundle.css";
import "framework7-icons/css/framework7-icons.css";
import "material-icons/iconfont/material-icons.css";
import "../styles/globals.css";

Framework7.use(Framework7React);

function MyApp({ Component, pageProps, userAgent }) {
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;

  return (
    <App routes={routes} userAgent={userAgent} url={url}>
      <Panel left cover>
        <View url="/left-panel" />
      </Panel>
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={true}
        browserHistoryStoreHistory={false}
        url="/"
      >
        <Component initialPage {...pageProps} />
      </View>
    </App>
  );
}

/*
  Required for server-side device detection based on user-agent.
  Comment this code if you don't need it.
*/
MyApp.getInitialProps = async ({ctx}) => {
  if (ctx && ctx.req && ctx.req.headers) {
    return {
      userAgent: ctx.req.headers['user-agent']
    }
  }
  return {};
}

export default MyApp;
