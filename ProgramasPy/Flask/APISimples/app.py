#Importar as coisas basicas do Flask, o mecanismo de request e o repositório que vai trabalhar com json
from flask import Flask, request, jsonify
#Import do SQL-Alchemy e do Marshmallow
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
#Só para nós ajudar
import os

# Inicialização do app
app = Flask(__name__)


#Para usar um banco de dados precisamos passar exatamente onde está o nosso banco de dados
basedir = os.path.abspath(os.path.dirname(__file__))

#Criação do banco
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #Se não tiver isso ele fica avisando a cada mod

# Inicialização do db
db = SQLAlchemy(app)
# Inicialização do ma
ma = Marshmallow(app)

#Fim das inicializações

#Classe recurso

# Product Class/Model
class Product(db.Model):
  #Assim como no django, definimos seu tipo, algumas particularidades como tamanho, etc...
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)
  description = db.Column(db.String(200))
  price = db.Column(db.Float)
  qty = db.Column(db.Integer)

  #Aqui vamos apenas inicializar a parada
  def __init__(self, name, description, price, qty):
    self.name = name
    self.description = description
    self.price = price
    self.qty = qty


# Product Schema
class ProductSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'description', 'price', 'qty')

# Init schema
product_schema = ProductSchema(strict=True) #Único recurso
products_schema = ProductSchema(many=True, strict=True) #Multiplos recursos

# Create a Product
@app.route('/product', methods=['POST'])
def add_product():
  #Pegando os campos passados pelo JSON
  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']
  #Criando a classe
  new_product = Product(name, description, price, qty)
  #Adicionando no nosso db, o que cria uma nova id para o produto
  db.session.add(new_product)
  db.session.commit()
  #Vamos retornar como o produto foi adicionado no db, poderia ser outra coisa aqui ou nada
  return product_schema.jsonify(new_product)


# Get All Products
@app.route('/product', methods=['GET'])
def get_products():
  #Pegamos todos os objetos da classe produto com esse query.all() usando o SQLAlchemy
  all_products = Product.query.all()
  #Empacotamos todos os objetos e retornamos o seu JSON correspondente
  result = products_schema.dump(all_products)
  return jsonify(result.data)

# Get Single Products
@app.route('/product/<id>', methods=['GET'])
def get_product(id): #Definir parâmetro é só pegar na função o <parametro>
  product = Product.query.get(id)
  return product_schema.jsonify(product)

# Update a Product
@app.route('/product/<id>', methods=['PUT'])
def update_product(id):
  #Pegamos o produto que queremos alterar
  product = Product.query.get(id)

  #Pegamos todas as novas variáveis
  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  #Mudamos elas no nosso produto
  product.name = name
  product.description = description
  product.price = price
  product.qty = qty

  #Atualizamos o nosso Bd
  db.session.commit()

  return product_schema.jsonify(product)


# Delete Product
@app.route('/product/<id>', methods=['DELETE'])
def delete_product(id):
  #Pegamos o produto
  product = Product.query.get(id)
  #Deletemos ele do Bd e o atualizamos na API
  db.session.delete(product)
  db.session.commit()
  #Retornamos só para ver o produto que foi excluido, mas poderia retornar um true
  return product_schema.jsonify(product)

# Run Server
if __name__ == '__main__':
  app.run(debug=True)
