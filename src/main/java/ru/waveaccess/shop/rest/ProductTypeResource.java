package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ru.waveaccess.shop.model.ProductCategory;
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

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void editProductType(@RequestBody ProductType productType) {
        productTypeService.edit(productType);
    }

    @RequestMapping( value ="/{productTypeId}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("productTypeId") Long productTypeId){
        productTypeService.deleteById(productTypeId);
    }

}