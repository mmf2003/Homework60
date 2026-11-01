export const getArticles = (req, res) => {
    res.send("Get articles route");
};

export const createArticle = (req, res) => {
    res.send("Post articles route");
};

export const getArticleById = (req, res) => {
    res.send(`Get article by Id route: ${req.params.articleId}`);
};

export const updateArticle = (req, res) => {
    res.send(`Put article by Id route: ${req.params.articleId}`);
};

export const deleteArticle = (req, res) => {
    res.send(`Delete article by Id route: ${req.params.articleId}`);
};
