SAREC Medical Center — Image Replacement Guide
================================================

This file lists every image placeholder used across the website.
Replace CSS gradient backgrounds and emoji icons with real photographs
and SVG/PNG icons for a polished, professional look.

All images should be placed in this /images/ folder.
Use optimized, web-ready formats: JPEG for photos, PNG for logos,
SVG for icons (if possible), WebP as an optional modern alternative.

==============================================================
1. SITE LOGO
==============================================================
File:       logo.png  (or logo.svg)
Used on:    Every page — header (.logo-icon)
Dimensions: 200 × 60 px (transparent background recommended)
Notes:      The SAREC "S+" blue circle is currently rendered in CSS.
            Replace with the actual SAREC Medicare Consultants logo.

==============================================================
2. HERO SLIDER (Homepage)
==============================================================
File:       hero-slide-1.jpg
Used on:    index.html — .hero-slide:nth-child(1)
Dimensions: 1920 × 700 px (landscape, high-res)
Content:    Doctor consulting a patient or clinic exterior

File:       hero-slide-2.jpg
Used on:    index.html — .hero-slide:nth-child(2)
Dimensions: 1920 × 700 px
Content:    Laboratory technician or medical equipment

File:       hero-slide-3.jpg
Used on:    index.html — .hero-slide:nth-child(3)
Dimensions: 1920 × 700 px
Content:    Mother with baby or family health care scene

==============================================================
3. PAGE BANNERS (Inner Pages)
==============================================================
File:       page-banner-bg.jpg
Used on:    Every inner page — .page-banner (background-image)
Dimensions: 1920 × 300 px
Content:    Soft medical-themed photo (stethoscope, clinic corridor,
            or abstract medical pattern) with blue overlay applied via CSS

==============================================================
4. WELCOME / ABOUT SECTION
==============================================================
File:       about-welcome.jpg
Used on:    index.html — Welcome section image
Dimensions: 600 × 450 px
Content:    Inside the SAREC clinic, reception area or smiling staff

File:       about-story.jpg
Used on:    about.html — Our Story section
Dimensions: 600 × 450 px
Content:    SAREC clinic building exterior or team group photo

==============================================================
5. SERVICE ICONS (6 icons)
==============================================================
Replace the emoji icons in the service cards with proper icons.

File:       icon-outpatient.svg    (or .png 80×80)
Emoji:      🩺  →  stethoscope / doctor icon
Service:    General Outpatient Consultations

File:       icon-laboratory.svg
Emoji:      🔬  →  microscope / test tube icon
Service:    Laboratory Services

File:       icon-pharmacy.svg
Emoji:      💊  →  pill / medicine bottle icon
Service:    Pharmacy

File:       icon-maternal.svg
Emoji:      🤱  →  mother and baby icon
Service:    Maternal & Child Health

File:       icon-hiv.svg
Emoji:      🎗️  →  awareness ribbon icon
Service:    HIV/AIDS Care & Testing

File:       icon-chronic.svg
Emoji:      ❤️  →  heart / heartbeat monitor icon
Service:    Chronic Disease Management

==============================================================
6. DOCTOR PHOTOS (3 doctors)
==============================================================
File:       doctor-sam-ononge.jpg
Used on:    index.html (doctors section), doctors.html
Dimensions: 400 × 500 px (portrait, headshot)
Content:    Professional headshot of Dr. Sam Ononge

File:       doctor-2.jpg
Used on:    index.html (doctors section), doctors.html
Dimensions: 400 × 500 px
Content:    Professional headshot of second doctor

File:       doctor-3.jpg
Used on:    index.html (doctors section), doctors.html
Dimensions: 400 × 500 px
Content:    Professional headshot of third doctor / nurse

==============================================================
7. NEWS / BLOG THUMBNAILS (6 articles)
==============================================================
File:       blog-malaria.jpg
Used on:    news.html card #1, blog-post.html hero
Dimensions: 600 × 400 px
Content:    Mosquito net, mosquito, or malaria awareness image

File:       blog-blood-pressure.jpg
Used on:    news.html card #2
Dimensions: 600 × 400 px
Content:    Blood pressure monitor / nurse checking BP

File:       blog-antenatal.jpg
Used on:    news.html card #3
Dimensions: 600 × 400 px
Content:    Pregnant woman at antenatal check-up

File:       blog-diabetes.jpg
Used on:    news.html card #4
Dimensions: 600 × 400 px
Content:    Blood glucose meter / healthy food

File:       blog-hiv.jpg
Used on:    news.html card #5
Dimensions: 600 × 400 px
Content:    HIV awareness ribbon or testing kit

File:       blog-immunization.jpg
Used on:    news.html card #6
Dimensions: 600 × 400 px
Content:    Child receiving vaccine / immunization

==============================================================
8. INSURANCE PROVIDER LOGOS
==============================================================
File:       logo-jubilee.png
Used on:    insurance.html, index.html insurance strip
Dimensions: 200 × 80 px (transparent background)
Content:    Official Jubilee Health Insurance logo

File:       logo-uap.png
Used on:    insurance.html, index.html insurance strip
Dimensions: 200 × 80 px (transparent background)
Content:    Official UAP Old Mutual Insurance logo

==============================================================
9. WHY CHOOSE US ICONS (4 icons)
==============================================================
File:       icon-qualified.svg     (or .png 60×60)
Emoji:      👨‍⚕️  →  qualified doctor icon
Label:      Qualified Medical Team

File:       icon-affordable.svg
Emoji:      💰  →  money / affordable icon
Label:      Affordable Pricing

File:       icon-modern.svg
Emoji:      🏥  →  modern facility icon
Label:      Modern Facilities

File:       icon-caring.svg
Emoji:      🤝  →  handshake / caring icon
Label:      Caring & Friendly

==============================================================
10. FAVICON
==============================================================
File:       favicon.ico  (or favicon.png)
Dimensions: 32 × 32 px  (also provide 16×16 and 180×180 for Apple)
Content:    Small "S+" icon or SAREC logo mark
Add to all pages: <link rel="icon" href="images/favicon.ico">

==============================================================
11. OPEN GRAPH / SOCIAL SHARE IMAGE
==============================================================
File:       og-image.jpg
Dimensions: 1200 × 630 px
Content:    SAREC logo + clinic exterior + tagline
Add to pages: <meta property="og:image" content="images/og-image.jpg">

==============================================================
NOTES
==============================================================
- Compress all JPEG images to < 200 KB each using TinyPNG or similar.
- Use descriptive alt text when adding <img> tags in HTML.
- For the hero slider, consider WebP format with JPEG fallback for
  faster loading on modern browsers.
- All CSS gradient placeholders are marked with comments like
  "background: linear-gradient(...)" — search for these in the
  HTML files and replace with background-image: url('images/...').
- SVG icons are preferred for service icons as they scale perfectly
  and have tiny file sizes.

Total images needed: ~30 files
