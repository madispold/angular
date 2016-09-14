/**
 * Created by Wiseman on 14/09/2016.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.boolValue = true;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2017',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'The first directive',
                    creatorName: 'Mark',
                    duration: '2 hours',
                    level: 'Introductory',
                    upVoteCount: 0
                },
                {
                    name: 'The controller to surpass all other controllers',
                    creatorName: 'Mitchell',
                    duration: '1.5 hours',
                    level: 'Master',
                    upVoteCount: 0
                },
                {
                    name: 'The last directive',
                    creatorName: 'Mark',
                    duration: '3 hours',
                    level: 'Master',
                    upVoteCount: 0
                }
            ]
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
});

