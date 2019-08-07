'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      'result': [
        {
          name: '贾志腾',
          age: 18
        }
      ]
    };
  }
}

module.exports = HomeController;
