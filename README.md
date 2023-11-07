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

3. Create APIs as follows

   Create three list format APIs.

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

5. Create and publish tag, writer, and blog content.

### Page Preview Settings

In order to preview draft content, a page preview must be set up in the microCMS administration page.

Set the following in "API Settings > Page Preview" of the Blog API.

Replace `your-domain` with your deployed domain. (It also works with localhost)

![](public/page-preview-settings.png)

Once set, the page preview button will be available on the content editing page.

## Deploy to Vercel

deploy the example using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=This%20is%20a%20microCMS%20official%20simple%20blog%20template.&demo-image=https://github.com/microcmsio/simple-blog-with-microcms/blob/main/public/cover.png?raw=true&demo-title=Simple%20Blog%20with%20microCMS&demo-url=https://simple-blog-with-microcms.vercel.app/&from=templates&project-name=Simple%20Blog%20with%20microCMS&repository-name=Simple%20Blog%20with%20microCMS&repository-url=https://github.com/microcmsio/simple-blog-with-microcms&env=MICROCMS_API_KEY,MICROCMS_SERVICE_DOMAIN,BASE_URL)
