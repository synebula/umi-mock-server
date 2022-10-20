export default {
  'GET /api/systems/1/authorize/1': (_req: any, res: any) => {
    res.json({
      success: true,
      data: 'Allow',
      status: 200,
    });
  },

  'GET /api/pages/in-system/1/authorized/1': (_req: any, res: any) => {
    res.json({
      success: true,
      data: [
        { uri: '/home', icon: '' },
        { uri: '/groups', icon: '' },
      ],
      status: 200,
    });
  },
  'GET /api/pages/authorize/1': (_req: any, res: any) => {
    res.json({
      success: true,
      data: 'Allow',
      status: 200,
    });
  },
};
