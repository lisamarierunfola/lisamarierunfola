---
title: Podcast
---

<section class="section hero podcast__hero">
    <main>
        <h1>What's Not</h1>
        <div class="cursive">Being Said</div>

        <p class="lead">
            A podcast that isn't afraid to go there.
        </p>
    </main>

    <aside>
        <img class="cover" src="{{ site.baseurl }}/assets/img/podcastcover.png" alt="">

        <nav>
            <a target="_blank" href="http://open.spotify.com/show/5pTb7oeq8l4wVDvKdjV37K?si=EgCLmkPZTRqHxfZHdiZNbg&dl_branch=1">
                <img src="{{ site.baseurl }}/assets/img/icon-spotify.svg" alt="">
            </a>
            <a target="_blank" href="https://podcasts.apple.com/us/podcast/whats-not-being-said/id1585501408">
                <img src="{{ site.baseurl }}/assets/img/icon-podcast.svg" alt="">
            </a>
            <a target="_blank" href="http://music.amazon.com/podcasts/4b7f2943-cfbb-4036-9e70-f4c392924d57/whats-not-being-said">
                <img src="{{ site.baseurl }}/assets/img/icon-audible.svg" alt="">
            </a>
            <a target="_blank" href="http://www.stitcher.com/podcast/voice-for-possibility/whats-not-being-said">
                <img src="{{ site.baseurl }}/assets/img/icon-stitcher.svg" alt="">
            </a>
            <a target="_blank" href="http://iheart.com/podcast/86823733/">
                <img src="{{ site.baseurl }}/assets/img/icon-heart.svg" alt="">
            </a>
        </nav>
    </aside>
</section>

<section class="section">
    {% for post in site.blog %}
    <a href="{{ post.url }}">
        <h1>{{ post.title }}</h1>
    </a>
    {% endfor %}
</section>

<section class="section podcast__intro">
    <header>
        <h3>
            Are you <br>
            <span class="shift">
                ready to hear
            </span>
        </h3>
        <div class="cursive">
            What's not being said
        </div>
    </header>
    <main>
        <p class="lead">
            There are always two parts to a conversation. The part that is said, and the part that’s left unsaid. So many of us live in silence and are unable to speak our truth. In order to heal, grow, and create the lives that we desire, we must share how we honestly feel. My name is Lisa Marie Runfola, and as a life coach, author, and Life Ignitor, I’m here to “Flip The Switch and Turn Your Life Back On” weekly on What’s Not Being Said.
        </p>
    </main>
</section>

<section class="section podcast__latest">
    <p class="caption">
        Take a listen to the latest episode
    </p>

    <div class="episode">
        <header>
            <a href="/blog">
                <h3>Creating Space and Opening Doors with Angelica Rosas McDaniel</h3>
            </a>
            <!-- <time>07.29.2021</time> -->
        </header>
        
        <p>
            Emmy award-winning entertainment executive and mentor, Angelica Rosas McDaniel knows what it’s like to be the only woman and only person of color in the room. She joins Lisa Marie to share her courageous story on the first episode of What’s Not Being Said.
        </p>

        <p class="caption">
            <a href="/blog">Learn More</a>
        </p>
    </div>

    <div class="embed">
        <iframe src="https://open.spotify.com/embed/episode/2pUYmyZNmDvMRBGnaFHw4e" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <!-- <iframe src="https://open.spotify.com/embed/episode/3aoeqplXeUzDO1Zq9lJacZ?theme=0" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->
    </div>
</section>

<section class="section podcast__featured">
    <h1>Featured <br class="hide--mobile">
        <span class="shift">
            Episodes
        </span>
    </h1>

    <main>
        <div class="module">
            <figure>
                <img src="{{ site.baseurl }}/assets/img/guestart.png" alt="">
            </figure>
    
            <h2>Creating Space and Opening Doors with Angelica Rosas McDaniel</h2>
    
            <p>
                Emmy award-winning entertainment executive and mentor, Angelica Rosas McDaniel knows what it’s like to be the only woman and only person of color in the room.
            </p>
            <p class="caption">
                <a href="/blog">Learn More</a>
            </p>
        </div>
        <div class="module">
            <figure>
                <img src="{{ site.baseurl }}/assets/img/LMRA_JaclynLinsdey.png" alt="">
            </figure>
    
            <h2>Kindness is a revolution with Jaclyn Lindsey</h2>
    
            <p>
                Jaclyn Lindsey is co-founder and CEO of kindness.org, and believes that kindness is humanity’s greatest asset.
            </p>
            <p class="caption">
                <a href="/blog">Learn More</a>
            </p>
        </div>
        <div class="module">
            <figure>
                <img src="{{ site.baseurl }}/assets/img/podcastcover.png" alt="">
            </figure>
    
            <h2>Creating Confidence WITH Kate Eckman</h2>
    
            <p>
                Coming Soon. <br>
                October 4, 2021
            </p>
            <p class="caption">
                <a href="/blog">Learn More</a>
            </p>
        </div>
    </main>

    
    <div class="button-wrapper">
        <a class="button" href="#">See More</a>
    </div>
</section>