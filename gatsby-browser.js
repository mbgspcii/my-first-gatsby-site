import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

export function onClientEntry() {
    console.log("We've started!");
    installTwicPics({
        // domain is mandatory
        "domain": "https://izbd9vu9.twic.pics"
    });
}

export function onInitialClientRender() {
    console.log("ReactDOM.render has executed");
}