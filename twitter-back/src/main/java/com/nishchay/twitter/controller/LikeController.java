package com.nishchay.twitter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nishchay.twitter.Dto.LikeDto;
import com.nishchay.twitter.Dto.Mapper.LikeDtoMapper;
import com.nishchay.twitter.exception.TwitException;
import com.nishchay.twitter.exception.UserException;
import com.nishchay.twitter.model.Like;
import com.nishchay.twitter.model.User;
import com.nishchay.twitter.service.LikeService;
import com.nishchay.twitter.service.UserService;

@RestController
@RequestMapping("/api")
public class LikeController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private LikeService likeService;
	
	@PostMapping("/{twitId}/like")
	public ResponseEntity<LikeDto> likeTwit(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt) throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		Like like=likeService.likeTwit(twitId, user);
		
		
		LikeDto likeDto=LikeDtoMapper.toLikeDto(like, user);
		
		return  new ResponseEntity<LikeDto>(likeDto,HttpStatus.CREATED);
	}
	
	@PostMapping("/twit/{twitId}")
	public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt) throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		List<Like> likes=likeService.getAllLikes(twitId);
		
		
		List<LikeDto> likeDto=LikeDtoMapper.toLikeDtos(likes, user);
		
		return  new ResponseEntity<>(likeDto,HttpStatus.CREATED);
	}

}
