import Head from 'next/head';
import { SEO_IMAGE } from 'data/constants';

type Props = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta = ({ title, keywords, description, image }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title.includes('Mwangilwa') ? title : title.concat('')}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Mwangilwa',
  keywords: 'web development, programming, web design, react js, chakra ui',
  description: 'Software Engineer. Lover of web and opensource.',
  image: SEO_IMAGE
};

export default Meta;
