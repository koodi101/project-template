const database = require('../database');

exports.list = async (ctx) => {
  const ips = await database.Ip.findAll();

  const response = {
    results: ips,
  };

  ctx.body = response;
};

exports.update = async (ctx) => {
  const { body } = ctx.request;

  const { ip, hostname } = body;

  let i = await database.Ip.findByPk(hostname);

    if (i) {
        await i.update({ ip, hostname })
  ctx.body = i;
  ctx.status = 200;
    }else {
  i = await database.Ip.create({
    ip,
    hostname,
  });
      ctx.body = i;
  ctx.status = 201;
}
};
