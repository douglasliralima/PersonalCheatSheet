#lang racket

#|
Existe algumas funções genéricas quando trabalhamos em linguagem funcional que servem para otimizar
as funções do nosso código. A primeira é o map, ela que basicamente dado uma função de um elemento e uma
lista, aplica a função em todos os elementos dessa lista
|#

(map (lambda (x) (* x 2)) '(3 5 7 11 22))


;;Tamanho de uma lista de strings
(map string-length (list "Lost" "Fringe" "The Sopranos"))

;;Temos também o fold-right e fold-left que, dado um valor e uma função, ele vai percolando a lista aplicando essa função
;;com o próximo valor a partir do começo(fold-right) ou ao anterior a partir do inicio(fold-lef)

(foldr (lambda (x y) (- y x)) 1000 '(40 10 30))


(foldl - 1000 '(40 10 30))

;;Temos também a função filter, que dado uma funcao que retorna apenas true ou falso para dado 1 elemento, ela
;;filtra todos os elementos de uma lista que nessa funcao retornam false, veja o exemplo com a função even?(par) e odd?(impar)
(filter positive? '(1 -2 3 4 -5))
(filter-not odd? '(1 2 3 4 5 6))
;;Partition é similar a filter, que retorna uma lista com duas listas, um com os elementos filtrados e outra com os descartados
(partition even? '(1 2 3 4 5 6))