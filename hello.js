const HelloRoutes = (app) => {
    app.get("/goodbye", (req, res) => {
        res.send("goodbye world!");
    })
    
    const hello = (req, res) => { res.send( "hello my friend!")}
    app.get("/hello", hello);

    app.get("/", (req, res) => {
        res.send("home page!");
    })

}
export default HelloRoutes;