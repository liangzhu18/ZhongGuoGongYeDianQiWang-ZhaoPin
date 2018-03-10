package zhaopin.hibernate;

import org.springframework.data.repository.CrudRepository;

import zhaopin.hibernate.entity.Nav;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface NavRepository extends CrudRepository<Nav, Long> {

}