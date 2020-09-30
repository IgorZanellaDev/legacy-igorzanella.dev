<script>
    import Fa from 'svelte-fa';
    import { faTwitterSquare, faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    let this_year = new Date().getFullYear();
</script>

<div class="w-full flex flex-col justify-center p-3 z-10">
    <div class="mx-auto flex">
        <a href="https://twitter.com/IgorZanellaDev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-twitter"><Fa icon={faTwitterSquare} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Twitter</span></a>
        <a href="https://github.com/IgorZanellaDev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-accent"><Fa icon={faGithubSquare} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">GitHub</span></a>
        <a href="https://dev.to/igorzanelladev" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-secondary"><Fa icon={faDev} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Dev.to</span></a>
        <a href="https://www.linkedin.com/in/igor-zanella/" target="_blank" rel="noopener noreferrer" class="text-light mx-2 flex items-center transition-all duration-300 hover:text-linkedin"><Fa icon={faLinkedin} class="text-3xl sm:mr-1"/><span class="hidden sm:flex">Linkedin</span></a>
    </div>
    <h6 class="text-sm text-light text-center mt-2">
        &copy; Copyright {this_year}, All Rights Reserved.<br class="sm:hidden"/> Made by Igor Zanella <br class="sm:hidden"/><span class="hidden sm:inline">|</span> VAT: IT05104380265 <br class="sm:hidden"/><span class="hidden sm:inline">|</span> <a href="https://www.iubenda.com/privacy-policy/36569385" class="underline" title="Privacy Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="https://www.iubenda.com/privacy-policy/36569385/cookie-policy" class="underline" title="Cookie Policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
    </h6>
</div>