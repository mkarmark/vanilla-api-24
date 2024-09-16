module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API. It's me! On 9/16/24 11:49am" },
  };
};
