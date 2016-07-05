#!/bin/sh

MONGODB_SERVER=127.0.0.1
MONGODB_PORT=27017
parse-server --appId my_app_id --masterKey my_master_key --databaseURI mongodb://$MONGODB_SERVER:$MONGODB_PORT
