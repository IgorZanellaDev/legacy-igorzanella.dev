<script>
    export let tag;
    export let classes;
    export let clickable = true;

    let tags = {
        react: {
            name: "React",
            color: "#00d8ff",
            color_dark: "#00a5cc",
            text_color: "#003f66",
            link: "https://reactjs.org/",
        },
        node: {
            name: "Node.js",
            color: "#83cd29",
            color_dark: "#509a00",
            text_color: "#003400",
            link: "https://nodejs.org/",
        },
        svelte: {
            name: "Svelte",
            color: "#ff3e00",
            color_dark: "#cc0b00",
            text_color: "#ffffcc",
            link: "https://svelte.dev/",
        },
        sapper: {
            name: "Sapper",
            color: "#159497",
            color_dark: "#006164",
            text_color: "#e1ffff",
            link: "https://sapper.svelte.dev/",
        },
        bootstrap: {
            name: "Bootstrap",
            color: "#563d7c",
            color_dark: "#3d2463",
            text_color: "#efd6ff",
            link: "https://getbootstrap.com/",
        },
        mongodb: {
            name: "mongoDB",
            color: "#13aa52",
            color_dark: "#00771f",
            text_color: "#dfffff",
            link: "https://www.mongodb.com/",
        },
        aws: {
            name: "AWS",
            color: "#ff9900",
            color_dark: "#cc6600",
            text_color: "#ffffcc",
            link: "https://aws.amazon.com/",
        },
        scss: {
            name: "SCSS",
            color: "#cd6799",
            color_dark: "#9a3466",
            text_color: "#340000",
            link: "https://sass-lang.com/",
        },
        wordpress: {
            name: "Wordpress",
            color: "#21759b",
            color_dark: "#004268",
            text_color: "#edffff",
            link: "https://wordpress.org/",
        },
        php: {
            name: "PHP",
            color: "#8892bf",
            color_dark: "#555f8c",
            text_color: "#eef8ff",
            link: "https://www.php.net/",
        },
        openlitespeed: {
            name: "OpenLiteSpeed",
            color: "#ffdf4f",
            color_dark: "#ccac1c",
            text_color: "#664600",
            link: "https://openlitespeed.org/",
        },
        cloudflare: {
            name: "CloudFlare",
            color: "#f38020",
            color_dark: "#c04d00",
            text_color: "#ffffb9",
            link: "https://www.cloudflare.com/",
        },
        postcss: {
            name: "PostCSS",
            color: "#dd3a0a",
            color_dark: "#aa0700",
            text_color: "#ffffd6",
            link: "https://postcss.org/",
        },
        tailwind: {
            name: "TailwindCSS",
            color: "#38b2ac",
            color_dark: "#057f79",
            text_color: "#d1ffff",
            link: "https://tailwindcss.com",
        },
        googleads: {
            name: "Google Ads",
            color: "#1a73e8",
            color_dark: "#0040b5",
            text_color: "#b3ffff",
            link: "https://ads.google.com",
        },
        animatecss: {
            name: "animate.css",
            color: "#f7d7b5",
            color_dark: "#c4a482",
            text_color: "#351C75",
            link: "https://ads.google.com",
        },
        html: {
            name: "HTML5",
            color: "#f16528",
            color_dark: "#e54d26",
            text_color: "#fffff4",
            link: "https://developer.mozilla.org/en/docs/Web/HTML/HTML5"
        },
        css: {
            name: "CSS3",
            color: "#33a4d5",
            color_dark: "#136db0",
            text_color: "#ccffff",
            link: "https://developer.mozilla.org/en/docs/Web/CSS"
        },
        instagram: {
            name: "Instagram",
            color: "#405de6",
            color_dark: "#0d2ab3",
            text_color: "#d9f6ff",
            link: "https://developer.mozilla.org/en/docs/Web/CSS"
        },
        youtube: {
            name: "YouTube",
            color: "#ff0000",
            color_dark: "#cc0000",
            text_color: "#fff",
            link: "https://developer.mozilla.org/en/docs/Web/CSS"
        },
        twitch: {
            name: "Twitch",
            color: "#6441a4",
            color_dark: "#310e71",
            text_color: "#fff4ff",
            link: "https://developer.mozilla.org/en/docs/Web/CSS"
        }
    }
</script>

<div class="relative transition-all duration-300 ease-in-out rounded-lg bg-primary bottom-0 hover:bottom-2 {classes}"
    style="
        background-color: {tags[tag].color};
        box-shadow: 0 .4em {tags[tag].color_dark}, 0 .5em rgba(0,0,0,.2);
    ">
    <a href={tags[tag].link} target="_blank" rel="noopener" class="text-light p-2 decoration-none text-sm {clickable ? "" : "pointer-events-none"}" style="color: {tags[tag].text_color}">{tags[tag].name}</a>
</div>