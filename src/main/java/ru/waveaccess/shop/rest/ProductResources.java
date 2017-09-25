package ru.waveaccess.shop.rest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.service.ProductService;
import ru.waveaccess.shop.service.ProductTypeService;

import javax.persistence.Column;
import java.security.Principal;
import java.sql.Blob;
import java.util.List;

/**
 * Created by Irina Kazantseva on 20.09.2017.
 */
@RestController
@RequestMapping("/product")
public class ProductResources {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductTypeService productTypeService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getAll(){
        return productService.findAll();
    }

    @RequestMapping(value = "/{productType}", method = RequestMethod.GET)
    public List<Product> getByProductCategory(@PathVariable("productType") Long productType){
        return productService.findByProductType(productType);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveProduct(@RequestBody ProductDto productDto){
        Product product = new Product();
        product.setDescription(productDto.description);
        product.setModel(productDto.model);
        product.setPrice(Long.parseLong(productDto.price));
        product.setProductType(productTypeService.findByProductTypeId(productDto.productTypeId));
        productService.saveProduct(product);
    }

    private static class ProductDto{
        private String model;
        private String description;
        private String price;
        private Long productTypeId;

        public ProductDto(){
        }

        public ProductDto(String model, String description, String price, Long productTypeId) {
            this.model = model;
            this.description = description;
            this.price = price;
            this.productTypeId = productTypeId;
        }

        public String getModel() {
            return model;
        }

        public void setModel(String model) {
            this.model = model;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getPrice() {
            return price;
        }

        public void setPrice(String price) {
            this.price = price;
        }

        public Long getProductTypeId() {
            return productTypeId;
        }

        public void setProductTypeId(Long productTypeId) {
            this.productTypeId = productTypeId;
        }
    }
}