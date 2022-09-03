import { graphql } from 'gatsby'
import React from 'react'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { PokedexFilters } from '../../components/Pokedex/PokedexFilters'
import { PokemonList } from '../../components/Pokedex/PokemonList'
import { Seo } from '../../components/SEO'

const Pokedex = ({ data }) => {
  const sprites = data.allFile.edges

  return (
    <Page>
      <PageTitle>Pokedex</PageTitle>
      <PokedexFilters />
      <PokemonList sprites={sprites} />
    </Page>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {relativePath: {regex: "/sprites/"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}, childImageSharp: {gatsbyImageData: {}}}
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 100, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Pokedex"></Seo>

export default Pokedex