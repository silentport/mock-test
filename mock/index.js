const path = require("path");
module.exports = {
    needMock: true,
    prefix: "api",
    storePath: path.resolve(__dirname, "store"), //must a absolute path
    tip: true,
    routes: {
        "GET:a/b/:id": ({
            store,
            params
        }) => {
            return store.data.find(item => {
                return item.id == params.id
            });
        },
        "POST:a/b": ({
            store,
            body
        }) => {
            console.log("store,", store)
            console.log("body,", body)
            store.data.find(item => {
                return item.id == body.id
            }).name = body.name;
            return {
                status: true,
                store: store
            };
        }
    }
}