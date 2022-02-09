const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getHomePageProducts() {
  const query = `
  {
    collection(handle: "frontpage") {
      title
      products(first: 5) {
        edges {
          node {
            id
            title
            handle
            images(first: 5) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
  
`;

  const response = await ShopifyData(query);

  const homePageProducts = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return homePageProducts;
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
  `;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getSingleProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
      id
      title
      description
      images(first: 5) {
        edges {
          node {
            id
            url
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
    }
  }
  `;

  const response = await ShopifyData(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : {};

  return product;
}
