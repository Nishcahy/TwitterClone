package com.nishchay.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nishchay.twitter.model.Like;

public interface LikeRepository extends JpaRepository<Like, Long> {
	
	
	@Query("SELECT l FROM Like l WHERE l.user.id=:userId AND l.twit.id= :twitId")
	public Like isLikeExits(@Param("userId") Long userId,@Param("twitId") Long twitId);
	
	
	@Query("SELECT l FROM Like l WHERE l.twit.id= :twitId")
	public List<Like> findByTwitId(@Param("twitId")Long twitId); 

}



