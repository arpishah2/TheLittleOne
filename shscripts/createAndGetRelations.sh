
 2231  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'where={"friends":{"__type":"Pointer", className="Kid", objectId="HD0eAH5C3N"}}' http://localhost:1337/parse/classes/Kid
 2232  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'where={"friends":{"__type":"Pointer", className="Kid", objectId="2beqxJ4iXe"}}' http://localhost:1337/parse/classes/Kid
 2233  vim test
 2234  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'where={"friends":{"__type":"Pointer", className="Kid", objectId":"2beqxJ4iXe"}}' http://localhost:1337/parse/classes/Kid
 2235  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'where={"friends":{"__type":"Pointer", "className":"Kid", "objectId":"2beqxJ4iXe"}}' http://localhost:1337/parse/classes/Kid
 2236  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'where={"friends":{"__type":"Pointer", "className":"Kid", "objectId":"HD0eAH5C3N"}}' http://localhost:1337/parse/classes/Kid
 2237  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'include=friends' http://localhost:1337/parse/classes/Kid
 2238  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'include=friends' http://localhost:1337/parse/classes/Kid/2beqxJ4iXe
 2239  curl -X GET -H "X-Parse-Application-Id: my_app_id" http://localhost:1337/parse/classes/Kid/2beqxJ4iXe
 2240  curl -X GET -H "X-Parse-Application-Id: my_app_id" -G --data-urlencode 'include=*' http://localhost:1337/parse/classes/Kid/2beqxJ4iXe

