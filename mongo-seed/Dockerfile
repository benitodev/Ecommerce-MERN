FROM mongo:latest

COPY products.json /products.json
COPY users.json /users.json
COPY carts.json /carts.json

CMD mongoimport --uri mongodb://ecommerce_db:27017/ecommerce --collection products --type json --file /products.json --jsonArray ; mongoimport --uri mongodb://ecommerce_db:27017/ecommerce --collection users --type json --file /users.json --jsonArray ; mongoimport --uri mongodb://ecommerce_db:27017/ecommerce --collection carts --type json --file /carts.json --jsonArray