package ru.waveaccess.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.model.ProductCategory;
import ru.waveaccess.shop.model.ProductType;
import ru.waveaccess.shop.repository.ProductCategoryRepository;
import ru.waveaccess.shop.repository.ProductRepository;
import ru.waveaccess.shop.repository.ProductTypeRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<ProductCategory> findAll(){
        return productCategoryRepository.findAll();
    }

    public ProductCategory save(ProductCategory productCategory){
        return productCategoryRepository.save(productCategory);
    }

    public void edit(ProductCategory productCategory){
        ProductCategory oldProductCategory = productCategoryRepository.findOne(productCategory.getId());
        oldProductCategory.setName(productCategory.getName());
        productCategoryRepository.save(oldProductCategory);
    }
    public void deleteById(Long productCategoryId){
        List<ProductType> productTypes = productTypeRepository.findByProductCategory(productCategoryId);
        for(ProductType productType: productTypes){
            List<Product> products = productRepository.findByProductType(productType.getId());
            for(Product product: products){
                productRepository.delete(product.getId());
            }
            productTypeRepository.delete(productType.getId());
        }
        productCategoryRepository.delete(productCategoryId);
    }

    public void deleteByName(String name){
        ProductCategory productCategory = productCategoryRepository.findProductCategoryByNameIs(name);
        List<ProductType> productTypes = productTypeRepository.findByProductCategory(productCategory.getId());
        for(ProductType productType: productTypes){
            List<Product> products = productRepository.findByProductType(productType.getId());
            for(Product product: products){
                productRepository.delete(product.getId());
            }
            productTypeRepository.delete(productType.getId());
        }
        productCategoryRepository.delete(productCategory.getId());
    }
}