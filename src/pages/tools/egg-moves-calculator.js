import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { EggMovesFilters } from '../../components/EggMoves/EggMovesFilters'
import { EggMovesResults } from '../../components/EggMoves/EggMovesResults'

import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { Seo } from '../../components/SEO'
import { eggMoves } from '../../data/eggMoves'

const EggMoves = ({ data }) => {
  console.log(eggMoves)
  const sprites = data.allFile.edges
  const [pkmnID, setPkmnID] = useState(0);
  const eggMove = pkmnID ? eggMoves.find(({ id }) => id === pkmnID) : false;

  return (
    <Page>
      <PageTitle>Egg Moves Calculator</PageTitle>
      <EggMovesFilters sprites={sprites} data={eggMoves} onFilter={setPkmnID} />
      <div className="mt-3" style={{ zIndex: 0 }}>
        {
          eggMove
            ? <EggMovesResults sprites={sprites} eggMove={eggMove} />
            : false
        }
      </div>
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

const description = "Find how to pass egg moves to your Pokemon in PokeMMO easily. "
export const Head = () => <Seo title="Egg Moves" description={description}></Seo>

export default EggMoves