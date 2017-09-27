package ru.waveaccess.shop.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
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
    public List<ProductCategory> getAll() {
        return productCategoryService.findAll();
    }

    @RequestMapping(value = "/map", method = RequestMethod.GET)
    public Map<String, List<ProductType>> getMap() {
        List<ProductCategory> productCategories = productCategoryService.findAll();
        Map<String, List<ProductType>> map = new HashMap<String, List<ProductType>>();
        for (ProductCategory productCategory : productCategories) {
            map.put(productCategory.getName(), productTypeService.findByProductCategory(productCategory.getId()));
        }
        return map;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ProductCategory saveProductCategory(@RequestBody ProductCategoryDto productCategoryDto) {
        ProductCategory productCategory = new ProductCategory();
        productCategory.setName(productCategoryDto.getName());
        productCategory = productCategoryService.save(productCategory);
        String[] types = productCategoryDto.types.split(",");
        for(String type : types){
            ProductType productType = new ProductType();
            productType.setName(type);
            productType.setProductCategory(productCategory);
            productTypeService.save(productType);
        }
        return productCategory;
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void editProductCategory(@RequestBody ProductCategory productCategory) {
        productCategoryService.edit(productCategory);
    }

    @RequestMapping( value ="/{productCategoryId}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("productCategoryId") Long productCategoryId){
        productCategoryService.deleteById(productCategoryId);
    }


    private static class ProductCategoryDto {
        private String name;
        private String types;

        public ProductCategoryDto(){}

        public ProductCategoryDto(String name, String types) {
            this.name = name;
            this.types = types;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getTypes() {
            return types;
        }

        public void setTypes(String types) {
            this.types = types;
        }
    }

}