package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.model.ProductCategory;
import ru.waveaccess.shop.model.ProductType;
import ru.waveaccess.shop.service.ProductCategoryService;
import ru.waveaccess.shop.service.ProductTypeService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Irina Kazantseva on 20.09.2017.
 */
@RestController
@RequestMapping("/product-category")
public class ProductCategoryResource {

    @Autowired
    private ProductCategoryService productCategoryService;

    @Autowired
    private ProductTypeService productTypeService;

    @RequestMapping(method = RequestMethod.GET)
    public List<ProductCategory> getAll(){
        return productCategoryService.findAll();
    }

    @RequestMapping(value="/map", method = RequestMethod.GET)
    public Map<String, List<ProductType>> getMap(){
        List<ProductCategory> productCategories =  productCategoryService.findAll();
        Map<String, List<ProductType>> map = new HashMap<String, List<ProductType>>();
        for(ProductCategory productCategory : productCategories){
            map.put(productCategory.getName(), productTypeService.findByProductCategory(productCategory.getId()));
        }
        return map;
    }

}