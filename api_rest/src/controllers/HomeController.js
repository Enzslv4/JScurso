class HomeController {
  index(req, res) {
    res.json({
      "cofoi pivete": true
    });
  }
}

export default new HomeController();
