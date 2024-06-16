package com.nishchay.twitter.Dto.Mapper;

import java.util.List;

import com.nishchay.twitter.Dto.TwitDto;
import com.nishchay.twitter.Dto.UserDto;
import com.nishchay.twitter.Util.TwitUtil;
import com.nishchay.twitter.model.Twit;
import com.nishchay.twitter.model.User;
import java.util.*;

public class TwitDtoMapper {
	
	public static TwitDto toTwitDto(Twit twit,User reqUser) {
		UserDto user=UserDtoMapper.toUserDto(twit.getUser());
		
		boolean isLiked=TwitUtil.isLikedByReqUser(reqUser,twit);
		boolean isRetwitted=TwitUtil.isRetwitedByReqUser(reqUser, twit);
		
		List<Long> reTwitUserId=new ArrayList<>();
		
		for(User user1:twit.getReTwitUser()) {
			reTwitUserId.add(user1.getId());
		}
		
		TwitDto twitDto=new TwitDto();
		twitDto.setId(twit.getId());
		twitDto.setContent(twit.getContent());
		twitDto.setCreatedAt(twit.getCreatedAt());
		twitDto.setImage(twit.getImage());
		twitDto.setTotalLikes(twit.getLikes().size());
		twitDto.setTotalReplies(twit.getReplyTwits().size());
		twitDto.setTotalRetweets(twit.getReTwitUser().size());
		twitDto.setUser(user);
		twitDto.setLiked(isLiked);
		twitDto.setRetwit(isRetwitted);
		twitDto.setRetwitUserId(reTwitUserId);
		twitDto.setReplyTwits(toTwitDtos(twit.getReplyTwits(), reqUser));
		twitDto.setVideo(twit.getVideo());
		
		return twitDto;
	}
	
	public static List<TwitDto> toTwitDtos(List<Twit> twits,User reqUser){
		List<TwitDto> twitDtos=new ArrayList<>();
		for(Twit twit:twits) {
			TwitDto twitDto=toReplyTwitDto(twit,reqUser);
			twitDtos.add(twitDto);
		}
		return twitDtos;
	}

	private static TwitDto toReplyTwitDto(Twit twit, User reqUser) {
UserDto user=UserDtoMapper.toUserDto(twit.getUser());
		
		boolean isLiked=TwitUtil.isLikedByReqUser(reqUser,twit);
		boolean isRetwitted=TwitUtil.isRetwitedByReqUser(reqUser, twit);
		
		List<Long> reTwitUserId=new ArrayList<>();
		
		for(User user1:twit.getReTwitUser()) {
			reTwitUserId.add(user1.getId());
		}
		
		TwitDto twitDto=new TwitDto();
		twitDto.setId(twit.getId());
		twitDto.setContent(twit.getContent());
		twitDto.setCreatedAt(twit.getCreatedAt());
		twitDto.setImage(twit.getImage());
		twitDto.setTotalLikes(twit.getLikes().size());
		twitDto.setTotalReplies(twit.getReplyTwits().size());
		twitDto.setTotalRetweets(twit.getReTwitUser().size());
		twitDto.setUser(user);
		twitDto.setLiked(isLiked);
		twitDto.setRetwit(isRetwitted);
		twitDto.setRetwitUserId(reTwitUserId);
		
		twitDto.setVideo(twit.getVideo());
		
		return twitDto;
	}
	

}
