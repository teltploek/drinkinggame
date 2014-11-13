Router.configure({

 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 notFoundTemplate: 'notFound',
 waitOn: function() { return []; }

});

Router.route('/', {name: 'titleScreen'});