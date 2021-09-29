---
title: About
hero_headline_first: Your Life
hero_headline_second: Ignitor
intro_caption: Meet Your Life Ignitor
intro_headline_first: Lisa
intro_headline_second: Marie
intro_headline_third: Runfola
intro_text: |-
  Throughout my life, there have been many twists, turns & grand leaps of faiths. I have made decisions and choices that others have deemed courageous and adventurous, and have gone through heartbreak, chaos and grief, with my feet on the ground and my eyes towards what’s next. Feeling stuck is exhausting — the dimness and disconnection every day, all while the to-do list is piling up — and the discontent it creates is pervasive. Moments like this have had an immeasurable impact on me not because of how low I felt, but because of how I turned hardships into triumphs that continue to enrich my life.

  I live my life to the fullest, even during the most trying times. I have learned how to keep my mindset ignited, and now I am here to do the same for you. If you’ve ever felt like you were an adventurous soul just waiting for the right opportunity, here’s your sign.
intro_headshot_image: "/assets/img/lmr-arch2.png"
intro_badge_image: "/assets/img/badge-lmr.png"
feature_headline: I’m not your ordinary coach… in fact, for a long time I shuddered
  at the word!
feature_badge_one_image: "/assets/img/certbadge1.png"
feature_badge_two_image: "/assets/img/certbadge2.png"
feature_first_text: "I came to coaching because my life experiences showed me I needed
  new tools, or else I would suffocate under the pressure of life. Once I pulled myself
  out, I realized that others needed the same tools. My coaching style reflects these
  experiences. I know the darkness…and I absolutely know the light.\n\nAs a Certified
  Levin Life Coach, many of the resources I bring to our sessions are inspired by
  Nancy Levin’s boundary coaching methodology, developed by a best-selling author
  and master life coach. "
feature_second_text: |-
  This style of coaching will give you a whole new definition of what life can offer. It will give you a whole new understanding of how you respond, react, and recharge. It will show you a whole new paradigm of who you can become.

  Our work together starts wherever you’re feeling stuck, overwhelmed, frustrated, or empty. We then dive deep into your fears and blocks. Part of this work is facing our story; part is getting unstuck; the rest is clear and healthy boundaries.

  And I know, it is possible to feel more alive than you do right now.  Life can be more expansive and joyful than you could ever imagine.
cta_one_headline: Work with Me
cta_one_text: Whether you need help setting up boundaries in your life or escaping
  the rut you’ve found yourself in, one-on-one coaching can provide a lot of insight.
cta_one_image: "/assets/img/cta-face.png"
cta_one_button_copy: Live Life Out Loud
cta_one_button_link: "/lets-ignite"
cta_two_headline: Books &amp; Speaking
cta_two_text: Hear more about my experiences, my point of view on breaking through
  life’s walls, and more in my books and past speaking engagements.
cta_two_image: "/assets/img/cta-book.png"
cta_two_button_copy: Learn More
cta_two_button_link: "/books-speaking"
---

<section class="section hero about__hero">
    <h1>
        {{ page.hero_headline_first }} <br class="hide--mobile">
        <span class="shift">
            {{ page.hero_headline_second }}
        </span>
    </h1>
</section>

<section class="section about__intro">
    <main>
        <figure>
            <img class="photo" src="{{ page.intro_headshot_image }}" alt="Lisa Marie Runfola Headshot">
            <img class="badge" src="{{ page.intro_badge_image }}" alt="Badge Image">
        </figure>
    </main>
    <aside>
        <p class="caption">{{ page.intro_caption }}</p>

        <h1>
            {{ page.intro_headline_first }} <br>
            <span class="shift">{{ page.intro_headline_second }}</span> <br>
            {{ page.intro_headline_third }}
        </h1>

        {{ page.intro_text | markdownify }}

    </aside>

    <div class="feature">
        <h3>{{ page.feature_headline }}</h3>

        <figure class="hide--mobile">
            <img src="{{ page.feature_badge_one_image }}" alt="Certification badge image">
            <img src="{{ page.feature_badge_two_image }}" alt="Certification badge image">
        </figure>
    </div>

    <div class="info">
        {{ page.feature_first_text | markdownify }}
    </div>
    
    <div class="info">
        {{ page.feature_second_text | markdownify }}

        <figure class="hide--desktop">
            <img src="{{ page.feature_badge_one_image }}" alt="Certification badge image">
            <img src="{{ page.feature_badge_two_image }}" alt="Certification badge image">
        </figure>
    </div>
</section>

<section class="section cta about__cta">
    <h3 class="hide--desktop">{{ page.cta_one_headline }}</h3>
    <div class="module">
        <h3 class="hide--mobile">{{ page.cta_one_headline }}</h3>
        <p>
          {{ page.cta_one_text | markdownify }}
        </p>
        <img src="{{ page.cta_one_image }}" alt="">
        <a href="{{ page.cta_one_button_link }}" class="button">{{ page.cta_one_button_copy }}</a>
    </div>
    
    <h3 class="hide--desktop">{{ page.cta_two_headline }}</h3>
    <div class="module">
        <h3 class="hide--mobile">{{ page.cta_two_headline }}</h3>
        <p>
          {{ page.cta_two_text | markdownify }}
        </p>
        <img src="{{ page.cta_two_image }}" alt="">
        <a href="{{ page.cta_two_button_link }}" class="button">{{ page.cta_two_button_copy }}</a>
    </div>
</section>