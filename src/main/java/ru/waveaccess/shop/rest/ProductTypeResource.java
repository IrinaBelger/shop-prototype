package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.waveaccess.shop.model.ProductType;
import ru.waveaccess.shop.service.ProductTypeService;

import java.util.List;

/**
 * Created by Irina Kazantseva on 20.09.2017.
 */
@RestController
@RequestMapping("/product-type")
public class ProductTypeResource {

    @Autowired
    private ProductTypeService productTypeService;

    @RequestMapping(method = RequestMethod.GET)
    public List<ProductType> getAll(){
        return productTypeService.findAll();
    }

    @RequestMapping(value = "/{productCategory}", method = RequestMethod.GET)
    public List<ProductType> getByProductCategory(@PathVariable("productCategory") Long productCategory){
        return productTypeService.findByProductCategory(productCategory);
    }
}