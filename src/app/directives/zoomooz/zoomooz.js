/**
 * Created by owner on 9/30/15.
 */
angular.module( 'ngBoilerplate.zoomooz', [

])
    .controller('zoomoozCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.styles = listOfValue.getArrayList(listOfValue.styles);

        $scope.affineTransform = function (m) {
            var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];

            if (Math.abs(a * d - b * c) < 0.01) {
                console.log("fail!");
                return;
            }

            var tx = e, ty = f;

            var sx = Math.sqrt(a * a + b * b);
            a = a / sx;
            b = b / sx;

            var k = a * c + b * d;
            c -= a * k;
            d -= b * k;

            var sy = Math.sqrt(c * c + d * d);
            c = c / sy;
            d = d / sy;
            k = k / sy;

            if ((a * d - b * c) < 0.0) {
                a = -a;
                b = -b;
                c = -c;
                d = -d;
                sx = -sx;
                sy = -sy;
            }

            var r = Math.atan2(b, a);
            return {"tx": tx, "ty": ty, "r": r, "k": Math.atan(k), "sx": sx, "sy": sy};
        };

        $scope.matrixCompose = function (ia) {
            var ret = "translate(" + $scope.roundNumber(ia.tx, 6) + "px," + $scope.roundNumber(ia.ty, 6) + "px) ";
            ret += "rotate(" + $scope.roundNumber(ia.r, 6) + "rad) skewX(" + $scope.roundNumber(ia.k, 6) + "rad) ";
            ret += "scale(" + $scope.roundNumber(ia.sx, 6) + "," + $scope.roundNumber(ia.sy, 6) + ")";
            return ret;
        };

        $scope.roundNumber = function (number, precision) {
            precision = Math.abs(parseInt(precision, 10)) || 0;
            var coefficient = Math.pow(10, precision);
            return Math.round(number * coefficient) / coefficient;
        };

        $scope.m = [0.000000, 0.707107, -1.414213, 0.707107, 0.000000, 0.000000];
        $scope.aff = $scope.affineTransform($scope.m);
        var result = $scope.matrixCompose($scope.aff);
        console.log(result);

    })

    .directive('zoomooz', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/zoomooz/zoomooz.tpl.html',
            controller: 'zoomoozCtrl'
        };
    })

;
