import { Helmet } from 'react-helmet-async';
import { GTAG_ID } from '~/lib/constants';
import { initGoogleAnalytics } from '~/lib/google-analytics';

type Props = {
  title: string;
  description?: string;
};

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

const SERVICE_NAME = import.meta.env.VITE_SERVICE_NAME

export const Head = ({ title, description }: Props) => (
  <Helmet>
    <title>{`${title} | ${SERVICE_NAME}`}</title>
    <meta name="description" content={description ?? `This is ${SERVICE_NAME}`} />
    <meta property="og:title" content={`${title} | ${SERVICE_NAME}`} />
    <meta property="og:description" content={description ?? `This is ${SERVICE_NAME}`} />
    <meta name="robots" content="noindex" />
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}/>
    <script>{void initGoogleAnalytics()}</script>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="assets/ethlogo.png" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" type="text/css" href="position.css" />
    <link rel="stylesheet" type="text/css" href="home.css" />
    <link href="https://use.fontawesome.com/releases/v6.5.1/css/all.css" rel="stylesheet" />
  </Helmet>
);