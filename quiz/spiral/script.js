(function ($, _) {
  "use strict";

  var checkNaN = function (id, value) {
    if (_.isNaN(value)) {
      $('#' + id).val('');
      return true;
    }
    return false;
  };

  var initResult = function (row) {
    return _.map(_.range(0, row), function () {
      return [];
    });
  };

  var getResult = function (row, col) {
    var len = row * col,
        result = initResult(row),
        pos = {x: 0, y: 0},
        posKey = 'x',
        add = 1;

    for (var i = 0, j = 1; i < len; i++) {
      result[pos.y][pos.x] = i;
      if (posKey === 'x' && j % col === 0) {
        col--;
        row--;
        posKey = 'y';
        j = 1;
      } else if (posKey === 'y' && j % row === 0) {
        add *= -1;
        posKey = 'x';
        j = 1;
      } else {
        j++;
      }
      pos[posKey] += add;
    }

    return result;
  };

  var render = function (result) {
    var trs = _.map(result, function (row) {
      var tds = _.map(row, function (col) {
        return '<td>' + col + '</td>';
      }).join('');
      return '<tr>' + tds + '</tr>';
    }).join('');
    $('#result-area').html('<table>' + trs + '</table>');
  };

  var spiral = function () {
    var row = parseInt($('#row').val()),
        col = parseInt($('#col').val());

    if (checkNaN('row', row) || checkNaN('col', col)) {
      $('#result-area').html('');
      return;
    }

    var result = getResult(row, col);
    render(result);
  };

  $(document).ready(function () {
    $('input[type=text]').on('keyup', spiral);
  });
})(jQuery, _);