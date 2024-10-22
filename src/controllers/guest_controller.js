import GuestService from "../services/guest_service.js";
const guestService = new GuestService();

export default class GuestController {
  constructor() {}

  async createGuest(req, res, next) {
    try {
      const objGuest = req.body;
      const newGuest = await guestService.create(objGuest);
      if(!newGuest) return res.status(404).json({code: 404, msg: 'Guest already exist'});
      return res.json({code: 201 , data: newGuest});
    } catch (error) {
      next(error);
    }
  }

  async updateGuest(req, res, next) {
    try {
      const objGuest = req.body;
      const doc = req.params.id;
      const updateGuest = await guestService.update(doc,objGuest);
      if(!updateGuest) return res.json({msg: "Guest doesn't exist"});
      return res.json(updateGuest);
    } catch (error) {
      next(error);
    }
  }

  async getByNroDoc(req, res, next) {
    try {
      const { nrodoc } = req.query;
      const guest = await guestService.getByNroDoc(nrodoc);
      if(!guest) return res.status(404).json({code: "404", msg: "Guest doesn't exist"});
      return res.json(guest);
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      const { nameFind } = req.query;
      const guests = await guestService.getByName(nameFind);
      if(!guests) return res.status(404).json({code: "404", msg: "Guest dosn't exist"});
      return res.json(guests);
    } catch (error) {
      next(error);
    }
  }
}
