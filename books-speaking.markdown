---
title: Books & Speaking
hero_headline_first: Writing &amp;
hero_headline_second: Speaking
hero_headline_cursive: By Yours Truly
hero_headshot_image: "/assets/img/books-speaking-hero-bg.png"
hero_badge_image: "/assets/img/badge-lmr.png"
hero_marquee_copy: Time to Bloom into Yourself
intro_headline_first: Explore
intro_headline_second: More with
intro_headline_third: Lisa Marie
intro_headline_cursive: Writing &amp; Speaking
intro_copy: You were born to feel and live alive! These uplifting books will take
  you from grief to happiness through every feeling in between with profound truths
  and bold clarity. Lisa Marie Runfola gently guides you through what you need to
  know to live and love a life that radiates joy.
books:
- image: "/assets/img/3dbook.png"
  title: A Limitless Life in a Powerless World
  subtitle: A Memoir
  text: A Limitless Life in a Powerless World provides a safe place for those looking
    for healing and spiritual guidance in the wake of trauma. With integration exercises
    at the end of each chapter, it teaches readers how to practice self-care in moments
    of weakness and encourages them to find strength in their individuality so they
    can thrive through even the greatest of adversities.
  links:
  - copy: Buy from Amazon
    link: https://www.amazon.com/Limitless-Life-Powerless-World/dp/1982219599/ref=sr_1_2?dchild=1&keywords=lisa+marie+runfola&qid=1632250207&sr=8-2
  - copy: Buy from Barnes &amp; Noble
    link: https://www.barnesandnoble.com/w/a-limitless-life-in-a-powerless-world-lisa-marie-runfola/1130543206;jsessionid=DC4558E21558460A554828B2AA8DEA17.prodny_store02-atgap17?ean=9781982219598
- image: "/assets/img/3dbook2.png"
  title: Women Who Empower
  subtitle: A Collection
  text: Immerse yourself in stories of perseverance, resilience, courage, grace, and
    forgiveness from 30 women who have faced hardship and come out stronger. Lisa
    Marie Runfola joins 29 others as co-author in this uplifting and heart-warming
    collection. Lisa Marie’s contribution, 28 Suitcases, captures a moment of faith,
    loss, connection, and hope as she finds her way through uncertainty. Explore this
    incredible collection of inspirational and empowering short stories.
  links:
  - copy: Buy from Amazon
    link: https://www.amazon.com/Women-Empower-Lisa-Marie-Runfola/dp/1952725437/ref=sr_1_3?dchild=1&keywords=lisa+marie+runfola&qid=1632250207&sr=8-3
  - copy: Buy from Barnes &amp; Noble
    link: https://www.barnesandnoble.com/w/women-who-empower-kate-butler/1138446010
collaborate_marquee_copy: Reignite Your Life
collaborate_headline_first: Spark
collaborate_headline_second: Conversations
collaborate_text: Lisa Marie Runfola is a dynamic, charismatic speaker that will light
  up your event with tips and techniques your audience can implement immediately.
  Her unique style combines inspirational storytelling, bold truths, and powerful
  messages to gift your audience with the opportunity to see new possibilities for
  their own lives.
collaborate_button_copy: Let&rsquo;s Collaborate
collaborate_button_link: "/contact#contact__form"
dark-header: true
---

<section class="section hero books-speaking__hero">
    <main>
      <h1>{{ page.hero_headline_first }} <br class="">
        <span class="shift">
          {{ page.hero_headline_second }}
        </span>
      </h1>  
      <div class="cursive">
        {{ page.hero_headline_cursive }}
      </div>
    </main>

    <aside>
        <figure>
            <img class="arch" src="{{ page.hero_headshot_image }}" alt="Lisa Marie's portrait">
            <img class="badge" src="{{ page.hero_badge_image }}" alt="badge">
        </figure>
    </aside>
</section>

<div class="marquee-container">
    <span class="marquee__item scrolling">
      {{ page.hero_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.hero_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.hero_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.hero_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.hero_marquee_copy }}
      </span>
    
</div>

<section class="books-speaking__intro-bg">
    <img src="{{ site.baseurl }}/assets/img/books-speaking__intro-bg.png" alt="">
</section>

<section class="section books-speaking__intro">
    <main>
        <h2>{{ page.intro_headline_first }} <br class="hide--mobile">
            <span class="shift">
              {{ page.intro_headline_second }}
            </span> <br class="hide--mobile">
            {{ page.intro_headline_third }}
        </h2>

        <div class="cursive">
          {{ page.intro_headline_cursive }}
        </div>

        <p>
            {{ page.intro_copy }}
        </p>
    </main>
</section>

{% for book in page.books %}
  <section class="section books-speaking__books">
    <aside>
        <img src="{{ book.image }}" alt="Book Cover Image">
    </aside>

    <main>
        <h2>
            {{ book.title }}
        </h2>

        <div class="cursive">
            {{ book.subtitle }}
        </div>

        <p>
            {{ book.text | markdownify }}
        </p>

        <div class="links">
          {% for link in book.links %}
            <a target="_blank" href="{{ link.link }}">{{ link.copy }}</a>
          {% endfor %}
        </div>
    </main>
  </section>
{% endfor %}

<div class="marquee-container">
    <span class="marquee__item scrolling">
      {{ page.collaborate_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.collaborate_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.collaborate_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
      {{ page.collaborate_marquee_copy }}
    </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span><span class="marquee__item scrolling" aria-hidden="true">
        {{ page.collaborate_marquee_copy }}
      </span>
    
</div>

<section class="section books-speaking__collaborate">
    <main>
        <h1>
            <span class="shift">
            {{ page.collaborate_headline_first }}
            </span> <br>
            {{ page.collaborate_headline_second }}
        </h1>

        <p>
          {{ page.collaborate_text | markdownify }}
        </p>

        <a href="{{ page.collaborate_button_link }}" class="button">{{ page.collaborate_button_copy }}</a>
    </main>
</section>

<div class="books-speaking__background">
    <img src="{{ site.baseurl }}/assets/img/collaborate4.png" alt="">
</div>