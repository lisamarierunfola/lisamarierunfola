---
title: Contact
hero_background_image: "/assets/img/contact-hero-bg3.png"
hero_headline_first: Get in
hero_headline_second: Touch
hero_copy: What isn’t being said is that you have the power inside to light up your
  life again. It’s time. Let me show you how.
form_headline: Let&rsquo;s Talk
form_interests:
- Coaching
- Speaking
- Writing
- General Inquiry
- Other
---

<section class="section hero contact__hero" style="background-image: url('{{ page.hero_background_image }}')">
    <main>
        <h1>{{ page.hero_headline_first }}
            <br class="hide--mobile">
            <span class="shift">
                {{ page.hero_headline_second }}
            </span>
        </h1>

        <p class="lead">
            {{ page.hero_copy }}
        </p>
    </main>

    <div class="background">
        <img src="{{ page.hero_background_image }}" alt="">
    </div>
</section>

<section class="section contact__form">
    <a class="anchor" id="contact__form"></a> 
    <p class="caption">
        {{ page.form_headline }}
    </p>

    <form name="contact" action="" netlify>
        <input name="Name" type="text" placeholder="Name" required>
        <input name="Email" type="email" placeholder="Email Address" required>
        <select name="Interest" id="" required>
            <option disabled selected value="">Interest</option>
            {% for item in page.form_interests %}
                <option value="{{ item | slugify }}">{{ item }}</option>
            {% endfor %}
        </select>

        <textarea name="message" id="" placeholder="Message"></textarea>

        <input type="submit" class="button">
    </form>
</section>