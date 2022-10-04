import Meal from "./MealClass";


export default class Foods extends Meal {
  constructor(category,description, imageUrl) {
    super(category,description, imageUrl);
    this.Foods = [];
  
   
  }
  setFoods(name, imageUrl) {
    this.Foods.push({
      id: this.Foods.length,
      name: name,
      comment: []
    });
  }
  getFoods() {
    return this.Foods;
  }
  getFoodsId(name) {
    this.Foods.map((val) => {
      if (val.name == name) return val.id;
    });
  }
  setCommet(id, userName, text) {
    this.Foods.filter(({ id: value }) => 
       value==id
     ).map(({ comment }) => 
       comment.push({userName:userName,comment:text})
     )
   }
   getComments(id) {
 
     return this.Foods.filter(({ id: value }) => value == id).map(({ comment }) =>comment
     )[0]
   }
 
}
