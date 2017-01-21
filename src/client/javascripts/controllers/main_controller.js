skokovModule.controller('mainCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.slideIndex = 0;
    $scope.modalIsVisible = false;

    $scope.slides = [
        {image: '/static/images/photo-1.png'},
        {image: '/static/images/photo-2.jpg'},
        {image: '/static/images/photo-3.jpg'},
        {image: '/static/images/photo-4.png'},
        {image: '/static/images/photo-5.jpg'},
        {image: '/static/images/photo-6.png'}
    ];

    $scope.projectDetails = [
        '10/22/2013',
        'skokov responsive wordpress theme',
        'website design',
        'ie8, ie9, ie10, firefox, safari, opera, chrome',
        'wordpress 3.5, wordpress 3.6',
        'responsive',
        'logotype',
        'unique icons',
        'live preview'
    ];

    var total = $scope.slides.length;

    $scope.openModal = function () {
        $location.hash('home_top');
        $anchorScroll();
        $scope.modalIsVisible = true;
    };

    $scope.closeModal = function () {
        $location.hash('slides');
        $anchorScroll();
        $scope.modalIsVisible = false;
    };

    $scope.showImg = function () {
        $scope.slideIndex = this.$index;
    };

    $scope.showNext = function () {
        if (total > 0) {
            $scope.slideIndex = ($scope.slideIndex == total - 1) ? 0 : $scope.slideIndex + 1;
        }
    };

    $scope.showPrevious = function () {
         if (total > 0) {
            $scope.slideIndex = ($scope.slideIndex == 0) ? total - 1 : $scope.slideIndex - 1;
        }
    };
}]);
