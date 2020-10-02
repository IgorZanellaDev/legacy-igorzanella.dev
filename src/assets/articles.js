const articles = [
    {
        title: "Simple 3D CSS Buttons",
        platform: "DEV.to",
        link: "https://dev.to/zanellaigor/simple-3d-css-buttons-2aj7",
        description: "Simple tutorial on CSS buttons, I wrote it to try the platform.",
        tags: ["html", "css"],
        image: "simple-3d-css-btns.jpg"
    },
    {
        title: "Light Switch canvas background",
        platform: "DEV.to",
        link: "https://dev.to/igorzanelladev/light-switch-canvas-responsive-background-l4a",
        description: "Tutorial on a canvas I did for test.",
        tags: ["html", "css", "javascript", "canvas"],
        image: "lightswitch.gif"
    }
];

export function getArticles(){
    return [...articles];
}