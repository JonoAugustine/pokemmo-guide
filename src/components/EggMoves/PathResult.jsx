import React from 'react'
import { PathRow } from './PathRow';

export const PathResult = ({ choosenPkmnSprite, sprites, paths }) => {
    return (
        <div className="mt-2 pt-2">
            {paths.map(path => <PathRow choosenPkmnSprite={choosenPkmnSprite} path={path} sprites={sprites} />)}
        </div>
    )
}
