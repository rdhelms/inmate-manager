angular.module('portfolio').controller('projectsCtrl', function(Projects, $state, $scope) {
  var self = this;

  this.projectsList = [
    {
      name: 'Blogger Hub',
      pageLink: 'https://rdhelms.github.io/bloggerHub/',
      repoLink: 'https://github.com/rdhelms/bloggerHub',
      thumbnail: 'images/bloggerhub.png',
      descrLong: 'A tool to post to your Google Blogger blogs. Post to multiple blogs at once, and choose who receives an email notification about the post.',
      descrShort: 'A tool to post to your Google Blogger blogs. Post to multiple blogs at once, and choose who receives an email notification about the post.'
    }, {
      name: 'Asteroids',
      pageLink: 'https://rdhelms.github.io/asteroids/',
      repoLink: 'https://github.com/rdhelms/asteroids',
      thumbnail: 'images/asteroids.png',
      descrLong: 'A javascript game based on the original asteroids game.',
      descrShort: 'A javascript game based on the original asteroids game.'
    }, {
      name: 'Calculator',
      pageLink: 'https://rdhelms.github.io/fee-calculator/',
      repoLink: 'https://github.com/rdhelms/fee-calculator',
      thumbnail: 'images/calculator.png',
      descrLong: 'A javascript calculator',
      descrShort: 'A javascript calculator'
    }, {
      name: 'Force User Sign Up',
      pageLink: 'https://rdhelms.github.io/basicFormDesign/',
      repoLink: 'https://github.com/rdhelms/basicFormDesign',
      thumbnail: 'images/form-design.png',
      descrLong: 'A basic html form to sign up to be a jedi or sith.',
      descrShort: 'A basic html form to sign up to be a jedi or sith.'
    }, {
      name: 'Github Organizations by Username',
      pageLink: 'https://rdhelms.github.io/githubOrgs/',
      repoLink: 'https://github.com/rdhelms/githubOrgs',
      thumbnail: 'images/github-orgs.png',
      descrLong: "Enter any github username to see that user's organizations. Uses the GitHub API to get the user's information.",
      descrShort: "Enter any github username to see that user's organizations. Uses the GitHub API to get the user's information."
    }, {
      name: 'Ice Cream Shop',
      pageLink: 'https://rdhelms.github.io/iceCreamShop/',
      repoLink: 'https://github.com/rdhelms/iceCreamShop',
      thumbnail: 'images/ice-cream-shop.png',
      descrLong: 'One of my projects from my first week of web design. A basic ice cream shop website demonstrating introductory html concepts.',
      descrShort: 'One of my projects from my first week of web design. A basic ice cream shop website demonstrating introductory html concepts.'
    }, {
      name: 'Jeopardy',
      pageLink: 'https://rdhelms.github.io/jeopardy',
      repoLink: 'https://github.com/rdhelms/jeopardy',
      thumbnail: 'images/jeopardy.png',
      descrLong: 'A jeopardy-like trivia game. Multiple games can be played at once (scroll down after clicking New Game to see old games). The trivia questions are pulled from an API. Note that your browser may give a warning about "unsafe scripts" due to the fact that the API is not a certified https site.',
      descrShort: 'A jeopardy-like trivia game. Multiple games can be played at once (scroll down after clicking New Game to see old games). The trivia questions are pulled from an API. Note that your browser may give a warning about "unsafe scripts" due to the fact that the API is not a certified https site.'
    }, {
      name: 'Movie Ratings',
      pageLink: 'https://rdhelms.github.io/movieRatings/',
      repoLink: 'https://github.com/rdhelms/movieRatings',
      thumbnail: 'images/movie-ratings.png',
      descrLong: 'Search and rate movies from The Movie Database (TMDB). You must login with a valid TMDB account.',
      descrShort: 'Search and rate movies from The Movie Database (TMDB). You must login with a valid TMDB account.'
    }, {
      name: 'Multiboard',
      pageLink: 'https://multiboard.herokuapp.com',
      repoLink: 'https://github.com/rdhelms/multiboard',
      thumbnail: 'images/multiboard.png',
      descrLong: 'A drawing app that lets you draw backgrounds, obstacles, and characters, and then move your drawn characters with the arrow keys. Drawings can be published and shared with other users.',
      descrShort: 'A drawing app that lets you draw backgrounds, obstacles, and characters, and then move your drawn characters with the arrow keys. Drawings can be published and shared with other users.'
    }, {
      name: 'ToDo List w/ Angular',
      pageLink: 'https://rdhelms.github.io/angularToDo/',
      repoLink: 'https://github.com/rdhelms/angularToDo',
      thumbnail: 'images/todo-angular.png',
      descrLong: 'A To-Do list created using the AngularJS MVC framework.',
      descrShort: 'A To-Do list created using the AngularJS MVC framework.'
    }, {
      name: 'ToDo List',
      pageLink: 'https://rdhelms.github.io/toDoList/',
      repoLink: 'https://github.com/rdhelms/toDoList',
      thumbnail: 'images/todo.png',
      descrLong: 'Another To-Do list, but created using jQuery.',
      descrShort: 'Another To-Do list, but created using jQuery.'
    }, {
      name: 'Word Counter',
      pageLink: 'https://rdhelms.github.io/wordCounting/',
      repoLink: 'https://github.com/rdhelms/wordCounting',
      thumbnail: 'images/word-counter.png',
      descrLong: 'A tool to count the words in a particular block of text. Count two blocks of text at once to compare the word counts.',
      descrShort: 'A tool to count the words in a particular block of text. Count two blocks of text at once to compare the word counts.'
    }, {
      name: 'Yahtzee',
      pageLink: 'https://rdhelms.github.io/diceGame/',
      repoLink: 'https://github.com/rdhelms/diceGame',
      thumbnail: 'images/yahtzee.png',
      descrLong: 'A dice game similar to Yahtzee. Try to get a small straight, large straight, full house, three or four of a kind, or a Yahtzee (five of a kind).',
      descrShort: 'A dice game similar to Yahtzee. Try to get a small straight, large straight, full house, three or four of a kind, or a Yahtzee (five of a kind).'
    }, {
      name: 'Zoo Game',
      pageLink: 'https://rdhelms.github.io/zoo/',
      repoLink: 'https://github.com/rdhelms/zoo',
      thumbnail: 'images/zoo.png',
      descrLong: "A javascript zoo game. Increase your zoo's profit by buying lions, parrots, otters, and penguins.",
      descrShort: "A javascript zoo game. Increase your zoo's profit by buying lions, parrots, otters, and penguins."
    }
  ];
  this.currentProject = 0;
  this.previousProject = function() {
    $('.currentProject').css({
      'transition': 'all 0.2s ease',
      'transform': 'translateX(1000px)'
    });
    setTimeout(function() {
      $('.currentProject').css({
        'transition': 'none',
        'transform': 'translateX(-1000px)'
      });
      self.currentProject--;
      if ( self.currentProject < 0 ) {
        self.currentProject = (self.projectsList.length - 1);
      }
      $scope.$apply();
      setTimeout(function() {
        $('.currentProject').css({
          'transition': 'all 0.2s ease',
          'transform': 'translateX(0)'
        });
      }, 200);
    }, 200);
  }
  this.nextProject = function() {
    $('.currentProject').css({
      'transition': 'all 0.2s ease',
      'transform': 'translateX(-1000px)'
    });
    setTimeout(function() {
      $('.currentProject').css({
        'transition': 'none',
        'transform': 'translateX(1000px)'
      });
      self.currentProject++;
      if ( self.currentProject > (self.projectsList.length - 1) ) {
        self.currentProject = 0;
      }
      $scope.$apply();
      setTimeout(function() {
        $('.currentProject').css({
          'transition': 'all 0.2s ease',
          'transform': 'translateX(0)'
        });
      }, 200);
    }, 200);
  }
});
