package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.waveaccess.shop.model.ProductCategory;
import ru.waveaccess.shop.service.ProductCategoryService;

import java.util.List;

/**
 * Created by Irina Kazantseva on 20.09.2017.
 */
@RestController
@RequestMapping("/product-category")
public class ProductCategoryResource {

    @Autowired
    private ProductCategoryService productCategoryService;

    @RequestMapping(method = RequestMethod.GET)
    public List<ProductCategory> getAll(){
        return productCategoryService.findAll();
    }

}