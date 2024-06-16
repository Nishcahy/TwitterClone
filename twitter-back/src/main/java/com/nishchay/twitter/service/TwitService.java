package com.nishchay.twitter.service;

import java.util.List;

import com.nishchay.twitter.exception.TwitException;
import com.nishchay.twitter.exception.UserException;
import com.nishchay.twitter.model.Twit;
import com.nishchay.twitter.model.User;
import com.nishchay.twitter.request.TwitReplyRequest;

public interface TwitService {
	
	public Twit createTwit(Twit req,User user) throws UserException;
	public List<Twit> findAllTwit();
	public Twit retwit(Long twitId,User user) throws UserException,TwitException;
	public Twit findById(Long twitId) throws TwitException;
	
	public void deleteTwitById(Long twitId,Long userId) throws TwitException,UserException;
	public Twit removeFromRetwit(Long twitId,User user) throws TwitException,UserException;
	
	public Twit createdReply(TwitReplyRequest req,User user) throws TwitException;
	
	public List<Twit> getUserTwit(User user);
	
	public List<Twit> findByLikesContainsUser(User user);
	
	

}
