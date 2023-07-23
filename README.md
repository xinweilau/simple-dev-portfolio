# Simple Developer Portfolio

A clean and simple portfolio website for developers. Built with Hugo and Tailwind CSS. A sample of the theme can be found on my website [here](https://xinweilau.com/).

## Dependencies

### Installation

Run this command from the root of your Hugo directory:

```bash
git clone git@github.com:xinweilau/simple-dev-portfolio.git themes/simple-dev-portfolio
```

As this theme is built with [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/), it requires the following dependencies:

1. [Install Tailwind CLI](https://tailwindcss.com/docs/installation)
2. [Install Hugo](https://gohugo.io/getting-started/installing/)

During development, ensure that the interactive mode for the Tailwind CLI is active (if you have any custom CSS). This can be done by navigating to `./themes/simple-dev-portfolio/assets/css/` folder and running the following command:

```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```

You start the development Hugo server with the following command:

```bash
hugo server -D
```

## Setting up the website

### Hugo

#### Configuration File

Configure Hugo to use the theme by setting some information about you to `config.yaml` file:

```yaml
baseURL: "https://example.com"
languageCode: en-us
title: <Your Name>
theme: simple-dev-portfolio

params:
  description: <Your Description>
  preview_url: <Website Snapshot URL>
```

While information inside `params` is optional, it is recommended to set them for SEO purposes.

#### SVG Icon

SVG icons are essential for the theme to work as many sections of the page requires them. Hugo will throw an error if an icon is not found.

The icons are to be stored in `assets/icons` folder. For the best performance, ensure that the svg does not have `width` or `height` attribute set in the **<svg\>** tag.

##### Favicon

Favicon icon should be placed in `/static` folder.

#### Portfolio Content

Edit `data/portfolio.yaml` to populate the portfolio content. You can add more than one item, if it is a collection.

1. Introduction

```yaml
firstname: <Your first name>
lastname: <Your last name>
subheader: <Your Slogan>
resume: <Link to your resume document>
```

2. Social Information (Side Bar)

```yaml
social:
  - link: <Link to social>
    svg: <File name and extension, e.g. example.svg>
```

3. About yourself

```yaml
about:
  description: <A paragraph of your self-introduction>

  skills:
    - name: <Skill name>
      svg: <File name and extension, e.g. example.svg>
```

4. Your work experience

```yaml
experience:
  - company: <Name of company>
    title: <Job title>
    description: <A paragraph describing your job>
    startDate: 2022-01-01
    endDate: 2022-01-01
```

5. Your hobby projects

```yaml
projects:
  - title: <Project title>
    projectDate: 2022-01-01
    description: <A paragraph describing your project>
    skills:
      - name: <Skill Name>
        svg: <File name and extension, e.g. example.svg>
```

6. Call to action

```yaml
actions:
  - title: GitHub Profile
    subtitle: More projects
    button: "<Button Text>"
    link: <Link to GitHub>
  - title: Get In Touch
    subtitle: "Contact me"
    button: "Email"
    link: mailto:<Your Email>
```

## Future Development

- [ ] Add blog posts
