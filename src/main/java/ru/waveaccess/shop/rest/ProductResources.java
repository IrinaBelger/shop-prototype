package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.service.ProductService;

import java.util.List;

/**
 * Created by Irina Kazantseva on 20.09.2017.
 */
@RestController
@RequestMapping("/product")
public class ProductResources {

    @Autowired
    private ProductService productService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getAll(){
        return productService.findAll();
    }

    @RequestMapping(value = "/{productType}", method = RequestMethod.GET)
    public List<Product> getByProductCategory(@PathVariable("productType") Long productType){
        return productService.findByProductType(productType);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void saveProduct(@RequestBody Product product){
        productService.saveProduct(product);
    }
}