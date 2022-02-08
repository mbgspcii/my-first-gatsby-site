import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

installTwicPics({
    // domain is mandatory
    "domain": "https://izbd9vu9.twic.pics"
});

export function onPreRenderHTML()  {
   
    console.log('gatsby-ssr onPreRenderHTML');
}

export function onRenderBody ()  {
   
    console.log('gatsby-ssr onRenderBody ');
}