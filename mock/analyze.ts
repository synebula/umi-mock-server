import { devices, finance, messages, payments, persons, shoppings, trackers as tracks, transfers } from './data';

export default {
  'GET /api/search': (req: any, res: any) => {
    let data = [];
    data.push(persons[0]);
    if (req)
      res.json({
        success: true,
        data: persons[0],
        status: 200,
      });
  },
  'GET /api/search/history': (req: any, res: any) => {
    let data = ['18899659965', '358882046176540', 'db37a67f90126073ad807ca778e2ad66'];
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },
  'GET /api/analyze/:id': (req: any, res: any) => {
    const id = req.params.id;
    const data = persons.filter((p) => p.id === id).pop();
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  'GET /api/analyze/:id/devices': (req: any, res: any) => {
    const id = req.params.id;
    const data = devices.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  'GET /api/analyze/:id/tracks': (req: any, res: any) => {
    const id = req.params.id;
    const data = tracks.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  'GET /api/analyze/:id/message/types': (req: any, res: any) => {
    const types = [
      { id: 1, name: '出行信息', count: 0 },
      { id: 2, name: '酒店住宿', count: 0 },
      { id: 3, name: '收寄件', count: 0 },
      { id: 4, name: '休闲娱乐', count: 0 },
      { id: 5, name: '金融借贷', count: 0 },
      { id: 6, name: '境外金盘', count: 0 },
    ];
    const id = req.params.id;
    const m = messages.filter((m) => m.owner.toString() === id);
    let data = types.map((t) => ({
      ...t,
      count: m.filter((m) => m.type === t.id).length,
    }));

    data = [{ id: 0, name: '全部短信内容', count: m.length }].concat(data);
    if (req)
      res.json({
        success: true,
        data,
        status: 200,
      });
  },

  'GET /api/analyze/:id/messages': (req: any, res: any) => {
    const id = req.params.id;
    const type = req.query.type;
    const data = messages.filter((m) => {
      let pass = m.owner.toString() === id;
      if (pass && type && type !== '0') {
        pass = m.type?.toString() === type;
      }
      return pass;
    });
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 5, total: data.length, data },
        status: 200,
      });
  },

  'GET /api/analyze/:id/shoppings': (req: any, res: any) => {
    const id = req.params.id;
    const data = shoppings.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data: { page: 1, size: 5, total: data.length, data },
        status: 200,
      });
  },

  'GET /api/analyze/:id/finance': (req: any, res: any) => {
    const id = req.params.id;
    const data = finance.filter((d) => d.owner.toString() === id);
    if (req)
      res.json({
        success: true,
        data: data[0],
        status: 200,
      });
  },

  'GET /api/analyze/:id/payments': (req: any, res: any) => {
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
        data: { page: 1, size: 10, total: data.length, data },
        status: 200,
      });
  },

  'GET /api/analyze/:id/transfers': (req: any, res: any) => {
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
        data: { page: 1, size: 10, total: data.length, data },
        status: 200,
      });
  },
};
