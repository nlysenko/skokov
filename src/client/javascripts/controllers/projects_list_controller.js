skokovModule.controller('projectsListCtrl', ['$scope', function($scope) {
    $scope.slideIndex = 0;

    $scope.slides = [
        {image: '/static/images/photo-1.png'},
        {image: '/static/images/photo-2.jpg'},
        {image: '/static/images/photo-3.jpg'},
        {image: '/static/images/photo-4.png'},
        {image: '/static/images/photo-5.jpg'},
        {image: '/static/images/photo-6.png'},
        {image: '/static/images/photo-7.jpg'}
    ];

    var total = $scope.slides.length;

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
