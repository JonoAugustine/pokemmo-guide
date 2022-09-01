import React from 'react';
import { Stack } from 'react-bootstrap';
import { Post } from '../components/Post';
import { useNavigationMenu } from '../context/NavigationMenuContext';

export default function PostsListing({ category }) {
    const { POSTS } = useNavigationMenu();
    const filteredPosts = POSTS.filter(item => item.category.includes(category))

    return (
        <Stack direction='horizontal' gap="3">
            {
                filteredPosts.map((post, index) => <Post key={index} {...post} />)
            }
        </Stack>
    )
}