package com.nishchay.twitter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nishchay.twitter.exception.TwitException;
import com.nishchay.twitter.exception.UserException;
import com.nishchay.twitter.model.Like;
import com.nishchay.twitter.model.Twit;
import com.nishchay.twitter.model.User;
import com.nishchay.twitter.repository.LikeRepository;
import com.nishchay.twitter.repository.TwitRepository;

@Service
public class LikesServiceImplementation implements LikeService {
	
	
	@Autowired
	private LikeRepository likeRepository;
	@Autowired
	private TwitService twitService;
	
	@Autowired
	private TwitRepository twitRepository;

	@Override
	public Like likeTwit(Long twitId, User user) throws UserException,TwitException {
		Like isLikeExist=likeRepository.isLikeExits(user.getId(), twitId);
		
		if(isLikeExist!=null) {
			likeRepository.deleteById(isLikeExist.getId());
			return isLikeExist;
			
		}
		Twit twit=twitService.findById(twitId);
		Like like=new Like();
		like.setTwit(twit);
		like.setUser(user);
	   
		Like savedLike=likeRepository.save(like);
		twit.getLikes().add(savedLike);
		twitRepository.save(twit);
		
		return savedLike;
	}

	@Override
	public List<Like> getAllLikes(Long twitId) throws TwitException {
		Twit twit=twitService.findById(twitId);
		List<Like> likes=likeRepository.findByTwitId(twitId);
		
		return likes;
	}

}
