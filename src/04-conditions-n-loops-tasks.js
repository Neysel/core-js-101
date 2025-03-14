/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } if (num % 3 === 0) {
    return 'Fizz';
  } if (num % 5 === 0) {
    return 'Buzz';
  } return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;

  return (n * getFactorial(n - 1));
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  const first = ((n2 - n1) + 1);
  const second = (n1 + n2);
  const firstMul = first * second;
  return firstMul / 2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1x2 = rect1.height + rect1.top;
  const rect1y2 = rect1.width + rect1.left;
  const rect2x2 = rect2.height + rect2.top;
  const rect2y2 = rect2.width + rect2.left;
  // no vertical overlap
  if (rect1.top >= rect2x2 || rect2.top >= rect1x2) return false;
  // no horizontal overlap
  if (rect1.left >= rect2y2 || rect2.left >= rect1y2) return false;

  return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const distPoints = (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2;
  const radiusSquared = circle.radius * circle.radius;
  if (distPoints < radiusSquared) {
    return true;
  }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const chars = str.split(' ').join('').split('');
  for (let i = 0; i < chars.length; i += 1) {
    // console.log(chars.filter((j) => j === str.charAt(i)));
    if (chars.filter((j) => j === str.charAt(i)).length === 1) return str.charAt(i);
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  if (isStartIncluded && isEndIncluded) {
    return `[${min}, ${max}]`;
  } if (isStartIncluded && !isEndIncluded) {
    return `[${min}, ${max})`;
  } if (!isStartIncluded && isEndIncluded) {
    return `(${min}, ${max}]`;
  } return `(${min}, ${max})`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return num.toString().split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let tempDigit;
  let oddSum = 0;
  let evenSum = 0;
  let digits = 10;
  digits = (`${ccn}`).split('').reverse().join('');
  // odd
  for (let i = 0; i < digits.length; i += 2) {
    oddSum += +digits[i];
  }
  // even
  for (let i = 1; i < digits.length; i += 2) {
    tempDigit = digits[i] * 2;
    if (tempDigit >= 10) {
      evenSum += +tempDigit.toString()[0] + +tempDigit.toString()[1];
    } else evenSum += tempDigit;
  }
  return (oddSum + evenSum) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const strNum = num.toString();
  let sum = 0;
  let total = 0;
  for (let i = 0; i < strNum.length; i += 1) {
    sum += +strNum[i];
    // console.log(sum);
  }
  // console.log(sum >= 10);
  if (sum >= 10) {
    // console.log(sum);
    total = +sum.toString()[0] + +sum.toString()[1];
  } else total = sum;

  return total;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  const openbrackets = [];
  const closingbrackets = [];
  const stack = [];

  for (let i = 0; i < bracketsConfig.length; i += 1) {
    openbrackets.push(bracketsConfig[i][0]);
    closingbrackets.push(bracketsConfig[i][1]);
  }
  let elem;
  for (let i = 0; i < str.length; i += 1) {
    elem = str[i];
    let bracketIndex;

    if (openbrackets.includes(elem) && !closingbrackets.includes(elem)) {
      bracketIndex = openbrackets.indexOf(elem);
      stack.push(bracketIndex);
    } else {
      bracketIndex = closingbrackets.indexOf(elem);
      if (stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  // let i = 0;
  let result;
  for (let i = 0; pathes.every((path) => path[i] === pathes[0][i]); i += 1) {
    if (i === 0) {
      result = pathes[0].slice(0, 1);
    } else result = pathes[0].slice(0, i).replace(/[|]/, '');
    // console.log(pathes[0].slice(0, i).replace(/[|]/, ''));
  }
  // console.log(result.toString().lastIndexOf('/'));
  // console.log(result);

  if (result) {
    const num = result.lastIndexOf('/');
    return result.slice(0, num + 1);
  }
  //  console.log('str');
  return '';
  // console.log(num);
  // console.log(result.slice(0, num));
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const result = new Array(m1.length)
    .fill(0)
    .map(() => new Array(m2[0].length)
      .fill(0));
  // console.log(result);


  // console.log(result.map((row, i) => row
  //   .map((_, j) => m1[i]
  //     .reduce((sum, e, k) => sum + (e * m2[k][j]), 0))));

  return result
    .map((row, i) => row
      .map((_, j) => m1[i]
        .reduce((sum, e, k) => sum + (e * m2[k][j]), 0)));
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  let board = position;
  for (let i = 0; i < position.length; i += 1) {
    if (board[i].length < 3) {
      board[i].push('N');
    }
    if (board[i].includes(undefined)) {
      if (board[i][0] === undefined) {
        board[i][0] = 'N';
      }

      if (board[i][1] === undefined) {
        board[i][1] = 'N';
      }

      if (board[i][2] === undefined) {
        board[i][2] = 'N';
      }
      // console.log(board[i]);
    }
  }
  // console.log(board);
  board = board.join('-').replace(/,/g, '');
  // console.log(board);

  if (/XXX|X...X...X|X....X....X|X..X..X/.test(board)) {
    // console.log('X!!!!');
    // console.log('-----');
    return 'X';
  }
  if (/000|0...0...0|0....0....0|0..0..0/.test(board)) {
    // console.log('0!!!!');
    // console.log('-----');
    return 0;
  } if (/0/.test(board)) {
    // console.log('0!!!!');
    // console.log('-----');
    return undefined;
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
