package ru.waveaccess.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.waveaccess.shop.model.ProductCategory;
import ru.waveaccess.shop.model.ProductType;

import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Repository
public interface ProductTypeRepository  extends JpaRepository<ProductType, Long> {

    @Query(value = "select *  from product_type p where p.product_category_id = :productCategory",
            nativeQuery = true)
    List<ProductType> findByProductCategory(@Param("productCategory")long productCategory);
}