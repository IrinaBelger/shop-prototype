package ru.waveaccess.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.repository.ProductRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public List<Product> findByProductType(Long productType){
        return productRepository.findByProductType(productType);
    }

    public Product findById(Long productId){
        return productRepository.findOne(productId);
    }

    public void saveProduct(Product product){
        productRepository.save(product);
    }

    public void delete(Long productId){
        productRepository.delete(productId);
    }


}