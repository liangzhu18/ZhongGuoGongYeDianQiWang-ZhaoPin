package zhaopin.hibernate;

import org.springframework.data.repository.CrudRepository;

import zhaopin.hibernate.entity.RecommendKeywords;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface RecommendKeywordsRepository extends CrudRepository<RecommendKeywords, Long> {

}