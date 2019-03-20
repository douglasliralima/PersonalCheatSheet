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
