# Sanity + Next.js + Vercel Starter Template

> A example of a Vercel-deployable project with a [Next.js](https://nextjs.org/) frontend and a [Sanity Studio](https://www.sanity.io) on /sanity

## 📃 Set Up

Clone this repository from your GitHub or Click [Use this template](https://github.com/View-Source-Dev/starter-next-js-sanity/generate).

### 1) Sanity

1. `npm install && npm create sanity@latest init --env`
2. During Sanity's initalization it will warn you, type `Y` or `n` and hit `enter`:

```
? Select project to use (Create new project)
```

```
? Select organization to attach project to (None)
```

```
? Use the default dataset configuration? (Y)
```

```
? Would you like to add configuration files for a Sanity project in this Next.js folder? (Y)
```

```
? Do you want to use TypeScript? (n)
```

```
? Would you like an embedded Sanity Studio? (n)
```

```
? File /sanity.cli.js already exists. Do you want to overwrite it? (n)
```

```
? Select project template to use (Clean project with no predefined schemas)
```

```
? File /sanity/schema.js already exists. Do you want to overwrite it? (n)
```

```
? File /sanity/env.js already exists. Do you want to overwrite it? (n)
```

```
? File /sanity/lib/client.js already exists. Do you want to overwrite it? (n)
```

```
? File /sanity/lib/image.js already exists. Do you want to overwrite it? (n)
```

```
? Would you like to add the project ID and dataset to your .env file? (Y)
```

```
? Package manager to use for installing dependencies? (npm)
```

3. Add CORS Origins to your newly created Sanity project (visit: [manage.sanity.io](https://manage.sanity.io) and go to Settings > API): - Add your Studio URLs **_with_** credentials: `http://localhost:3000`

### 2) NextJS

1. Update/Add following variables in `.env` file in the project folder

```
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXX
NEXT_PUBLIC_SANITY_API_TOKEN=XXXXXX
NEXT_PUBLIC_REVALIDATE_TIME=60

// Needed for Klaviyo forms:
KLAVIYO_API_KEY=XXXXXX

// Needed for Mailchimp forms:
MAILCHIMP_API_KEY=XXXXXX-usX
MAILCHIMP_SERVER=usX

```

2. here's where to find each values:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - You can grab this after you've initalized Sanity, either from the `studio/sanity.json` file, or from your Sanity Manage dashboard
- `NEXT_PUBLIC_SANITY_API_TOKEN` - Generate an API token for your Sanity project. Access your project from the Sanity Manage dashboard, and navigate to: "Settings" -> "API" -> "Add New Token" button. Make sure you give `read + write` access!
- `KLAVIYO_API_KEY` - Create a Private API Key from your Klaviyo Account "Settings" -> "API Keys"
- `MAILCHIMP_API_KEY` - Create an API key from "Account -> "Extras" -> API Keys
- `MAILCHIMP_SERVER` - This is the server your account is from. It's in the URL when logged in and at the end of your API Key
- `SENDGRID_API_KEY` - Create an API key from "Settings" -> "API Keys" with "Restricted Access" to only "Mail Send"

# 🏃🏻‍♂️Getting Started

`npm run dev` in the project folder to start the front end locally

- Your front end should be running on [http://localhost:3000](http://localhost:3000)

- Your Sanity Studio should be running on [http://localhost:3000/sanity](http://localhost:3000/sanity)

<br />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# 🚀 Deployment

### Vercel

This is setup to work seamlessly with Vercel, which I highly recommend as your hosting provider of choice. Simply follow the on-screen instructions to setup your new project, and be sure to **add the same `.env.local` variables to your Vercel Project**

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Sanity

This is an easy one, you can simply run `sanity deploy` from the `/sanity` folder in your project. Select a subdomain you want; your Studio is now accessible from the web. This is where I'll invite the client to manage the project so they can both add billing info and begin editing content.

<br />

# 💡 Extras/Tips

<details>
<summary><strong>Error: Failed to communicate with the Sanity API</strong></summary>

If you get this error in your CLI, you need to logout and log back in again. Simply do `sanity logout` and then `sanity login` to fix.

</details>

<details>
<summary><strong>How can I see the bundle size of my website?</strong></summary>

Simply run `npm run analyze` from the project folder. This will run a build of your site and automatically open the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) visuals for your site's build files.

</details>

<br />
