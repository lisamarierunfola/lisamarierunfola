---
title: Podcast
hero_headline: What&rsquo;s Not
hero_headline_cursive: Being Said
hero_text: A podcast that isn't afraid to go there.
hero_podcast_image: "/assets/img/podcastcover.png"
intro_headline_first: Are you
intro_headline_second: ready to hear
intro_headline_cursive: What&rsquo;s not being said
intro_text: There are always two parts to a conversation. The part that is said, and
  the part that’s left unsaid. So many of us live in silence and are unable to speak
  our truth. In order to heal, grow, and create the lives that we desire, we must
  share how we honestly feel. My name is Lisa Marie Runfola, and as a life coach,
  author, and Life Ignitor, I’m here to “Flip The Switch and Turn Your Life Back On”
  weekly on What’s Not Being Said.
---

<section class="section hero podcast__hero">
    <main>
        <h1>{{ page.hero_headline }}</h1>
        <div class="cursive">{{ page.hero_headline_cursive }}</div>

        <p class="lead">
            {{ page.hero_text }}
        </p>
    </main>

    <aside>
        <img class="cover" src="{{ page.hero_podcast_image }}" alt="Podcast Cover Art">

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
            {{ page.intro_headline_first }} <br>
            <span class="shift">
                {{ page.intro_headline_second }}
            </span>
        </h3>
        <div class="cursive">
            {{ page.intro_headline_cursive }}
        </div>
    </header>
    <main>
        <p class="lead">
            {{ page.intro_text }}
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

    <main class="archive">
        {% include archive_episodes.html %}
    </main>

    
    <!-- <div class="button-wrapper">
        <a class="button" href="#">See More</a>
    </div> -->
</section>