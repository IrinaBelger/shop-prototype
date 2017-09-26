package ru.waveaccess.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.model.ProductType;
import ru.waveaccess.shop.repository.ProductRepository;
import ru.waveaccess.shop.repository.ProductTypeRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<ProductType> findByProductCategory(Long productCategory){
        return productTypeRepository.findByProductCategory(productCategory);
    }

    public ProductType findByProductTypeId(Long productTypeId){
        return productTypeRepository.findOne(productTypeId);
    }

    public List<ProductType> findAll(){
        return productTypeRepository.findAll();
    }

    public ProductType save(ProductType productType){
        return productTypeRepository.save(productType);
    }

    public void edit(ProductType productType){
        ProductType oldProductType = productTypeRepository.findOne(productType.getId());
        oldProductType.setName(productType.getName());
        productTypeRepository.save(oldProductType);
    }

    public void deleteById(Long productTypeId){
        List<Product> products  = productRepository.findByProductType(productTypeId);
        for(Product product : products){
            productRepository.delete(product.getId());
        }
        productTypeRepository.delete(productTypeId);
    }
}