import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 50 }, { price: 25 }];
    return items;
  }
}
