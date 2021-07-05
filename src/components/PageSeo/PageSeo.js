import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function PageSeo({ description, lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700&amp;display=swap"
      />

      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />

      <title>{title}</title>
    </Helmet>
  )
}

PageSeo.defaultProps = {
  lang: "en",
  description: "",
}

PageSeo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default PageSeo
