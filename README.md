# Simple Blog with microCMS

![](public/cover.png)

This is a microCMS official simple blog template.

## System Requirements

Node.js 18 or above

## Environmental Variables

Create a `.env` file directly under root and enter the following information

```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
```

`MICROCMS_API_KEY`
You can check it from the microCMS dashboard under "Service Settings > API Keys".

`MICROCMS_SERVICE_DOMAIN`
The xxxxxxxxxx part of the microCMS dashboard URL (https://xxxxxxxx.microcms.io).

`BASE_URL`
The URL to deploy to. Please describe it from the protocol.

例）
development → http://localhost:3000
production → https://xxxxxxxx.vercel.app/ etc.

## Installation

1. Install package

```bash
npm install
```

2. Launch the development environment

```bash
npm run dev
```

3. Access to development environment
   Access to [http://localhost:3000](http://localhost:3000)

---

## [microCMS](https://microcms.io/en) Setup

1. Go to [https://app.microcms.io/signup](https://app.microcms.io/signup) to create an account.You can also set your language preference to English at https://app.microcms.io/profile/language.

   ![](public/signin-en.png)

2. Go to [https://app.microcms.io/create-service](https://app.microcms.io/create-service) to create a service. When creating a service, please select "Create your own".

   ![](public/create-service.png)

3. Create APIｓ as follows

   ```
   # writer（List Format API）
   - Field ID: name(Text Field)
   - Field ID: profile(Text Area)
   - Field ID: image(Image)
   ```

   ![](public/writer.png)

   ```
   # tag（List Format API）
   - Field ID: name(Text Field)
   ```

   ![](public/tag.png)

   ```
   # blog（List Format API）
   - Field ID: title(Text Field)
   - Field ID: description(Text Area)
   - Field ID: content(Rich Text Editor)
   - Field ID: thumbnail(Image)
   - Field ID: tags(Multiple Content References - tag)
   - Field ID: writer(Content Reference - writer)
   ```

   ![](public/blog.png)

4. Create and publish tag, writer, and blog content.

### Page Preview Settings

In order to preview draft content, a page preview must be set up in the microCMS administration page.

Set the following in "API Settings > Page Preview" of the Blog API.

Replace `your-domain` with your deployed domain. (It also works with localhost)

![](public/page-preview-settings.png)

Once set, the page preview button will be available on the content editing page.

## Deploy to Vercel

Easily deployed from the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Tie the repository together and register environment variables in the `Environment Variables`. Deployment is now complete!

![](public/img-vercel-settings.png)
