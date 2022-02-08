import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Layout from '../components/layout';
import { samples, item, poster, styleDriven } from './index.module.css';
import { TwicImg } from "@twicpics/components/react";

const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            <p>POC : TwicPics implementation in Gatsby</p>
            <div className={samples}>
                <div className={item}>
                    <StaticImage
                        alt="Poster of the movie Bladerunner 1982 - StaticImage"
                        src="https://image.tmdb.org/t/p/original/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                    />
                    <span>StaticImage (Gatsby)</span>
                </div>
                <div className={item}>
                    <img className={poster}
                        src="https://image.tmdb.org/t/p/original/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                        alt="Poster of the movie Bladerunner 1982 - native image"
                    />
                    <span>Native img</span>
                </div>
                <div className={item}>
                    <TwicImg
                        className={styleDriven}
                        src="/tmdb-assets/zHKWxyG4j404HVeSYHNH4niUpkW.jpg"
                        ratio="2/3"
                        alt="Poster of the movie Bladerunner 1982 - twic image"
                        mode='contain'
                    />
                    <span>TwicPics component</span>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;