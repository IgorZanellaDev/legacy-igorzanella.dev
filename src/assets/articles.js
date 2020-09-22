const articles = [
    {
        title: "Simple 3D CSS Buttons",
        platform: "DEV.to",
        link: "https://dev.to/zanellaigor/simple-3d-css-buttons-2aj7",
        description: "Simple tutorial on CSS buttons, I wrote it to try the platform.",
        tags: ["html", "css"],
        image: "simple-3d-css-btns.jpg"
    }
];

export function getArticles(){
    return [...articles];
}