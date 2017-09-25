package ru.waveaccess.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.ProductCategory;
import ru.waveaccess.shop.repository.ProductCategoryRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    public List<ProductCategory> findAll(){
        return productCategoryRepository.findAll();
    }

    public ProductCategory save(ProductCategory productCategory){
        return productCategoryRepository.save(productCategory);
    }

}