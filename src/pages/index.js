import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Layout from '../components/layout';
import { poster, posterContainer } from './index.module.css';
import { TwicImg } from "@twicpics/components/react";

console.log('pipo');

const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            <p>I'm making this following the Gatsby Tutorial.</p>
            <div className={posterContainer}>
                <StaticImage
                    alt="Poster of the movie Bladerunner 1982 - StaticImage"
                    src="https://izbd9vu9.twic.pics/tmdb-assets/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                />
                <img className={poster}
                    src="https://izbd9vu9.twic.pics/tmdb-assets/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                    alt="Poster of the movie Bladerunner 1982 - native image"
                />
                <TwicImg
                    src="tmdb-assets/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                    ratio="120/160"
                    alt="Poster of the movie Bladerunner 1982 - twic image"
                    mode='contain'
                />
            </div>
        </Layout>
    );
}

export default IndexPage;