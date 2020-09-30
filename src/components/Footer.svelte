<script>
    import Fa from 'svelte-fa';
    import { faTwitterSquare, faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from "svelte";

    onMount(() => {
        (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
        (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
    });

    let this_year = new Date().getFullYear();
</script>

<div class="w-full flex flex-col justify-center p-3 z-10">
    <div class="mx-auto flex">
        <a href="https://twitter.com/IgorZanellaDev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-twitter"><Fa icon={faTwitterSquare} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Twitter</span></a>
        <a href="https://github.com/IgorZanellaDev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-accent"><Fa icon={faGithubSquare} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">GitHub</span></a>
        <a href="https://dev.to/igorzanelladev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-secondary"><Fa icon={faDev} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Dev.to</span></a>
        <a href="https://www.linkedin.com/in/igor-zanella/" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-linkedin"><Fa icon={faLinkedin} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Linkedin</span></a>
    </div>
    <div class="flex mt-4 mx-auto">
        <a href="https://www.iubenda.com/privacy-policy/36569385" class="iubenda-black no-brand iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
        <a href="https://www.iubenda.com/privacy-policy/36569385/cookie-policy" class="iubenda-black no-brand iubenda-embed" title="Cookie Policy ">Cookie Policy</a>
    </div>
    <h6 class="text-sm text-light text-center mt-2">
        &copy; Copyright {this_year}, All Rights Reserved.<br class="sm:hidden"/> Made by Igor Zanella <br class="sm:hidden"/><span class="hidden sm:inline">|</span> VAT: IT05104380265
    </h6>
</div>