import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.color = item.color;
    this.name = item.name;
    this.image = item.image;
    this.price = item.price;
    this.count = item.count;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(
      ({ name, color }) => item.name == name && item.color == color
    );
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [...this.itemList, new Item({ ...item, count: 1 })];
    }
  }
}
