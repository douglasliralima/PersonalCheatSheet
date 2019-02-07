;; Todo arquivo de codigo-fonte em Racket deve começar com uma linha
;; com a diretiva #lang seguida do nome da linguagem; nós geralmente
;; vamos usar a linguagem racket
#lang racket

;; constantes numericas podem ser:
2         ; constantes inteiras
3.5       ; constantes de ponto flutuante (em vários formatos, como em outras linguagens)
6.02e23   ; constante de ponto flutuante em notação científica
4/3       ; constantes racionais

;; strings contem caracteres unicode
"λ 123"

;; notacao para constantes de caractere
#\A
#\space
#\newline
#\λ

;; Booleanos
#t
#f

;; Expressoes
(+ 2 3)         ; 2 + 3 em notacao infixa

; 5*5 + 4*3*2
(+
 (* 5 5)
 (* 4 3 2))

;; Variaveis
(define x 2)
(define y (string-length "Aussonderungsaxiom"))
(define s (string-append "um" "dois")) 

;; predicados de tipos
(string? s)
(number? x)

;; Expressao condicional (note que não é um comando condicional)
(if (> 3 2) "tres maior que dois" "que?")

(+ 5 (if (< 2 1) 0 3))

(define var-cond (if (> x 7) 11 22))    ; qual o valor de var-cond?

;; Funcoes
(define (f x) (* x 20))

;; equacoes de segundo grau
(define (delta a b c)
  (- (* b b)
     (* 4 a c)))

(define (raiz-positiva a b c)
  (/ (+ (- b) (sqrt (delta a b c)))
     (* 2 a)))

;; Funcao recursiva que calcula a soma dos N primeiros números
;; inteiros positivos (de 1 a N)
(define (soma-N N)
  (if (= N 1)
      1
      (+ N
         (soma-N (- N 1)))))
