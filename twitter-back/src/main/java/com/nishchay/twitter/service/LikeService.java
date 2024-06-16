package com.nishchay.twitter.service;

import java.util.List;

import com.nishchay.twitter.exception.TwitException;
import com.nishchay.twitter.exception.UserException;
import com.nishchay.twitter.model.Like;
import com.nishchay.twitter.model.User;

public interface LikeService {
	
	public Like likeTwit(Long twitId,User user) throws UserException,TwitException;
	
	public List<Like> getAllLikes(Long twitId) throws TwitException;
}
