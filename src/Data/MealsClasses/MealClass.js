export default class Meal {
  constructor(category, description, imageUrl) {
    this.category = category;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  getName() {
    return this.category;
  }
  getDescription() {
    return this.description;
  }
}
