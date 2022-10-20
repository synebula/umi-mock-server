import {
  devices,
  finance,
  messages,
  payments,
  persons,
  shoppings,
  trackers as tracks,
  transfers,
} from "./data";

export default {
  "GET /api/search": (req: any, res: any) => {
    let data: any[] = [];
    if (req.query.key === "18899659965") data.push(persons[0]);
    else data = persons.map((p) => ({ ...p, name: p.name + req.query.key }));
    if (req)
      res.json({
        success: true,
        data: {
          page: 1,
          size: 10,
          total: data.length === 1 ? 1 : 100,
          data,
        },
        status: 200,
      });
  },
  "GET /api/analyze/:id": (req: any, res: any) => {
    const id = req.params.id;
    const data = persons.filter((p) => p.id === id).pop();
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  "GET /api/analyze/:id/devices": (req: any, res: any) => {
    const id = req.params.id;
    const data = devices.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  "GET /api/analyze/:id/tracks": (req: any, res: any) => {
    const id = req.params.id;
    const data = tracks.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  "GET /api/analyze/:id/messages": (req: any, res: any) => {
    const id = req.params.id;
    const data = messages.filter((m) => m.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 5, total: 100, data },
        status: 200,
      });
  },

  "GET /api/analyze/:id/shoppings": (req: any, res: any) => {
    const id = req.params.id;
    const data = shoppings.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 5, total: 100, data },
        status: 200,
      });
  },

  "GET /api/analyze/:id/finance": (req: any, res: any) => {
    const id = req.params.id;
    const data = finance.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data: data[0],
        status: 200,
      });
  },

  "GET /api/analyze/:id/payments": (req: any, res: any) => {
    const id = req.params.id;
    const start = req.query.start;
    const end = req.query.end;
    const data = payments.filter((d) => {
      let s = d.owner.toString() === id;
      if (s && start) s = d.money >= Number.parseFloat(start);
      if (s && end) s = d.money <= Number.parseFloat(end);

      return s;
    });
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 10, total: 100, data },
        status: 200,
      });
  },

  "GET /api/analyze/:id/transfers": (req: any, res: any) => {
    const id = req.params.id;
    const start = req.query.start;
    const end = req.query.end;
    const data = transfers.filter((d) => {
      let s = d.owner.toString() === id;
      if (s && start) s = d.money >= Number.parseFloat(start);
      if (s && end) s = d.money <= Number.parseFloat(end);

      return s;
    });
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 10, total: 100, data },
        status: 200,
      });
  },
};
