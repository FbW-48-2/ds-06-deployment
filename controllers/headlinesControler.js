import createError from "http-errors";
import Headline from '../models/Headline.js'

export const getData = async (req, res, next) => {
  try {
    const data = await Headline.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};