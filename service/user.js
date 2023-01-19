  
const Model = require("./../models/user");

/**
 * 
 * Return Admin user list
 * @param {*} query
 * @returns
 */
module.exports.findAll = async (query = {}, project = '', option = {}, populate = []) => {
  try {
    return await Model.find(query, project, option).populate(populate);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Add user
 * @param {*} filter
 * @param {*} add data
 * @returns
 */
module.exports.add = async (data) => {
  try {
    const user = new Model(data);
    return await user.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Update user
 * @param {*} query
 * @param {*} update data
 * @returns
 */
module.exports.updateOne = async (query, data) => {
  try {
    return await Model.updateOne(query, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};