import React, { useState } from 'react'
import { Button, Typography } from '../../components/Atoms'
import { AvatarList } from '../../components/Cosmetics/AvatarList'
import { CosmeticsFilter } from '../../components/Cosmetics/CosmeticsFilter'
import { Page } from '../../components/Page'
import { PageTitle } from '../../components/PageTitle'
import { Seo } from '../../components/SEO'
import { cosmeticsArrays } from '../../data/cosmetics'
import { DEFAULT_CLOTHES, getCosmeticSetupImage } from '../../utils/items'

const Cosmetics = () => {
    const [clothes, setClothes] = useState(DEFAULT_CLOTHES)
    const pgImages = getCosmeticSetupImage(clothes)

    const changeClothes = (slot, value) => {
        setClothes(prev => ({ ...prev, [slot]: value }))
    }

    const randomizeCharacter = () => {
        let randomClothes = {};
        Object.keys(cosmeticsArrays)
            .forEach(slot => {
                randomClothes[slot] = cosmeticsArrays[slot][Math.floor(Math.random() * cosmeticsArrays[slot].length)].item_id
            })
        setClothes(randomClothes)
    }

    return (
        <Page>
            <PageTitle>Cosmetics Helper</PageTitle>
            <div className='d-flex flex-column align-items-start' style={{ gap: '3rem' }}>
                <div className='d-flex flex-column align-items-start order-2 order-sm-1'>
                    <Typography as="h4">Change your clothes</Typography>
                    <CosmeticsFilter selectedClothes={clothes} onCosmeticSelect={changeClothes} />
                    <Button className='mt-3' variant="warning" onClick={randomizeCharacter}>Randomize your character</Button>
                </div>
                <div className='order-1 order-sm-2'>
                    <AvatarList images={pgImages}></AvatarList>
                </div>
            </div>
        </Page>
    )
}

const description = "Find all the cosmetics in PokeMMO. Test what's the best cosmetic for you! Try new combinations."
export const Head = () => <Seo title="Cosmetics Helper" description={description}></Seo>

export default Cosmetics