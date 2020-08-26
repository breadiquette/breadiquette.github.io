# Breadiquette: Bread Blog

The process for creating a post is unfortunately longer and more tedious than I'd hoped. Silver lining: you can learn a little about how software/websites are developed locally and then deployed to the Internet!

## One-time setup

When you first start making posts, you'll have to set up some of the software necessary to make changes. 

1. Install [Sublime Text](https://www.sublimetext.com/3). This is a text editor, necessary for editing text files. All of your blog posts will start as text files and be transformed into Internet-ready HTML files.
2. Open the Terminal application on your Mac with <kbd>command</kbd> + <kbd>space</kbd>, type "Terminal" and hitting enter. Alternately you can find it in your applications folder. The Terminal is the main way that we run code and interface with the operating system. Whenever we say "run X command", we mean open Terminal, type the command and hit enter.
3. Install Xcode command-line tools. You can do this by running `xcode-select --install` in the Terminal. This comes with a lot of useful tools for software development. 
3. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). This is called a _version control system_. It helps us keep track of different versions of our files (much like the way you can see previous version of a document in Google Docs), and it also helps us publish our code to [Github](github.com/), where the website actually lives.
4. Install [Ruby](https://www.ruby-lang.org/en/downloads/), a useful programming language for web development. The easiest way to do this is install [Homebrew](https://brew.sh/), then run the command `brew install ruby` in the Terminal. While you're at it, you'll want to install [Ruby Gems](https://rubygems.org/pages/download), which allows us to add extensions to Ruby.
5. Install [Jekyll](https://jekyllrb.com/docs/installation/macos/) by following the steps at the link (mainly `gem install bundler jekyll && bundle install`). This is the way that we turn plain text files into websites! 
6.  Install [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/). The easiest way to do this is install [Node](https://nodejs.org/en/) and then running `npm install --global gulp-cli`.

Next, you'll need to download the files from [Github](https://github.com/breadiquette/breadiquette.github.io).

1. Configure Git to work with Github, following the steps in [this link](https://kbroman.org/github_tutorial/pages/first_time.html).
2. Download the files by running the command `git clone <link> ~/Documents/` where `<link>` is found by clicking the "Code" drop-down in the top right corner of this page.
3. Download some more files by running `cd ~/Documents/breadiquette.github.io && mkdir _site && git clone <link> ~/Documents/ && git checkout gh-pages` where the link is the same as in step 2.


## Making a post

1. Write your post! To do this, you'll open Sublime Text and write the post in Markdown. ([Guide here.](https://jekyllrb.com/docs/posts/)) You can also include a title, author and tags in the [front matter](https://jekyllrb.com/docs/front-matter/) of the post; you can follow the pattern in the first few articles. Then you'll save the file into the `_posts` folder of the `breadiquette.github.io` folder in your `Documents`. The name of the file needs to be `YYYY-MM-DD-post-title-separated-by-dashes.md` where the post-title-separated-by-dashes can be any short title you'd like to include. You'll save any images will go into the `assets/images` folder. 
2. Open the Terminal and run `cd ~/Documents/breadiquette.github.io`. This moves us to the correct file folder. 
3. Run `gulp`. This turns the plain text files into Internet-ready files. Once the Terminal prints `Starting 'watch'...`, you can hit <kbd>control</kbd> + <kbd>c</kbd> to complete the process.
4. IF you'd like to see how your web page looks without publishing, you can run `bundle exec jekyll serve` and then go to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) in your browser.
5. When you are done making changes locally, you can run `JEKYLL_ENV=production bundle exec jekyll build` to build the finished version.
5. To save your changes, run `git add . && git commit -m "<insert text>" && git push origin master` where `<insert text>` summarizes the changes you made.
6. To publish your new site, run `cd _site && git add . && git commit -am "<insert text>" && git push origin gh-pages`. It will take a minute or two for the changes to be reflected on the site.


You can edit the "About me" page using the same steps but instead editing the HTML file `about.html`. For a quick primer on HTML, check out this [Wired post](https://www.wired.com/2010/02/html_cheatsheet/).


## Markdown reference

# Barber
This blog was created with Barber. Barber is a minimal blog theme built for Jekyll. The blog theme features a masonry grid, endless scrolling, and page transitions. 💈 Barber is also available for [Ghost](https://github.com/samesies/barber-ghost).

![Barber](https://raw.githubusercontent.com/samesies/barber-jekyll/master/barber.jpg "Barber")

## Initial Setup
* [Installation](#installation)
* [Update Settings](#update-settings)
* [Create Posts](#create-posts)
* [Create Pages](#create-pages)
* [Create Navigation](#create-navigation)

## Customization
* [Contact Form](#contact-form)
* [Social Media Links](#social-media-links)
* [Disqus Comments](#disqus-comments)

## Additional Development
* [Deployment](#deployment)
* [Source Code](#source-code)
* [Donations](#donations)
* [Support](#support)

### Installation
Jekyll requires all dependencies to be saved in the ````Gemfile````. Run ````bundle install```` (Install [Bundler](http://bundler.io/) if it is not already) on your command line after downloading or cloning the theme. You can then run ````bundle exec jekyll serve```` or ````npm start```` to see your development site. Run ````bundle exec jekyll build```` or ````npm run build```` to build a production ready site for deployment.

### Update Settings
Almost everything to personalize your site is in the ````_config.yml````. 

```
# Site/SEO settings
email: okay@samesies.io
baseurl: ""
permalink: /:year/:month/:day/:title/
google_analytics: 

name: Thomas Vaeth
title: The Barber Theme
description: >
  Barber is a blog theme for Jekyll built by Thomas Vaeth for Samesies using HTML, Sass, and JavaScript.
url: http://barber.samesies.io
twitter_username: thomasvaeth
default_img: /assets/images/seo.jpg
social:
  - name: twitter
    url: https://twitter.com/thomasvaeth
  - name: instagram
    url: https://www.instagram.com/thomas.vaeth/
  - name: linkedin
    url: https://www.linkedin.com/in/thomasvaeth/
  - name: github
    url: https://github.com/samesies
  - name: codepen
    url: https://codepen.io/thomasvaeth/

# Contact settings
contact_img: /assets/images/placeholder-28.jpg
formcarry: https://formcarry.com/s/HkIo0nMb7

# Disqus settings
disqus: test-apkdzgmqhj

# MailChimp settings
mailchimp_action: https://samesies.us17.list-manage.com/subscribe/post-json?u=66ddf555dab480e6a8606430b&amp;id=89b3ee034f
mailchimp_input: b_66ddf555dab480e6a8606430b_89b3ee034f

# Author settings
author:
  - name: Thomas Vaeth
    bio: Thomas Vaeth was born in New York, raised in Pennsylvania, and transplanted in Washington. He was a Web Developer at Urban Influence, but now he's a Software Engineer at Getty Images.
    url: http://thomasvaeth.com

# Pagination settings
pagination:
  enabled: true
  debug: false
  per_page: 12
  permalink: '/page/:num/'
  title: ':title'
  limit: 0
  sort_field: 'date'
  sort_reverse: true
autopages:
  enabled: true
  categories:
    enabled: false
  collections:
    enabled: false
  tags:
    layouts: 
      - 'tag.html'
    title: 'The Barber Theme'
    permalink: '/tag/:tag'
    slugify:
      mode: raw
      cased: true
```

You can change the URL the [contact form](#contact-form) is sent to, add Google Analytics, change the SEO settings, grow your website with additional authors, and much more.

### Create Posts
All posts go upder the ````_posts```` directory. You can also have a ````_drafts```` directory with posts that will on your development page, but not in production.

```
---
layout: post
title: "Brunch Swag"
date: 2017-02-18
description: 
image: /assets/images/placeholder-15.jpg
author: Thomas Vaeth
tags: 
  - XOXO
  - La Croix
---
```

The front matter has to have a layout of page. All the other fields are completely optional. If you have an ````author```` variable, then it must match an author's name in ````_config.yml```` (see [Update Settings](#update-settings)). The ````tag```` variable will add a related section to the post and popular tags to the footer.

### Create Pages
Creating a static page is the same as creating a post. The only difference is a page is in the root of the directory rather than the ````_posts```` directory.

```
---
layout: page
title: Style Guide
image: /assets/images/placeholder-18.jpg
---
```

You just have to make sure the front matter has a layout of page instead of post. If there is no title or image, then the page will default to the site configuration.

### Create Navigation
You can create a navigation in ````_includes/navigation.html````. Visitors can be linked directly to pages right on the top of your website.

***

### Contact Form
The form uses [Formcarry](https://formcarry.com/) to send submitted messages straight to your inbox. The image on the popup is the the ````contact_img```` variable and the URL the forms sends to is the ````formcarry```` variable in ````_config.yml```` (see [Update Settings](#update-settings)).

![Contact Form](http://samesies.io/assets/images/barber/doc/framed-contact-form.jpg "Contact Form")

This file can be found in ````_includes/formscarry.html````. You can change the labels of the form here. After everything is set you will need to submit a message to yourself to confirm everything is correct.

### Social Media Links
[Font Awesome](http://fontawesome.io/) is used for the social media icons. The icons in the theme can be found in ````_includes/share.html```` and ````_includes/social.html````. The icons in ````_includes/share.html```` do not need to be edited unless you want to remove a certain website; however, the ones in ````_includes/social.html```` do have to be changed. You can follow the example that has been provided in ````_config.yml```` for you to link to all of your social media accounts  (see [Update Settings](#update-settings)). The naming convention has not changed from the instructions provided on Font Awesome.

### Disqus Comments
Comments can be enabled on every blog post in a few steps steps. The first step is to register your website with [Disqus](https://disqus.com/). Disqus will provide you with a shortname that you need for the next step. Once you have that the second step is to replace the ````disqus```` variable in ````_config.yml```` (see [Update Settings](#update-settings)). The third step is to open ````_includes/disqus.html```` and remove all the instructions. The final step is to visit a blog post and verify that your comments are there.

***

### Deployment
GitHub Pages [does not support]((https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/)) custom plugins. The tag list and tag pagination are built using custom plugins. There are several options to avoid any errors while deploying to production.
* Run ````bundle exec jekyll build```` or ````npm run build```` and manually add the contents of the ```_site``` folder to the ```gh-pages``` branch.

### Running locally
Almost everything runs through ````gulpfile.js````, so you will need to run ````npm install```` on your command line before doing any additional development. You can then run ````gulp```` or ````npm run gulp```` to compile everything.
