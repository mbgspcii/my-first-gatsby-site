import { TwicImg } from "@twicpics/components/react";
import * as React from "react"
import { carousel, movie, native } from './soon.module.css';
import Layout from '../components/layout';

const apiKey = `967e0d676315d04866ad552b7a5c2ea1`;
const apiRoute = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}
&language=en-US
&sort_by=popularity.desc
&include_adult=false
&include_video=false
&page=1
&with_watch_monetization_types=flatrate`;

const SoonPage = ({ serverData }) => {
    return (
        <Layout pageTitle={'Coming Soon'}>
            <div>
                <p>TwicImg</p>
                <div className={carousel}>
                    {serverData.results.map((aMovie) => (
                        <div key={aMovie.id} className={movie} >
                            <TwicImg
                                src={`/tmdb-assets/${aMovie.poster_path}`}
                                ratio="2/3"
                                mode="contain"
                            />
                        </div>
                    ))}
                </div>
                <p>StaticImage</p>
                <div className={carousel}>
                    {serverData.results.map((aMovie) => (
                        <div key={`native-${aMovie.id}`} className={movie} >
                            <img className={native}
                                src={`https://image.tmdb.org/t/p/original/${aMovie.poster_path}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default SoonPage;

export async function getServerData() {
    try {
        console.log(apiRoute);
        const res = await fetch(apiRoute);
        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        return {
            props: await res.json()
        }

    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {}
        }
    }
}


