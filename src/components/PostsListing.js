import React, { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Post } from '../components/Post';
import { useNavigationMenu } from '../context/NavigationMenuContext';
import { Button } from './Atoms';

const DEFAULT_PER_PAGE = 3;

export default function PostsListing() {
    const { POSTS } = useNavigationMenu();
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [maxPerPage, setMaxPerPage] = useState(DEFAULT_PER_PAGE);
    const categories = [...new Set(POSTS.map(post => post.category))];

    return (
        <>
            <div className="d-flex mb-3" style={{ gap: '.75rem' }}>
                <Button
                    disabled={!selectedCategory}
                    onClick={() => setSelectedCategory(false)}>All</Button>
                {
                    categories.map(cat => <Button
                        disabled={cat === selectedCategory}
                        className="text-capitalize"
                        onClick={() => setSelectedCategory(cat)}>{cat}</Button>)
                }
                <Button
                    onClick={() => setMaxPerPage(prev => prev === DEFAULT_PER_PAGE ? 100 : DEFAULT_PER_PAGE)}
                    variant="warning"
                    className="ms-auto"
                >Load more</Button>
            </div>
            <CardGroup style={{ gap: '1rem', flexWrap: 'wrap' }}>
                {
                    POSTS
                        .filter(item => selectedCategory ? item.category.includes(selectedCategory) : true)
                        .splice(0, maxPerPage)
                        .map((post, index) => <Post key={index} {...post} />)
                }
            </CardGroup>
        </>
    )
}