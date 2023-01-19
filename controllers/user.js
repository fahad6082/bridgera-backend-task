const Service = require('../service/user');
const mongoose = require("mongoose");
/*
|  User list
*/
exports.list = async (request, response, next) => {
    try {
      const query = {isDeleted: false}
      const result = await Service.findAll(query);
      return response
        .status(200)
        .json({
          message: "success",
          payload: result,
        });
    } catch (error) {
      return response.status(500).json({ error, message: "Internal error." });
    }
};

/*
  Add User
*/
exports.add = async (request, response, next) => {
  try {
    request.body["_id"] = new mongoose.Types.ObjectId();
    const result = await Service.add(request.body);
    return response.status(201).json({
      message: "User added",
      payload: result,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ error, message: "Internal error." });
  }
};

/*
| Edit User 
*/
exports.edit = async (request, response, next) => {
  try {
    const filter = {_id: request.query.id}
    const result = await Service.updateOne(filter, request.body, {new: true});
    return response.status(200).json({ message: 'User updated', payload: result });
  } catch (error) {
    return response
      .status(500)
      .json({ error, message: "Internal error." });
  }
};

/*
| Delete User 
*/
exports.delete = async (request, response, next) => {
  try {
    const filter = {_id: request.query.id}
    const data = {
      isDeleted: true
    };

    const result = await Service.updateOne(filter, data, {new: true});
    return response.status(200).json({ message: 'User updated', payload: result });
  } catch (error) {
    return response
      .status(500)
      .json({ error, message: "Internal error." });
  }
};