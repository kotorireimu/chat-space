# README

# index
## app name
chat-space

## Overview
Registered users create a group and talk


# Information stored in db
## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, match(/.+@.+/): true|
|password|string|null: false, input minlength = 8 : true|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups,  through:  :users_groups

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :users,  through:  :users_groups

## message table
|Column|Type|Options|
|------|----|-------|
|message|string|null: false|
### Association
- belongs_to :user
- belongs_to :group

## users_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group