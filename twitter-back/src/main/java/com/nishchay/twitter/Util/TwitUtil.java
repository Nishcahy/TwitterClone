package com.nishchay.twitter.Util;

import com.nishchay.twitter.model.Like;
import com.nishchay.twitter.model.Twit;
import com.nishchay.twitter.model.User;

public class TwitUtil {
	
	public final static boolean isLikedByReqUser(User reqUser,Twit twit) {
		for(Like like:twit.getLikes()) {
			if(like.getUser().getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
		
	}
	public final static boolean isRetwitedByReqUser(User reqUser,Twit twit) {
		for(User user:twit.getReTwitUser()) {
			if(user.getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}

}
