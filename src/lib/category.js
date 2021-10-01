const categories = [
  { name: "Trabalho", style: "work" },
  { name: "Jogos", style: "play" },
  { name: "Estudo", style: "study" },
  { name: "Lazer", style: "selfCare" },
];

class Category {

  constructor(id, name, style) {
    this.id = id;
    this.name = name;
    this.style = style;
  }

  static values() {
    return categories.map((value, id) => new Category(id, value.name, value.style));
  }

  static getById(value) {
    let category = Category.values().filter((c) => c.id === parseInt(value))[0];
    if (!category) {
      category = Category.values()[0];
    }
    
    return category;
  }
}

export default Category;
