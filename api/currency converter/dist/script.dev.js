"use strict";

(function () {
  var BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
  var amount = document.querySelector("#amount");
  var from = document.querySelector("#from");
  var to = document.querySelector("#to");
  var convertBtn = document.querySelector("#convertBtn");
  var resetBtn = document.querySelector("#resetBtn");
  var hidden = document.getElementsByClassName("hidden");
  var exchange_rate = document.querySelector("#exchange_rate");
  var converted_price = document.querySelector("#converted_price");

  var generateOption = function generateOption() {
    from.options.length = 0;
    to.options.length = 0;

    for (var key in countryList) {
      var fromOption = document.createElement("option");
      fromOption.value = key;
      fromOption.innerHTML = key;
      from.append(fromOption);
      var toOption = document.createElement("option");
      toOption.value = key;
      toOption.innerHTML = key;
      to.append(toOption);
    }
  };

  var convert = function convert() {
    var amount_val, from_val, to_val, cur_from, cur_to, res, rate, converted_amount, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

    return regeneratorRuntime.async(function convert$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            amount_val = amount.value ? amount.value : 1;
            from_val = from.value;
            to_val = to.value;
            cur_from = from_val.toLowerCase();
            cur_to = to_val.toLowerCase();
            _context.next = 7;
            return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "/").concat(cur_from, ".json")));

          case 7:
            res = _context.sent;
            _context.next = 10;
            return regeneratorRuntime.awrap(res.json());

          case 10:
            res = _context.sent;
            rate = res[cur_from][cur_to];

            if (!(rate != undefined)) {
              _context.next = 37;
              break;
            }

            converted_amount = amount_val * rate;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 17;

            for (_iterator = hidden[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              element = _step.value;
              element.style.visibility = "visible";
            }

            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](17);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(25);

          case 33:
            exchange_rate.innerHTML = "1 ".concat(from_val, " = ").concat(rate, " ").concat(to_val);
            converted_price.innerHTML = "".concat(amount_val, " ").concat(from_val, " = ").concat(converted_amount, " ").concat(to_val);
            _context.next = 39;
            break;

          case 37:
            hidden[0].style.visibility = "visible";
            exchange_rate.innerHTML = "Sorry! Exchange rate not found!";

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[17, 21, 25, 33], [26,, 28, 32]]);
  };

  var reset = function reset() {
    amount.value = '';
    generateOption();
    exchange_rate.innerHTML = "";
    converted_price.innerHTML = "";
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = hidden[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var element = _step2.value;
        element.style.visibility = "hidden";
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  generateOption();
  convertBtn.addEventListener('click', convert);
  resetBtn.addEventListener('click', reset);
})();