package com.nishchay.twitter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nishchay.twitter.model.Twit;
import com.nishchay.twitter.model.User;

import java.util.*;

public interface TwitRepository extends JpaRepository<Twit, Long> {
	
	
	List<Twit> findAllByisTwitTrueOrderByCreatedAtDesc(); 
	
	List<Twit> findByReTwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user,Long userId);
	
	List<Twit> findByLikesContainingOrderByCreatedAtDesc(User user);
	
	
	@Query("SELECT t From Twit t JOIN t.likes l where l.user.id= :userId")
	List<Twit> findByLikesUser_id(Long userId);

}
