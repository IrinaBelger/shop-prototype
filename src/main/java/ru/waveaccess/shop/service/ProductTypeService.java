package ru.waveaccess.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.ProductType;
import ru.waveaccess.shop.repository.ProductTypeRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    public List<ProductType> findByProductCategory(Long productCategory){
        return productTypeRepository.findByProductCategory(productCategory);
    }

    public List<ProductType> findAll(){
        return productTypeRepository.findAll();
    }

}