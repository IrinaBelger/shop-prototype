CREATE TABLE product (
  id          BIGINT auto_increment,
  model VARCHAR(255),
  description VARCHAR(255),
  image BLOB,
  price BIGINT,
  product_type_id   BIGINT       NOT NULL REFERENCES product_type(id),
  PRIMARY KEY (id)
);
