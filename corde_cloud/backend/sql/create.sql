CREATE TABLE USER_info
(user_id            INTEGER  AUTO_INCREMENT      NOT NULL,
 user_name          VARCHAR(128)                 NOT NULL,
 icon_path          VARCHAR(256)                         ,
 user_coment        VARCHAR(256)                         ,
 mail_address       CHAR(20)                             ,
 password           VARCHAR(256)                 NOT NULL,
 PRIMARY KEY(user_id));

CREATE TABLE item/*アイテムDB*/
(item_id           INTEGER   AUTO_INCREMENT     NOT NULL,
 picture_path      VARCHAR(256)                 NOT NULL,
 item_name         VARCHAR(256)                 NOT NULL,
 detail            VARCHAR(256)                         ,
 user_id           INTEGER                      NOT NULL,
 PRIMARY KEY(item_id),
CONSTRAINT item_fk_1 FOREIGN KEY (user_id)REFERENCES USER_info(user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);


CREATE TABLE tag (
  tag_id        INTEGER                      NOT NULL,
  tag_name      VARCHAR(128)                 NOT NULL,
  tag_color     VARCHAR(256)                 NOT NULL,
  user_id       INTEGER                      NOT NULL,  
  PRIMARY KEY(tag_id),
  CONSTRAINT tag_fk_1 FOREIGN KEY (user_id) REFERENCES USER_info(user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);


CREATE TABLE tagmaster
(tagmaster_id   INTEGER AUTO_INCREMENT      NOt NULL,
 tag_id         INTEGER                     NOT NULL,
 item_id        INTEGER                     NOT NULL,     
  PRIMARY KEY(tagmaster_id),
  CONSTRAINT tagmaster_fk_1 FOREIGN KEY (tag_id) REFERENCES tag(tag_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT tagmaster_fk_2 FOREIGN KEY (item_id) REFERENCES item(item_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);





CREATE TABLE tweet/*投稿DB*/
(tweet_id          INTEGER AUTO_INCREMENT NOT NULL,
 tweet_date        DATE                   NOT NULL,
 tweet_time        TIME                   NOT NULL,
 user_id           INTEGER                NOT NULL,
 PRIMARY KEY(tweet_id),
CONSTRAINT tweet_fk_1 FOREIGN KEY (user_id)REFERENCES USER_info(user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);

CREATE TABLE tweetitem/*投稿アイテムDB*/
(tweetitem_id     INTEGER AUTO_INCREMENT NOT NULL,
 tweet_id         INTEGER                NOT NULL,
 item_id         INTEGER                NOT NULL,
 PRIMARY KEY(tweetitem_id),
 CONSTRAINT tweetitem_fk_1 FOREIGN KEY (tweet_id) REFERENCES tweet(tweet_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT tweetitem_fk_2 FOREIGN KEY (item_id) REFERENCES item(item_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);


CREATE TABLE  good/*いいねDB*/
(good_id        INTEGER   AUTO_INCREMENT NOT NULL,
 user_id        INTEGER                  NOT NULL,
 tweet_id       INTEGER                  NOT NULL,
 good_date      DATE                     NOT NULL,
 good_time      TIME                     NOT NULL,
  PRIMARY KEY(good_id),
CONSTRAINT good_fk_1 FOREIGN KEY (user_id)REFERENCES USER_info(user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT good_fk_2 FOREIGN KEY (tweet_id)REFERENCES tweet(tweet_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);


CREATE TABLE bookmark/*ブックマークDB*/
 (user_id          INTEGER               NOT NULL,
 tweet_id         INTEGER               NOT NULL,
 PRIMARY KEY (user_id),
CONSTRAINT bookmark_fk_1 FOREIGN KEY (user_id)REFERENCES USER_info(user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT bookmark_fk_2 FOREIGN KEY (tweet_id)REFERENCES tweet(tweet_id)
        ON DELETE RESTRICT ON UPDATE CASCADE);












    