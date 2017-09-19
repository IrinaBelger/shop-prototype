CREATE TABLE product_type (
  id          BIGINT auto_increment,
  name VARCHAR(255),
  product_category_id   BIGINT       NOT NULL REFERENCES product_category(id),
  PRIMARY KEY (id)
);
