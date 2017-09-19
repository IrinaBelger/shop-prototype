package ru.waveaccess.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.waveaccess.shop.model.Product;


import java.util.List;

/**
 * Created by Irina Kazantseva on 19.09.2017.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select *  from product p where p.product_type_id = :productType",
            nativeQuery = true)
    List<Product> findByProductType(@Param("productType")long productType);

}