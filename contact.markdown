---
title: Contact
---

<section class="section hero contact__hero">
    <main>
        <h1>Get in
            <br class="hide--mobile">
            <span class="shift">
                Touch
            </span>
        </h1>

        <p class="lead">
            What isn’t being said is that you have the power inside to light up your life again. It’s time. Let me show you how.
        </p>
    </main>

    <div class="background">
        <img src="{{ site.baseurl }}/assets/img/contact-hero-bg3.png" alt="">
    </div>
</section>

<section class="section contact__form" id="contact__form">
    <form name="contact" action="" netlify>
        <input name="Name" type="text" placeholder="Name" required>
        <input name="Email" type="email" placeholder="Email Address" required>
        <select name="Interest" id="">
            <option disabled selected value="">Interest</option>
            <option value="coaching">Coaching</option>
            <option value="speaking">Speaking</option>
            <option value="writing">Writing</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="other">Other</option>
        </select>

        <textarea name="message" id="" placeholder="Message"></textarea>

        <input type="submit" class="button">
    </form>
</section>