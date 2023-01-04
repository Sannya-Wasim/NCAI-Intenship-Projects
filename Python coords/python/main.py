# Python program to read
# json file


import json

# Opening JSON file
f = open('./draw/polygon.json')

# returns JSON object as
# a dictionary
data = json.load(f)

# Iterating through the json
# list
for i in data['geometry']['coordinates']:
	print(i)

# Closing file
f.close()


# import json

# from flask import request

# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('./draw/index.html')

# @app.route('/test', methods=['POST'])
# def test():
#     output = request.get_json()
#     print(output) # This is the output that was stored in the JSON within the browser
#     print(type(output))
#     result = json.loads(output) #this converts the json output to a python dictionary
#     print(result) # Printing the new dictionary
#     print(type(result))#this shows the json converted as a python dictionary
#     return result