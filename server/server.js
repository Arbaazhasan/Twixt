
const server = (app) => {

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, (req, res) => {
        console.log("Server wokring on PORT : " + PORT);
    });
};

export default server;