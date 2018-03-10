package zhaopin.hibernate;

import org.springframework.data.repository.CrudRepository;

import zhaopin.hibernate.entity.Category;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface CategoryRepository extends CrudRepository<Category, Long> {

}