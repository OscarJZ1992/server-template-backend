const getApi = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    result: "OK",
    data: {
      message: id,
    },
  });
};

const getQuery = (req, res) => {
  const { id, name } = req.query;
  res.status(200).json({
    result: "OK",
    data: {
      id,
      name,
    },
  });
};

module.exports = {
  getApi,
  getQuery,
};
