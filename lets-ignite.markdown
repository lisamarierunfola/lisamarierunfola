---
title: Let's Ignite
hero_headline_first: Amplify Your Life.
hero_headline_second: Set Clear Goals.
hero_headline_third: Create Strong Boundaries.
hero_marquee_copy: Reignite Your Life
intro_headline_first: Are You
intro_headline_second: Ready To
intro_headline_cursive: Ignite?
intro_text: |-
  Everyone occasionally feels stuck, overwhelmed, or tapped out. It’s no wonder you do too, with all that you juggle. Work, life, parenting, partnering: some days, it can feel like the responsibilities are endless.

  I get it. I’ve been there, too.

  As a Life Ignitor & Certified Levin Life Coach, I’ll walk you through proven methodologies you can easily integrate into your busy life that will help you get clear, unstuck, and living life out loud.
intro_button_copy: Flip The Switch
intro_button_link: "/contact#contact__form"
testimonial_video_files:
- "/assets/img/video_1.mp4"
- "/assets/img/video_2.mp4"
- "/assets/img/video_3.mp4"
offering_one_badge_image: "/assets/img/badge1.png"
offering_one_caption: 45 Minute Discovery Call
offering_one_headline_first: Discovery
offering_one_headline_second: Session
offering_one_text: |-
  Jump into action with FREE 45-minute Ignition Session that will have you motivated and excited about life!

  You’d be surprised to find out just how much we can change your life in 45 minutes. During this complementary call, we’ll look at some of the factors in your life that have you feeling stuck and tapped out. We’ll get clear on your desires and goals. Then we’ll create an achievable plan so that you can take action immediately.
offering_one_button_copy: Book Your Free Call Now
offering_one_button_link: https://keap.app/booking/lisamarierunfola/45-60-min-intro-session
offering_one_image: "/assets/img/1.png"
offering_two_badge_image: "/assets/img/badge3.png"
offering_two_caption: 12 Week Session
offering_two_headline: Ignited By Boundaries
offering_two_text: Ignited By Boundaries is specifically designed to help over-giving,
  over-achieving people pleasers create lives that feel vibrant, energized, and alive.
  We’ll spend 12 sessions exploring what freedom means to you, designing a life with
  you at the center, and breaking through your fears and discomfort. Based on the
  work of Nancy Levin and her book, Setting Boundaries Will Set You Free, this 12-week
  program will help you cultivate the confidence and courage you need to step into
  the life you desire!
offering_two_button_copy: Book Your Free Call Now
offering_two_button_link: https://keap.app/booking/lisamarierunfola/45-60-min-intro-session
offering_two_image: "/assets/img/2.png"
offering_three_badge_image: "/assets/img/badge2.png"
offering_three_caption: 8 Week Session
offering_three_headline_first: Reinvention
offering_three_headline_second: Coaching
offering_three_text: If you close your eyes and take a few long, slow breaths and
  tune into your inner world, do you feel as though you’re stuck or frustrated in
  some way with your life? Are you struggling to find your way forward? Since I’ve
  re-engaged in certain steps to release the “old” and embrace the “new”, I’ve been
  bowled over with much more positive energy. I achieved this through Reinvention
  Coaching – an eye-opening & empowering experience I gained from the wonderful Levin
  Life Coaching Academy.
offering_three_button_copy: Book Your Free Call Now
offering_three_button_link: https://keap.app/booking/lisamarierunfola/45-60-min-intro-session
offering_three_image: "/assets/img/3.png"
---

<section class="section hero ignite__hero">
    <h1>
        {{ page.hero_headline_first }} <br class="hide--mobile">
        {{ page.hero_headline_second }}
        <br class="hide--desktop"><br class="hide--desktop">

        <span>
          {{ page.hero_headline_third }}
        </span>
    </h1>
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

<section class="section ignite__intro">
    <header>
        <h1>{{ page.intro_headline_first }} <br class="hide--mobile">
            <span class="shift">
              {{ page.intro_headline_second }}
            </span>
            <span class="cursive">
              {{ page.intro_headline_cursive }}
            </span>
        </h1>
        
    </header>

    <main>
        <p class="lead">
            {{ page.intro_text | markdownify }}
        </p>

        <p>
            <a href="{{ page.intro_button_link }}" class="button">{{ page.intro_button_copy }}</a>
        </p>
    </main>
</section>

<section class="section ignite__carousel">
    <div class="main-carousel">
        {% for item in page.testimonial_video_files %}
          <div class="carousel-cell">
            <video controls src="{{ item }}"></video>
          </div>
        {% endfor %}
      </div>
</section>

<section class="section ignite__offering one">
    <img class="badge" src="{{ page.offering_one_badge_image }}" alt="">
    <header>
        <p class="caption">{{ page.offering_one_caption }}</p>
        <h1>
            {{ page.offering_one_headline_first }} <br class="hide--mobile">
            <span class="shift">{{ page.offering_one_headline_second }}</span>
        </h1>
        <div class="description hide--mobile">
            {{ page.offering_one_text | markdownify }}
        </div>
        <a target="_blank" href="{{ page.offering_one_button_link }}" class="button">
            {{ page.offering_one_button_copy }}
        </a>
    </header>
    <img class="feature" src="{{ page.offering_one_image }}" alt="">
    <div class="description hide--desktop">
      {{ page.offering_one_text | markdownify }}
    </div>
    <a target="_blank" href="{{ page.offering_one_button_link }}" class="button hide--desktop">
      {{ page.offering_one_button_copy }}
    </a>
</section>

<section class="section ignite__offering three">
    <img class="badge" src="{{ page.offering_two_badge_image }}" alt="">
    <header>
        <p class="caption">{{ page.offering_two_caption }}</p>
        <h1>
          {{ page.offering_two_headline }}
        </h1>
        <div class="description hide--mobile">
          {{ page.offering_two_text | markdownify }}
        </div>
        <a href="{{ page.offering_two_button_link }}" class="button">
          {{ page.offering_two_button_copy }}
        </a>
    </header>
    <img class="feature" src="{{ page.offering_two_image }}" alt="">
    <div class="description hide--desktop">
      {{ page.offering_two_text | markdownify }}
    </div>
    <a href="{{ page.offering_two_button_link }}" class="button hide--desktop">
      {{ page.offering_two_button_copy }}
    </a>
</section>


<section class="section ignite__offering two">
    <img class="badge" src="{{ page.offering_three_badge_image }}" alt="">
    <header>
        <p class="caption">{{ page.offering_three_caption }}</p>
        <h1>
            {{ page.offering_three_headline_first }}
            <span class="shift">{{ page.offering_three_headline_second }}</span>
        </h1>
        <div class="description hide--mobile">
          {{ page.offering_three_text | markdownify }}
        </div>
        <a href="{{ page.offering_three_button_link }}" class="button">
            {{ page.offering_three_button_copy }}
        </a>
    </header>
    <img class="feature" src="{{ page.offering_three_image }}" alt="">
    <div class="description hide--desktop">
      {{ page.offering_three_text | markdownify }}
    </div>
    <a href="{{ page.offering_three_button_link }}" class="button hide--desktop">
      {{ page.offering_three_button_copy }}
    </a>
</section>


<section class="section quote ignite__quote">
  <header>
    <h1>{{ site.quote_headline_first }} <br class="hide--mobile">
        <span class="shift">{{ site.quote_headline_second }}</span><br class="hide--mobile">
        {{ site.quote_headline_third }}
    </h1>
    <div class="cursive">{{ site.quote_headline_cursive }}</div>
  </header>

  <main>
    <div class="quote">&ldquo;</div>
    <div class="quote-carousel">
      {% for testimonial in site.testimonials %}
        <div class="carousel-cell">
          <p>
            {{ testimonial.quote }}
          </p>
          <cite>
              <p class="person">{{ testimonial.name }}</p>
              <p class="title">{{ testimonial.title }}</p>
          </cite>
        </div>  
      {% endfor %}
    </div>
  </main>
</section>