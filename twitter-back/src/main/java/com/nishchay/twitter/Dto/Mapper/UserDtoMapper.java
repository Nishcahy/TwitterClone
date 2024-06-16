package com.nishchay.twitter.Dto.Mapper;

import java.util.ArrayList;
import java.util.List;

import com.nishchay.twitter.Dto.UserDto;
import com.nishchay.twitter.model.User;

public class UserDtoMapper {
	
	public static UserDto toUserDto(User user) {
		
		UserDto userDto=new UserDto();
		
		userDto.setId(user.getId());
		userDto.setEmail(user.getEmail());
		userDto.setFullName(user.getFullName());
		userDto.setImage(user.getImage());
		userDto.setBackgroundImage(user.getBackgroundImage());
		userDto.setBirthdate(user.getBirthDate());
		userDto.setBio(user.getBio());
		userDto.setFollowers(toUserDtos(user.getFollowers()));
		userDto.setFollowing(toUserDtos(user.getFollowing()));
		userDto.setLogin_with_google(user.isLogin_with_google());
		userDto.setLocation(user.getLocation());
//		userDto.setVerified(false);
		return userDto;
		
	}

	public static List<UserDto> toUserDtos(List<User> followers) {
		List<UserDto> userDtos=new ArrayList<>();
		for(User user:followers) {
			UserDto userDto=new UserDto();
			
			userDto.setId(user.getId());
			userDto.setEmail(user.getEmail());
			userDto.setFullName(user.getFullName());
			userDto.setImage(user.getImage());
			userDtos.add(userDto);
		}
		return userDtos;
	}

}
