(function() {
    
angular.module('app').factory('$canvas', function(CHARACTERS, RANKINGS, RANKING_ORDER) {

    CHARACTERS = CHARACTERS.map(function(c) {
        if (c.constructor == String)
            return { name: c, file: c.toLowerCase() + '.png' };
        return c;
    });

    var service = { };
    var canvas = null;

    var init = function(c) {
        canvas = new fabric.Canvas('canvas');
        canvas.selection = false;
    };

    var groupByRanking = function(rankings) {
        var result = [ ];
        for (var name in rankings) {
            var index = RANKING_ORDER.indexOf(rankings[name]);
            if (index == -1) continue;
            if (!result[index]) result[index] = [ ];
            result[index].push(name);
        }
        return result;
    };

    var addGroup = function(group, index, count) {
        var id = RANKING_ORDER[index], label = null;
        for (var i=0;i<RANKINGS.length;++i) {
            if (RANKINGS[i].value != id) continue;
            label = RANKINGS[i].label;
            break;
        }
        addLabel(label, count);
        /***********************/
        var images = [ ];
        for (var i=0;i<group.length;++i) {
            for (var j=0;j<CHARACTERS.length;++j) {
                if (CHARACTERS[j].name != group[i]) continue;
                images.push(CHARACTERS[j].file);
                break;
            }
        }
        addImages(images, count);
    };

    var addLabel = function(label, count) {
        var textbox = new fabric.Textbox(label, {
            left: 0,
            top: 300 * count + 8,
            width: 195,
            height: 300,
            fontFamily: 'Impact',
            fontSize: 80,
            textAlign: 'center',
            lineHeight: 0.755555,
            selectable: false,
            hasControls: false
        });
        textbox.top += (300 - Math.ceil(textbox.getHeight())) / 2;
        canvas.add(textbox);
    };

    var addImages = function(images, count) {
        images.forEach(function(image, n) {
            fabric.Image.fromURL('assets/' + image, function(data) {
                data.top = 300 * count + 8;
                data.left = 195 * (n+1);
                data.selectable = false;
                data.hasControls = false;
                canvas.add(data);
            });
        });
    };

    service.update = function(rankings) {

        if (canvas === null) init();

        var groups = groupByRanking(rankings);

        var height = groups.filter(function(x) { return x; }).length * 300 + 8;
        var width = (1 + groups.reduce(function(p,n) { return Math.max(p, n.length); }, 0)) * 195;

        canvas.clear();
        canvas.setDimensions({ width: width, height: height });
        canvas.setBackgroundColor('white');

        var pageHeight = window.innerHeight;
        var topLeftHeight = $('#left h3').height() + 60;
        var bottomLeftHeight = $('#left form').height();
        var leftHeight = Math.max(bottomLeftHeight, pageHeight - topLeftHeight);
        var maxWidth = Math.min($('#right').width(), Math.round(width * leftHeight / height))
        var maxHeight = height * maxWidth / width;
        $('#canvas, .canvas-container').css({ maxHeight: maxHeight, maxWidth: maxWidth });

        var groupCount = 0;
        groups.forEach(function(group,index) { addGroup(group, index, groupCount++) });

    };

    return service;

});

})();
