package ru.waveaccess.shop.service;

import org.springframework.stereotype.Service;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.repository.ProductRepository;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Service
public class ProductService {
    private ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }




}