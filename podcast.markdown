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
            {% for item in site.podcast_platforms %}
                <a target="_blank" href="{{ item.link }}">
                    <img src="{{ item.icon_image }}" alt="Podcast platform icon">
                </a>    
            {% endfor %}
        </nav>
    </aside>
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

        {% for post in site.blog %}
            {% if post.featured %}
                <header>
                    <a href="{{ post.url }}">
                        <h3>{{ post.title }}</h3>
                    </a>
                </header>
                
                <p>
                    {{ post.intro_text }}
                </p>

                <p class="caption">
                    <a href="{{ post.url }}">Learn More</a>
                </p>
            {% endif %}
        {% endfor %} 
    </div>

    <div class="embed">
        {% for post in site.blog %}
            {% if post.featured %}
                {{ post.podcast_embed_code }}
            {% endif %}
        {% endfor %}
    </div>
</section>

<section class="section podcast__featured">
    <h1>Featured <br class="hide--mobile">
        <span class="shift">
            Episodes
        </span>
    </h1>

    <main>
        {% include featured_episodes.html %}
    </main>

    
    <div class="button-wrapper">
        <a class="button" href="#">See More</a>
    </div>
</section>