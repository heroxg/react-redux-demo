import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/create-blog">create blog</Link></li>
            </ul>
        </div>
    )
}
