# Personal Website for Yulia Pimonova

This repository contains the source code for Yulia Pimonova’s personal portfolio website. It is a single‑page site inspired by Jekyll themes such as **Vonge** and **varadbhogayata.github.io** and built with plain HTML, CSS and JavaScript. The site showcases Yulia’s professional summary, technical skills, experience, education, publications, awards and contact details.

## Project Structure

```
yulia_site/
├── index.html                # Main webpage
├── assets/
│   ├── css/
│   │   └── style.css        # Custom styles
│   ├── js/
│   │   └── main.js          # JavaScript for typing effect
│   ├── img/
│   │   └── background.png   # Hero section background image
│   └── docs/
│       └── CV_2026_new (2).pdf  # Your résumé
├── .nojekyll                # Prevent GitHub Pages from processing with Jekyll
└── README.md                # This file
```

### Key Features

- **Responsive design** leveraging [Bootstrap&nbsp;5](https://getbootstrap.com/).
- **Typing animation** implemented via [Typed.js](https://github.com/mattboldt/typed.js/).
- **Clean layout** with easy navigation to each section using smooth scrolling.
- **Self‑contained**: the site uses local CSS/JS files and CDN links, so no build step is required.

## Deployment on GitHub Pages

1. **Create a GitHub repository named** `<your‑username>.github.io`. GitHub uses this naming convention to serve content at `https://<your‑username>.github.io`. For example, if your username is `yuliapimonova`, name the repository `yuliapimonova.github.io`.

2. **Clone the repository to your local machine**:

   ```bash
   git clone https://github.com/<your‑username>/<your‑username>.github.io
   cd <your‑username>.github.io
   ```

3. **Copy the website files** into the repository root. You can move the contents of the `yulia_site` folder (including `index.html`, the `assets` directory, `.nojekyll` and this `README.md`) into the repository.

4. **Commit and push the changes**:

   ```bash
   git add .
   git commit -m "Add personal portfolio website"
   git push origin main
   ```

5. **Enable GitHub Pages** (if not already enabled):

   - Visit your repository on GitHub and navigate to **Settings &gt; Pages**.
   - Under **“Source”**, select the branch you pushed to (usually `main`) and set the folder to `/` (root).
   - Save the settings. GitHub will deploy your site automatically. After a short delay, it will be accessible at `https://<your‑username>.github.io/`.

6. **Verify the deployment** by visiting the URL in your browser. If everything works, you should see your personal site live.

### Customising Your Website

- **Update content**: Open `index.html` and modify the text within each section to reflect your current experience, skills or publications. The HTML is organised into clear sections with comments.
- **Change the background image**: Replace `assets/img/background.png` with another image of the same name or update the CSS rule in `assets/css/style.css` to point to a different file.
- **Modify styles**: Edit `assets/css/style.css` to tweak colours, fonts or layouts. You can also override Bootstrap variables by adding custom CSS rules.
- **Update your résumé**: Replace `assets/docs/CV_2026_new (2).pdf` with your latest PDF using the same filename to ensure the download link remains valid.
- **Add more sections**: Follow the existing markup pattern to add new sections such as projects, blog posts or testimonials.

## Using Jekyll (Optional)

Although this project is built without a Jekyll build process, you can easily convert it into a Jekyll‑powered site if you prefer to work with Markdown and templates:

1. Remove the `.nojekyll` file. GitHub Pages will then attempt to process the repository with Jekyll.
2. Create a `_config.yml` file with basic site metadata (e.g., `title:` and `description:`) and specify a theme (e.g., `theme: minima` or a remote theme such as `jekyll-theme-cayman`).
3. Rename `index.html` to `index.md` and add YAML front matter at the top:

   ```markdown
   ---
   layout: default
   title: Home
   ---
   <!-- Your HTML content here -->
   ```

4. Commit and push the changes. GitHub Pages will rebuild the site using Jekyll. For more design inspiration, explore the [Vonge](https://jekyllthemes.io/theme/vonge) and [Varad Bhogayata](https://github.com/varadbhogayata/varadbhogayata.github.io) themes.

## Contact

If you encounter issues deploying your site or wish to customise it further, you can open an issue or contact Yulia via email at [pimonova.ya@gmail.com](mailto:pimonova.ya@gmail.com).