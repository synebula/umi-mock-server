export default {
  'GET /api/user': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {},
      errorCode: 0,
    });
  },

  'POST /api/sign/in': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        uid: 1,
        uname: 'admin',
        rid: 1,
        rname: 'admin',
        gid: 1,
        gname: 'admin',
        token: '1233211233321',
      },
      status: 200,
    });
  },

  'GET /api/sign/user': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        uid: 1,
        uname: 'admin',
        rid: 1,
        rname: 'admin',
        gid: 1,
        gname: 'admin',
        token: '1233211233321',
      },
      status: 200,
    });
  },
};
