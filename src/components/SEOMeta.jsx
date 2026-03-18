import { Helmet } from 'react-helmet-async'

const SEOMeta = ({ title, metaTitle, description, keywords, canonical }) => {
  const siteName = 'Krushvel - Industrial Parts Exporter India'
  const fullTitle = metaTitle ? `${metaTitle} | Krushvel` : title ? `${title} | Krushvel` : siteName

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Krushvel" />
    </Helmet>
  )
}

export default SEOMeta
