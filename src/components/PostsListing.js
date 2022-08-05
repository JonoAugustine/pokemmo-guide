import React from 'react'
import { Stack } from 'react-bootstrap';
import { useNavigationMenu } from '../context/NavigationMenuContext'
import { Post } from '../components/Post'

export default function PostsListing({ category }) {
    const { posts } = useNavigationMenu();
    const filteredPosts = posts.filter(item => item.node.frontmatter.category.includes(category))

    return (
        <Stack direction='horizontal' gap="3">
            {
                filteredPosts.map(({ node }) => <Post key={node.id} {...node} />)
            }
        </Stack>
    )
}