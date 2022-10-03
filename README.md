# Fetch Rewards Frontend Take-Home Exercise

## [Live demo of Matthieu's Exercise](https://matthieupierce.github.io/fetch-rewards-takehome)

## Tech Stack

- [NPM](https://github.com/npm/cli) for package management
- [Vite](https://github.com/vitejs/vite) for speedy builds
- [React 18](https://github.com/facebook/react) for JSX component rendering
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) for form handling and validation
- [Axios](https://github.com/axios/axios) for http requests

## Setup

### Installation

```bash
# assumes you have git and npm installed already
git clone https://github.com/MatthieuPierce/fetch-rewards-takehome.git
cd fetch-rewards-takehome
npm i
```

### Start dev server

```bash
  # npm script to start dev server
  npm run dev

  # Example terminal output after `npm run dev`
  VITE v3.1.3  ready in 549 ms

  ➜  Local:   http://localhost:5173/fetch-rewards-takehome/
  ➜  Network: use --host to expose
```

### Build for production

Will output build files to `dist/`

```bash
  # npm script to build production files
  npm run build

  # Example terminal output after `npm run build`
  > fetch-rewards-takehome@0.0.2 build
  > vite build

  vite v3.1.3 building for production...
  ✓ 116 modules transformed.
  dist/index.html                  0.80 KiB
  dist/assets/index.a9a440dd.css   2.33 KiB / gzip: 0.80 KiB
  dist/assets/index.a53b741a.js    184.96 KiB / gzip: 61.80 KiB
```

### Preview local production build

```bash
  # will serve the latest build from `npm run preview`
  npm run preview

  # Example terminal output after `npm run preview`
  > fetch-rewards-takehome@0.0.2 preview
  > vite preview

    ➜  Local:   http://localhost:4173/fetch-rewards-takehome/
    ➜  Network: use --host to expose
```

### Deploy to GitHub Pages

1. If you haven't already, create a `fetch-rewards-takehome` repo on GitHub.

   - If you use a repo name other than `fetch-rewards-takehome`, change the `base` value in `vite.config.js` to match.

2. Whenever you push your `main` branch to GitHub, GitHub Actions will deploy its production build to `https://<user-name>.github.io/<fetch-rewards-takehome | your-repo-name>`

## Fetch Rewards Instructions (with notes by Matthieu)

### Summary

Your task is to build a webpage with a user creation form. The form should take the following required inputs:

- Full Name
- Email
- Password
- Occupation
- State

> **Note from Matthieu:** I've inserted an additional `Confirm Password` field as well, which is validated locally to match against the password value, and is then discarded prior to posting.

Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to `https://frontend-take-home.fetchrewards.com/form` will return a JSON body with the following format:

```json
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```

You should submit the results of the form to the same endpoint (`https://frontend-take-home.fetchrewards.com/form`) via a POST request with a JSON body of the following format:

```json
{
  "name": "???",
  "email": "???",
  "password": "???",
  "occupation": "???",
  "state": "???"
}
```

The POST endpoint will return a 200 status code if all fields are provided. It does not perform any validation beyond this.

> **Note from Matthieu:** The POST endpoint provides a simple `500 Internal Server Error` status code if all fields are not present.

### Minimum Requirements

Your site must:

- Display a form with inputs for each field outlined above
- Allow a user to complete and submit the form
- Do not allow form submission without completing the entire form
- Provide feedback upon successful form submission
- You may complete this exercise using any languages or frameworks you'd like.

### How do I submit it?

Provide a link to a public repository (i.e. GitHub, Bitbucket, etc.) that contains your code to your recruiter.

> **Note from Matthieu:** [GitHub Repo Link](https://github.com/MatthieuPierce/fetch-rewards-takehome), [Demo Page Link](https://matthieupierce.github.io/fetch-rewards-takehome/) > `https://github.com/MatthieuPierce/fetch-rewards-takehome`

### How will this exercise be evaluated?

An engineer will review the code you submit. You will be evaluated based on:

- Code quality
- Use of best practices
- Fulfillment of minimum requirements
- Site usability/UX
- You should provide any necessary documentation within the repository.
