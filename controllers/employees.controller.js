const getEmployees = (req, res) => {
  const { name, id, age } = req.query;
  res.status(200).json({
    result: "OK",
    data: {
      name,
      id,
      age,
    },
  });
};

module.exports = { getEmployees };
