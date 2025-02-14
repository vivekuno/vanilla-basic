module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: "Hello from API! This is where your ClickOnce files will be served."
    };
};