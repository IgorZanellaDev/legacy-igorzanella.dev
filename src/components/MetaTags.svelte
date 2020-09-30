<script>
    import { URL_SITE, DEFAULT_META_IMG, SITE_NAME } from "../components/env.js";

    export let page = "", description, path = "";
    export let type = "website";
    export let img = DEFAULT_META_IMG;
    export let descriptionCard = description;

    let title = (page ? (page + " | ") : "") + SITE_NAME;
    let url = URL_SITE + path;
    let img_url = URL_SITE + img;
</script>

<svelte:head>
    <title>{title}</title>
	<meta name="title" content={title}>
	<meta name="description" content={description}>
    <meta name="author" content="Igor Zanella">

	<meta property="og:type" content={type}>
	<meta property="og:url" content={url}>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={descriptionCard}>
	<meta property="og:image" content={img_url}>
</svelte:head>