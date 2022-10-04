const Salat = new Foods(
  "Salat",
  "Noriu skaniai ir sveikai pavalgyti",
  "imaggggoj"
);
Salat.setFoods(
  "Salotu misinys",
  "https://www.dansukker.lt/files/Billeder/recipe_large/orange_avocado_salad.jpg"
);
Salat.setFoods(
  "lapai su grybais",
  "https://28a7m816hpyv151bvyuqjc51-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/AdobeStock_297135896-2048x1365.jpeg"
);
Salat.setFoods(
  "Salotu misinys",
  "https://la-casa-schaafheim.de/de-wAssets/img/adobe-stock/speisen/AdobeStock_232703006.jpeg"
);
Salat.setFoods(
  "lapai su grybais",
  "https://static01.nyt.com/images/2014/04/08/dining/farrosalad/farrosalad-superJumbo.jpg"
);

const Soup = new Foods("Soup", "Noriu silto maisto", "imaggggoj");
Soup.setFoods(
  "Sriuba su artisokais",
  "https://cookieandkate.com/images/2019/01/best-lentil-soup-recipe-4.jpg"
);
Soup.setFoods(
  "burokeliu sriuba",
  "https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png"
);
const Sandwiches = new Foods("Sandwiches", "Noriu silto maisto", "imaggggoj");
Sandwiches.setFoods(
  "Sandwitches",
  "https://th.bing.com/th/id/R.d326470de00c375e27758ff8df50d923?rik=zdeiNnLsoorSHg&pid=ImgRaw&r=0"
);
Sandwiches.setFoods(
  "sisiol",
  "https://thebigfatnoodle.files.wordpress.com/2011/08/theres-no-delicate-way-to-eat-this-so-be-prepared-to-make-a-mess.jpg"
);
Sandwiches.setFoods(
  "avocad sandwitch",
  "https://th.bing.com/th/id/R.ab7df76237b1e48ed0f26250b9992429?rik=Z%2biYc%2fw%2b2cIjTA&riu=http%3a%2f%2findiaphile.info%2fwp-content%2fuploads%2f2014%2f08%2fpotatosandwich-5939sq.jpg&ehk=ptJUg9U2PPkoqLvVWXnLWMQBnee3GGh9X8xB%2fMsZAlE%3d&risl=&pid=ImgRaw&r=0"
);
const Mexican = new Foods("Mexican", "Noriu silto maisto", "imaggggoj");
Mexican.setFoods(
  "Taco",
  "https://cravingcork.ie/wp-content/uploads/2022/02/intro-1601393159.jpg"
);
Mexican.setFoods(
  "Guacamole",
  "https://www.angelofthewinds.com/wp-content/uploads/2021/01/Playa-BonitaBLOG.jpg"
);
Mexican.setCommet(2, "Viktorija", "Skanus");
Mexican.setCommet(2, "Viktorija", "No");

const food = [
  {
    id: 0,
    category: "Soup",
    description: "Siltas maistas",
    foods: [
      {
        name: "Klasikinė čili sriuba",
        id: 0,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/articles/thumb920x573/2019/03/sriubos-sriubytes-39-skanus-sotus-receptai-45016.jpg",
        comments: [
          {
            username: "Viktorija",
            comment: "Labai skanu",
            data: "2022-09-19",
            rating: "5",
          },
          {
            username: "Karinas",
            comment: "Nebuvo silta",
            data: "2022-09-16",
            rating: "2",
          },
          {
            username: "Viktorija",
            comment: "Labai skanu",
            data: "2022-09-19",
            rating: "5",
          },
        ],
        category: "Soup",
      },
      {
        name: "Pomidorų sriuba su pupelėmis",
        id: 1,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/19124.jpg",
        comments: [],
        category: "Soup",
      },
      {
        name: "Tiršta brokolių ir sūrio sriuba",
        id: 2,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/33893.jpg",
        comments: [
          {
            username: "Viktorija",
            comment: "Labai skanu",
            data: "2022-09-19",
            rating: "5",
          },
          {
            username: "Karinas",
            comment: "Nebuvo silta",
            data: "2022-09-16",
            rating: "2",
          },
          {
            username: "Viktorija",
            comment: "Neskanu",
            data: "2022-09-19",
            rating: "5",
          },
        ],
        category: "Soup",
      },
    ],
  },
  {
    id: 1,
    category: "Sandwich",
    description: "Siltas maistas",
    foods: [
      {
        name: "Karšti sumuštiniai su karamelizuotais obuoliais ir sūriu",
        id: 0,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/40722.jpg",
        comments: [
          {
            username: "Viktorija",
            comment: "Labai skanu",
            data: "2022-09-19",
            rating: "5",
          },
          {
            username: "Karinas",
            comment: "Nebuvo silta",
            data: "2022-09-16",
            rating: "2",
          },
        ],
        category: "Sandwich",
      },
      {
        name: "Su avokadų ir varškės užtepėle",
        id: 1,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/40250.jpg",
        comments: [],
        category: "Sandwich",
      },
      {
        name: "Su žirnelių pesto",
        id: 2,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/40276.jpg",
        comments: [],
        category: "Sandwich",
      },
    ],
  },
  {
    id: 2,
    category: "Pasta",
    description: "Siltas maistas",
    foods: [
      {
        name: "Makaronų apkepas",
        id: 0,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/37519.jpg",
        comments: [
          {
            username: "Viktorija",
            comment: "Labai skanu",
            data: "2022-09-19",
            rating: "5",
          },
          {
            username: "Karinas",
            comment: "Nebuvo silta",
            data: "2022-09-16",
            rating: "2",
          },
        ],
        category: "Pasta",
      },
      {
        name: "Su vištiena ir kreminiu citrininiu padažu",
        id: 1,
        imageUrl:
          "https://www.lamaistas.lt/uploads/modules/recipes/without-watermark/37878.jpg",
        comments: [],
        category: "Soup",
      },
    ],
  },
];
