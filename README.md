# Simple Blog with microCMS

![](public/cover.png)

This is a microCMS official simple blog template.

This blog is built using microCMS, a headless CMS made in Japan, and Next.js.

You are free to enter the following information in this blog.
- Blog body (& its meta information)
- Writer
- Tags

## Demo
https://simple-blog-with-microcms.vercel.app/

## Deploy to Vercel
deploy the example using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=This%20is%20a%20microCMS%20official%20simple%20blog%20template.&demo-image=https://github.com/microcmsio/simple-blog-with-microcms/blob/main/public/cover.png?raw=true&demo-title=Simple%20Blog%20with%20microCMS&demo-url=https://simple-blog-with-microcms.vercel.app/&from=templates&project-name=Simple%20Blog%20with%20microCMS&repository-name=Simple%20Blog%20with%20microCMS&repository-url=https://github.com/microcmsio/simple-blog-with-microcms&env=MICROCMS_API_KEY,MICROCMS_SERVICE_DOMAIN,BASE_URL)


## Configuration

### Step 1. Create an account and a service on microCMS

First, [create an account on microCMS](https://app.microcms.io/signup).

After creating an account, [create a new empty service from the dashboard](https://app.microcms.io/create-service).
When creating a service, please select "Create your own".

Next, Enter any value you like for **Service Name** and **Service ID**.

Then access the service you just created!

### Step 2. Create APIs
In this example, You need to create three APIs.
Also, the format of the APIs must be **list format**.

#### 1. create tag API
First, here is an example of creating a **Tag API**.

Go to /create-api (https://your-service-id.microcms.io/create-api) and select "Create your own".

Next, enter Basic API Information.
it should look as follows.

- API Name: **tag**
- Endpoint: **tags**

Next, Select API Type.
Choose "**List Format**".

Finally, Define API Schema.
Tag API has one field. They are as follows.

- `name` - **Text Field**. **Field ID** and **Display Name** should be set to `name`.

![](public/tag.png)

Congratulations! You have now created your tag API!
Save the content type and continue.

#### 2. create writer API
Second, create a writer api.
Basic API Information is as follows.

- API Name: **writer**
- Endpoint: **writers**

Next, Select API Type.
Choose "**List Format**".

Finally, Define API Schema.
The writer API has three fields. They are as follows.

- `name` - **Text Field**. **Field ID** and **Display Name** should be set to `name`.
- `profile` - **Text Area**. **Field ID** and **Display Name** should be set to `profile`.
- `image` - **Image Field**. **Field ID** and **Display Name** should be set to `image`.

![](public/writer.png)

Save the content type and continue.

#### 3. create blog API
Third, create a blog api.
Basic API Information is as follows.

- API Name: **blog**
- Endpoint: **blog**

Next, Select API Type.
Choose "**List Format**".

Finally, Define API Schema.
The blog API has six fields. They are as follows.

- `title` - **Text Field**. **Field ID** and **Display Name** should be set to `title`.
- `description` - **Text Area**. **Field ID** and **Display Name** should be set to `description`.
- `content` - **Rich Text Editor**. **Field ID** and **Display Name** should be set to `content`.
- `thumbnail` - **Image Field**. **Field ID** and **Display Name** should be set to `thumbnail`.
- `tags` - **Multiple Content References - tag**. **Field ID** and **Display Name** should be set to `tags`.
- `writer` - **Content Reference - writer**. **Field ID** and **Display Name** should be set to `writer`.

![](public/blog.png)

Save the content type and continue.

### Step 3. Create Contents
Create content for the tag API, writer API, and blog API.

Since the tag API and writer API are referenced from the blog API, please create the blog API content last.

Go to the "**/apis/[tags|writers|blog]/create**", then click on "**+ Add**".

#### tag
- You just need 1 tag content.
- Use dummy data for the text.

#### writer
- You just need 1 writer content.
- Use dummy data for the text and image.

#### blog
- You just need 1 blog content.
- Use dummy data for the text and image.

**Important**: For each content, you need to click on Publish. If not, the content will be in draft state.

![](public/publish.png)

### Step 4. Get API Key

From the top page of the dashboard, Go to **"/api-keys"**.

Copy and retrieve the value of the **"default"** API Key.

This API key will be used when making requests to microCMS from Next.js applications.


### Step 5. Install and run Next.js Application

First install the package.

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

**Important**: Requires node.js version 18 or higher.

Next, set environmental variables.

Create a `.env` file directly under root and enter the following information

```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
```

- `MICROCMS_API_KEY`: You can check it from the microCMS dashboard under "Service Settings > API Keys".
- `MICROCMS_SERVICE_DOMAIN`: The xxxxxxxxxx part of the microCMS dashboard URL (https://xxxxxxxx.microcms.io).
- `BASE_URL`: The URL to deploy to. Please describe it from the protocol.
   - ex）
      - development → http://localhost:3000
      - production → https://xxxxxxxx.vercel.app/ etc.

You should be up and running on your blog http://localhost:3000!

### Step 6. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com/).

#### Deploy Your Local Project
To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and import to Vercel([Document](https://vercel.com/docs/getting-started-with-vercel/import)).

**Important**: When importing a project in Vercel, be sure to click on the environment variables and set `MICROCMS_API_KEY`, `MICROCMS_SERVICE_DOMAIN` and `BASE_URL`.

#### Deploy from Our Template
Alternatively, you can deploy using our template by clicking on the Deploy button below.

The Next.js project is now deployed and the environment variables (`MICROCMS_API_KEY`, `MICROCMS_SERVICE_DOMAIN` and `BASE_URL) are ready for input.
Please set each environment variable and deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=This%20is%20a%20microCMS%20official%20simple%20blog%20template.&demo-image=https://github.com/microcmsio/simple-blog-with-microcms/blob/main/public/cover.png?raw=true&demo-title=Simple%20Blog%20with%20microCMS&demo-url=https://simple-blog-with-microcms.vercel.app/&from=templates&project-name=Simple%20Blog%20with%20microCMS&repository-name=Simple%20Blog%20with%20microCMS&repository-url=https://github.com/microcmsio/simple-blog-with-microcms&env=MICROCMS_API_KEY,MICROCMS_SERVICE_DOMAIN,BASE_URL)

---


# Appendix
## Page Preview Settings

In order to preview draft content, a page preview must be set up in the microCMS administration page.

Set the following in "API Settings > Page Preview" of the Blog API.

Replace `your-domain` with your deployed domain. (It also works with localhost)

![](public/page-preview-settings.png)

Once set, the page preview button will be available on the content editing page.
