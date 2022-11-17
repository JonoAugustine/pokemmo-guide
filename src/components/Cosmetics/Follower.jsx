import React from 'react'

export const Follower = ({ src, direction }) => {
    return (
        <div className="follower-container">
            <div className={`follower-item item-${direction}`} style={{ backgroundImage: `url(${src})` }}></div>
        </div>
    )
}
