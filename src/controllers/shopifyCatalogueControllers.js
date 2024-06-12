const responses = require("../utils/responses");
const Shopify = require("shopify-api-node");

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_STORE,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

const getShopifyCatalogue = async (req, res) => {
  try {
    const { handle = "back-seat" } = req.body;

    let data = `query getProductVariantsByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        variants(first: 250) {
          edges {
            node {
              id
              title
              image {
                url
              }
            }
          }
        }
      }
    }
    `;

    const variables = { handle };

    const response = await shopify.graphql(data, variables);

    responses.sendSuccess(
      res,
      response,
      "Shopify catalogue fetched successfully"
    );
  } catch (e) {
    responses.sendError(res, e, "Error:Oops,Some error Occurred!");
  }
};

module.exports = {
  getShopifyCatalogue,
};
