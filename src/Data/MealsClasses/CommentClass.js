import Foods from "./FoodsClass"

export default class Comment extends Foods {
  constructor(category) {
    super(category)
    this.comments = [];
  }

  setComment(foodId, comment, username) {
    this.comments.push({
      foodId: foodId,
      comment: comment,
      username: username,
    });
  }
  getComments() {
    console.log(this.name)
    return this.comments.filter((val) => val != getAssetByID());
  }
}
