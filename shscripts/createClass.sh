#!/bin/bash

curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Arjun"}' http://localhost:1337/parse/classes/Kid
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Rushabh"}' http://localhost:1337/parse/classes/Kid
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Kanav"}' http://localhost:1337/parse/classes/Kid
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Nitya"}' http://localhost:1337/parse/classes/Kid
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Jayu"}' http://localhost:1337/parse/classes/Kid
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Vriti"}' http://localhost:1337/parse/classes/Kid

curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Chintan","phnno":123}' http://localhost:1337/parse/classes/Parent
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Devanshi","phnno":456}' http://localhost:1337/parse/classes/Parent
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Prachi","phnno":789}' http://localhost:1337/parse/classes/Parent
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Chitrang","phnno":110}' http://localhost:1337/parse/classes/Parent
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Ilesh","phnno":112}' http://localhost:1337/parse/classes/Parent
curl -X POST -H "X-Parse-Application-Id: my_app_id" -H "Content-Type: application/json" -d '{"name":"Grishma","phnno":113}' http://localhost:1337/parse/classes/Parent


