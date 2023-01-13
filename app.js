const dateAfter = require("express");
const addDays = require("date-fns/addDays");

const checking = dateAfter();
checking.get("/", (request, response) => {
  const finalDate = addDays(new Date(), 100);
  const result = `${finalDate.getDate()}/${
    finalDate.getMonth() + 1
  }/${finalDate.getFullYear()}`;
  response.send(result);
});
checking.listen(3000);

module.exports = checking;
