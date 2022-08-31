import React, { useCallback, useState } from 'react'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { SEO } from '../../components/SEO'
import { PokemonList } from '../../components/Pokedex/PokemonList'
import { graphql } from 'gatsby'
import { PokedexFilters } from '../../components/Pokedex/PokedexFilters'

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

export const Head = () => <SEO title="Pokedex"></SEO>

export default Pokedex