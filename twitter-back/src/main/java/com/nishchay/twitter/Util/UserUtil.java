package com.nishchay.twitter.Util;

import com.nishchay.twitter.model.User;

public class UserUtil {
	
	public static final boolean isReqUser(User reqUser,User user2) {
		return reqUser.getId().equals(user2.getId());
	}
	
	public static final boolean isFollowedByReqUser(User reqUser,User user2) {
		return reqUser.getFollowing().contains(user2);
	}

}
