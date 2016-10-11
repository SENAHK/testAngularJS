'use strict';
// Déclaration de l'application avec ses [dépendances]
// La seule dépendance ici est le ngRoute, un module qui permet le routage
var monApp = angular.module('monApp', ['ngRoute']);

// Routage des pages grâce au module angular 'ngRoute'
monApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'vues/home.html', controller: 'PostsController'})
            // Par défaut: afficher home.html et associe cette page au controleur désigné

            .when('/comments/:id', {templateUrl: 'vues/comments.html', controller: 'CommentsController'})
            // Sur page comments/id du post: afficher comments.html et associer le controleur

            .otherwise({redirectTo: '/'});
});

// Factory est un type de service
// Un service angular permet de créer des objets JS globals (accessibles depuis n controleurs)
monApp.factory('PostFactory', function () {
    //Cette factory contient les posts (générés sur JSON generator) et des fonctions d'accès à ceux-ci
    var factory = {
        posts: [
            {
                "id": 0,
                "name": "Moltonic",
                "content": "Sint id minim Lorem pariatur ullamco aute. Qui eiusmod exercitation sunt adipisicing excepteur duis qui excepteur laborum voluptate amet laborum culpa. Esse cillum sunt incididunt anim non. Elit laboris ex deserunt quis consectetur dolor id fugiat officia do reprehenderit. Pariatur esse consectetur mollit deserunt ut ullamco incididunt adipisicing sunt.",
                "comment": [
                    {
                        "username": "Arline",
                        "city": "Bluffview",
                        "email": "arlinemassey@moltonic.com",
                        "content": "Lorem velit esse officia aliqua veniam. Elit exercitation veniam tempor deserunt ad sit labore esse. Amet adipisicing ipsum ad exercitation deserunt fugiat nisi ullamco officia. Aliquip exercitation laboris veniam tempor enim exercitation minim cillum est in irure esse. Duis esse occaecat duis eiusmod fugiat ex non."
                    },
                    {
                        "username": "Walsh",
                        "city": "Emory",
                        "email": "walshmassey@moltonic.com",
                        "content": "Ut aute velit ad laborum exercitation ex minim duis esse Lorem pariatur magna. Irure excepteur exercitation ut et magna et non sint anim irure esse aliquip. Nisi laboris magna nisi labore pariatur eiusmod ex adipisicing ex excepteur consequat. Consequat Lorem sit sit aute deserunt sit mollit ad adipisicing aliquip excepteur. Consectetur veniam non est excepteur culpa qui laboris magna veniam ipsum esse reprehenderit est."
                    }
                ]
            },
            {
                "id": 1,
                "name": "Exodoc",
                "content": "Lorem sunt nisi id eiusmod est veniam laboris magna nulla mollit. Ipsum dolore nulla ea eu est dolore do eu labore labore veniam nisi quis do. Sit quis magna esse cillum labore cillum consequat dolor nisi non. Ad excepteur ex aliquip quis cillum pariatur dolor aliqua. Sint enim cillum velit ad nostrud.",
                "comment": [
                    {
                        "username": "Marisol",
                        "city": "Munjor",
                        "email": "marisolmassey@exodoc.com",
                        "content": "In aute nostrud laboris Lorem culpa. Lorem occaecat voluptate elit velit laborum ut amet excepteur consectetur est commodo laboris elit Lorem. Sunt consectetur aliquip voluptate sit. Officia aliquip sit cillum pariatur ullamco proident labore officia irure ut amet ex. Cillum consequat ipsum aliquip commodo ad mollit sint incididunt culpa."
                    }
                ]
            },
            {
                "id": 2,
                "name": "Lingoage",
                "content": "Cupidatat fugiat velit est mollit cillum occaecat aliquip sit ullamco esse sit veniam. Non culpa sint deserunt laborum irure do nulla ut excepteur voluptate esse magna. Aliquip pariatur elit culpa esse aliquip proident ullamco aliquip culpa fugiat. Duis ipsum in exercitation elit irure. Ea irure esse irure eu laborum eiusmod reprehenderit do qui ullamco occaecat cillum fugiat amet.",
                "comment": [
                    {
                        "username": "Newman",
                        "city": "Lewis",
                        "email": "newmanmassey@lingoage.com",
                        "content": "Ad veniam enim deserunt commodo nostrud. Consequat ea nulla consequat mollit officia et ullamco cupidatat anim nostrud do nostrud. Reprehenderit cupidatat enim irure adipisicing veniam enim irure qui exercitation fugiat esse ullamco duis. Enim nostrud laborum esse deserunt adipisicing ex velit sunt veniam. Culpa incididunt Lorem proident amet."
                    },
                    {
                        "username": "Little",
                        "city": "Umapine",
                        "email": "littlemassey@lingoage.com",
                        "content": "Veniam incididunt reprehenderit aute consequat non sunt fugiat ea aliquip reprehenderit commodo amet enim. Excepteur adipisicing dolore do ullamco enim minim est exercitation ullamco minim labore duis. Ipsum irure reprehenderit ipsum qui ut deserunt esse. Labore culpa commodo est tempor dolor quis in amet sunt. Sunt fugiat id aliquip est aliqua."
                    }
                ]
            },
            {
                "id": 3,
                "name": "Codax",
                "content": "Sint exercitation occaecat proident ea fugiat laboris in eiusmod nulla id nostrud. Excepteur non excepteur consectetur proident laborum nostrud et laboris. Lorem incididunt reprehenderit cillum officia cupidatat Lorem. Consequat Lorem dolor id quis tempor do in cupidatat enim sint qui velit. Minim magna ex officia duis labore nisi aliquip et elit.",
                "comment": [
                    {
                        "username": "Garza",
                        "city": "Deseret",
                        "email": "garzamassey@codax.com",
                        "content": "Aliqua minim adipisicing aliquip ipsum aliqua in non aliqua. Enim deserunt anim aliqua deserunt laborum ad. Duis aliquip laborum sunt in. Consectetur dolor cupidatat labore commodo deserunt dolor. Pariatur quis aliqua amet occaecat consequat sint."
                    },
                    {
                        "username": "Jenny",
                        "city": "Eagletown",
                        "email": "jennymassey@codax.com",
                        "content": "Est duis tempor laboris enim aliquip culpa ex labore fugiat aliquip. In Lorem cillum fugiat qui. Id ut ea dolore tempor sint ipsum minim aliquip enim exercitation minim. Anim et id aliquip cupidatat ea duis proident aute aliquip cupidatat enim cillum proident aliqua. Ipsum enim non ea fugiat."
                    },
                    {
                        "username": "Arlene",
                        "city": "Fannett",
                        "email": "arlenemassey@codax.com",
                        "content": "Nulla do dolore magna fugiat veniam ipsum ex. Sit in fugiat eu fugiat commodo veniam veniam dolore. Amet laborum eu incididunt culpa ea commodo deserunt. Anim reprehenderit do veniam voluptate ipsum velit sunt consequat. Est fugiat ut sit dolore deserunt proident consectetur ut reprehenderit in ea amet laboris quis."
                    }
                ]
            },
            {
                "id": 4,
                "name": "Geoforma",
                "content": "Dolore cillum consectetur consectetur sit voluptate eu do reprehenderit commodo cupidatat enim ex ea anim. Exercitation pariatur ex exercitation dolor culpa duis dolor proident duis ullamco incididunt eiusmod. Ea proident anim id exercitation nisi duis. Sunt velit cupidatat amet commodo duis. Sint ad mollit commodo sint laborum amet dolor sunt sunt anim reprehenderit aliquip id.",
                "comment": [
                    {
                        "username": "Potts",
                        "city": "Kansas",
                        "email": "pottsmassey@geoforma.com",
                        "content": "Proident sunt ex laborum ipsum duis aliqua elit irure labore duis ut. Pariatur mollit voluptate culpa sit sit aliquip sint amet sit enim. Eu cupidatat tempor ullamco nulla ex consequat nulla ea voluptate esse. Id commodo nostrud aliquip tempor minim aute magna cupidatat consequat exercitation quis occaecat Lorem aute. Sint pariatur ex nisi elit aute fugiat fugiat voluptate fugiat nulla duis."
                    },
                    {
                        "username": "Webb",
                        "city": "Downsville",
                        "email": "webbmassey@geoforma.com",
                        "content": "In eiusmod deserunt irure enim eiusmod. Tempor id id sit non. Nisi veniam adipisicing occaecat non ipsum culpa Lorem id. Nulla nulla ullamco quis consectetur. Qui et laborum quis non."
                    }
                ]
            }
        ],
        // Tous les posts
        getPosts: function () {
            return factory.posts;
        },
        // Un post
        getPost: function (idPost) {
            var post = {};
            angular.forEach(factory.posts, function (value, key) {
                if (value.id == idPost) {
                    post = value;
                }
            });
            return post;
        }
    };
    return factory;
});

/**
 * PostsController est le controleur des posts
 * @param 1: ($scope) obligatoire, fait le lien entre vue et controleur (data-binding)
 * @param 2: (PostFactory) est le service (ici de type factory) qu'on souhaite utiliser
 */
monApp.controller('PostsController', function ($scope, PostFactory) {
    $scope.posts = PostFactory.getPosts();
}
);

/**
 * CommentsController est le controleur des commentaires
 * @param 1: ($scope) obligatoire, fait le lien entre vue et controleur (data-binding)
 * @param 2: (PostFactory) est le service (ici de type factory) qu'on souhaite utiliser
 * @param 3: ($routeParams) est un service de ngRoute qui permet de récupérer des valeurs passées dans les pages
 */
monApp.controller('CommentsController', function ($scope, PostFactory, $routeParams) {
    // idPost contient l'id du post passé grâce à la route (comme $_GET)
    var idPost = $routeParams.id;
    $scope.comments = PostFactory.getPost(idPost).comment;
}
);


