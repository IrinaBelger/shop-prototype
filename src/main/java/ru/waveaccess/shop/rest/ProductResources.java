package ru.waveaccess.shop.rest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.service.ProductService;
import ru.waveaccess.shop.service.ProductTypeService;

import javax.persistence.Column;
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

    @RequestMapping(method = RequestMethod.POST)
    public void saveProduct(@RequestBody ProductDto productDto){
        Product product = new Product();
        product.setDescription(productDto.description);
        product.setModel(productDto.model);
        product.setPrice(Long.parseLong(productDto.price));
        product.setProductType(productTypeService.findByProductTypeId(productDto.productTypeId));
        productService.saveProduct(product);
    }

    class ProductDto{
        private String model;
        private String description;
        private String price;
        private Long productTypeId;

        ProductDto(){

        }
    }
}