import { FontsLoader } from "fonts-loader";

const loader = new FontsLoader ([
    {
        name: "Proxima Nova",
        source: "./src/fonts/proxima-nova/ProximaNova-Black.ttf",
    },
    {
        name: "Proxima Nova",
        source: "./src/fonts/proxima-nova/ProximaNova-Bold.ttf",
    },
    {
        name: "Proxima Nova",
        source: "./src/fonts/proxima-nova/ProximaNova-Extrabold.ttf",
    },
    {
        name: "Proxima Nova",
        source: "./src/fonts/proxima-nova/ProximaNova-Regular.ttf",
    },
    {
        name: "Proxima Nova",
        source: "./src/fonts/proxima-nova/ProximaNova-Semibold.ttf",
    },
])

export default loader;
