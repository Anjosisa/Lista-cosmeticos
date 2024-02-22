from flask import Flask, render_template, request, jsonify
import pandas as pd
import csv

app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/list", methods=['GET'])
def listar_itens():
    item = pd.read_csv('Lista.csv')
    return render_template("produtos.html", lista_produtos=item)

@app.route("/add", methods=['POST'])
def add_item():
    item = request.json
    print(item)
    with open ("Lista.csv", "a", newline="") as arquivo:
        arquivo.write(f"\n{item['PRODUTO']},{item['MARCA']},{item['VALOR']}")
        
    return "", 201
    
    
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")