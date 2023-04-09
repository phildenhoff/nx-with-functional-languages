@genType
let make = (~count) => {
  switch count {
  | 1 => "once"
  | 2 => "twice"
  | n => Belt.Int.toString(n) ++ " times"
  }
}

@genType
let result = (~items) =>
  items
  ->Js.Array2.map(a => a + 1)
  ->Js.Array2.filter(a => mod(a, 2) == 0)
  ->Js.Array2.reduce((acc, item) => Js.Array2.concat(acc, [item + 1]), [0])