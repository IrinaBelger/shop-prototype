package ru.waveaccess.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.waveaccess.shop.model.Product;
import ru.waveaccess.shop.model.ProductCategory;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Repository
public interface ProductCategoryRepository  extends JpaRepository<ProductCategory, Long> {
}