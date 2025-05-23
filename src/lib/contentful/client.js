import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SAPCE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const previewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SAPCE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});
