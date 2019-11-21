# README

# index
app name
chat-space

Overview
Registered users create a group and talk


Information stored in db
## user table
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false, match(/.+@.+/): true|
|password|string|null: false, input minlength = 8 : true|
### Association
- has_many :messages
- has_many :user_group
- has_many :groups,  through:  :user_group

## group table
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user_id|integer|null: false,foreign_key: true|
### Association
- has_many :messages
- has_many :user_group
- has_many :users,  through:  :user_group

## message table
|Column|Type|Options|
|------|----|-------|
|message|string|null: false|
### Association
- belongs_to :user
- belongs_to :group

## user_group table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group