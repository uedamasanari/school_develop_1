START TRANSACTION;
INSERT INTO USER_info (user_name, icon_path, user_coment, mail_address, password)
VALUES ('1111', '/path/to/icon.jpg', 'こんにちは', '111@example.com', 'password123');

INSERT INTO USER_info (user_name, icon_path, user_coment, mail_address, password)
VALUES ('2222', '/path/to/icon.jpg', 'Hello', '222@example.com', 'password456');

INSERT INTO item (picture_path, item_name, detail, user_id)
VALUES ('/path/to/item.jpg', '春コーデ', '春のお花見用', 1);

INSERT INTO item (picture_path, item_name, detail, user_id)
VALUES ('/path/to/item.jpg', '秋コーデ', '秋のお出かけ用', 2);


INSERT INTO tag (tag_id, tag_name, tag_color, user_id)
VALUES (1, '春', '#FFC0CB', 1);

INSERT INTO tag (tag_id, tag_name, tag_color, user_id)
VALUES (2, '桜', '#FFC0CB', 1);

INSERT INTO tag (tag_id, tag_name, tag_color, user_id)
VALUES (3, '秋', '#A52A2A', 2);

INSERT INTO tag (tag_id, tag_name, tag_color, user_id)
VALUES (4, '食欲の秋', '#A52A2A', 2);


INSERT INTO tagmaster (tag_id, item_id)
VALUES (1, 1);

INSERT INTO tagmaster (tag_id, item_id)
VALUES (2, 2);


INSERT INTO tweet (tweet_date, tweet_time, user_id)
VALUES ('2023-05-26', '12:34:56', 1);

INSERT INTO tweet (tweet_date, tweet_time, user_id)
VALUES ('2023-05-28', '9:34:56', 2);


INSERT INTO tweetitem (tweet_id, item_id)
VALUES (1, 1);

INSERT INTO tweetitem (tweet_id, item_id)
VALUES (2, 2);


INSERT INTO good (user_id, tweet_id, good_date, good_time)
VALUES (1, 1, '2023-05-26', '12:34:56');

INSERT INTO good (user_id, tweet_id, good_date, good_time)
VALUES (2, 2, '2023-06-10', '12:34:56');



INSERT INTO bookmark (user_id, tweet_id)
VALUES (1, 1);


/*/gpt/robbot/svg*/

COMMIT;







